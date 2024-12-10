import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const DeleteProduct = ({ productId }: { productId: number }) => {
  const deleteProduct = async (formData: FormData) => {
    'use server'
    const productId = formData.get('productId')?.toString()
    console.log(productId)

    if (!productId) {
      return
    }

    await prisma.product.delete({
      where: {
        id: parseInt(productId, 10),
      },
    })

    revalidatePath('/')
  }

  return (
    <form action={deleteProduct}>
      <input
        type='hidden'
        name='productId'
        value={productId.toString()}
      />
      <button type='submit'>❌</button>
    </form>
  )
}
