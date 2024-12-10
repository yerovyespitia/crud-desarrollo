'use client'
import { createProduct } from '@/actions'
import { redirect } from 'next/navigation'

export default function Page() {
  return (
    <div className='max-w-lg mx-auto'>
      <form
        action={async (formData) => {
          const result = await createProduct(formData)
          if (!result) {
            alert('El nombre del producto ya existe. Por favor escoja otro')
          } else {
            redirect('/')
          }
        }}
        className='flex flex-col gap-4'
      >
        <label>Nombre</label>
        <input
          type='text'
          name='name'
          className='rounded-md h-9 text-white px-2 border border-white bg-transparent'
          placeholder='Nombre'
          required
        />
        <label>Descripción</label>
        <input
          type='text'
          name='description'
          className='rounded-md h-9 text-white px-2 border border-white bg-transparent'
          placeholder='Descripción'
          required
        />
        <label>Precio</label>
        <input
          type='number'
          name='price'
          className='rounded-md h-9 text-white px-2 border border-white bg-transparent'
          placeholder='Precio'
          required
          step='0.001'
          min='0'
        />
        <label>Cantidad</label>
        <input
          type='number'
          name='amount'
          className='rounded-md h-9 text-white px-2 border border-white bg-transparent'
          placeholder='Cantidad'
          required
          min='0'
        />
        <div>
          <input
            type='submit'
            value='Enviar'
            className='bg-transparent text-white border border-white px-4 py-1.5 rounded-md cursor-pointer'
          />
        </div>
      </form>
    </div>
  )
}
