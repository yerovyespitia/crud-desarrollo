import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className={'h-full bg-[#0a0a0a]'}>
      <ul className='flex h-16 items-center justify-center gap-8'>
        <Link href={'/'}>
          <li className='font-medium hover:underline underline-offset-4'>
            Productos
          </li>
        </Link>
        <Link href={'/add-product'}>
          <li className='font-medium hover:underline underline-offset-4'>
            Agregar producto
          </li>
        </Link>
      </ul>
    </header>
  )
}
