import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='w-full fixed z-10'>
        <div className='max-w-6xl mx-auto'>
            <div className='flex justify-between items-center pt-3 px-2'>
                <div className='logo'>
                    <Link href='/' className='text-md md:text-lg font-bold text-red-500 cursor-pointer'>QuizzMaster</Link>
                </div>
                <div className='nav-links'>
                    <ul className='text-sm md:text-[17px] text-gray-400 flex gap-2 md:gap-4'>
                        <Link href='/play'>Play</Link>
                        <Link href='/admin'>Admin</Link>
                        <Link href='/about'>About</Link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
