import prisma from '@/lib/prisma'
import { EditProduct } from '../EditProduct'

export default async function Page(props: {
  params: Promise<{
    id: string
  }>
}) {
  const params = await props.params
  const { id } = params

  const product = await prisma.product.findFirst({
    where: {
      id: parseInt(id),
    },
  })

  const productPriceString = {
    ...product,
    price: product?.price.toString(),
  }

  return (
    <div className='max-w-lg mx-auto'>
      <EditProduct
        product={productPriceString}
        id={id}
      />
    </div>
  )
}
