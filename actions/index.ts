'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createProduct = async (formData: FormData) => {
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const price = parseFloat(formData.get('price') as string)
  const amount = parseInt(formData.get('amount') as string, 10)

  if (!name || !description || !price || !amount) {
    return
  }

  const existingProduct = await prisma.product.findFirst({
    where: { name },
  })

  if (existingProduct) {
    return false
  }

  await prisma.product.create({
    data: {
      name,
      description,
      price,
      amount,
    },
  })

  revalidatePath('/')
  redirect('/')
}

export const editProduct = async (formData: FormData, id: string) => {
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const price = parseFloat(formData.get('price') as string)
  const amount = parseInt(formData.get('amount') as string, 10)

  if (!name || !description || !price || !amount) {
    return
  }

  const existingProduct = await prisma.product.findFirst({
    where: {
      name,
      NOT: {
        id: parseInt(id),
      },
    },
  })

  if (existingProduct) {
    return false
  }

  await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      description,
      price,
      amount,
    },
  })

  revalidatePath('/')
  redirect('/')
}
