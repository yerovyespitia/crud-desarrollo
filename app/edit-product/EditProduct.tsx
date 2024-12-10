'use client'
import { editProduct } from '@/actions'

export const EditProduct = ({ product, id }: any) => {
  return (
    <div className='max-w-lg mx-auto'>
      <form
        action={async (formData) => {
          const result = await editProduct(formData, id)
          if (!result) {
            alert('El nombre del producto ya existe. Por favor escoja otro')
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
          defaultValue={product?.name}
          required
        />
        <label>Descripción</label>
        <input
          type='text'
          name='description'
          className='rounded-md h-9 text-white px-2 border border-white bg-transparent'
          placeholder='Descripción'
          defaultValue={product?.description}
          required
        />
        <label>Precio</label>
        <input
          type='number'
          name='price'
          className='rounded-md h-9 text-white px-2 border border-white bg-transparent'
          placeholder='Precio'
          defaultValue={product?.price.toString()}
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
          defaultValue={product?.amount}
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
