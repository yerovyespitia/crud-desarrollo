import prisma from '@/lib/prisma'
import Link from 'next/link'
import { DeleteProduct } from './deleteButton'

export const Table = async () => {
  const products = await prisma.product.findMany()

  const formattedProducts = products.map((product: any) => ({
    ...product,
    price: parseFloat(product.price.toString()),
  }))

  return (
    <section>
      <center className='max-w-4xl mx-auto'>
        <table className='border'>
          <thead className='border'>
            <tr>
              <th className='border px-4 text-center'>ID</th>
              <th className='border px-4 text-center'>Nombre</th>
              <th className='border px-4 text-center'>Descripción</th>
              <th className='border px-4 text-center'>Precio</th>
              <th className='border px-4 text-center'>Cantidad disponible</th>
              <th className='border px-4 text-center'>Editar</th>
              <th className='border px-4 text-center'>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {formattedProducts.map(
              ({
                id,
                name,
                description,
                price,
                amount,
              }: {
                id: number
                name: string
                description: string
                price: number
                amount: number
              }) => (
                <tr key={id}>
                  <td className='border px-4 text-center'>{id}</td>
                  <td className='border px-4 text-center'>{name}</td>
                  <td className='border px-4 text-center'>{description}</td>
                  <td className='border px-4 text-center'>{price}</td>
                  <td className='border px-4 text-center'>{amount}</td>
                  <td className='border px-4 text-center cursor-pointer'>
                    <Link href={`/edit-product/${id}`}>✏️</Link>
                  </td>
                  <td className='border px-4 text-center cursor-pointer'>
                    <DeleteProduct productId={id} />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </center>
    </section>
  )
}
