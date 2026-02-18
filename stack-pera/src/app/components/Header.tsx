import { Outfit } from 'next/font/google';

const headingFont = Outfit({
  subsets: ['latin'],
  weight: ['600']
})

const bodyFont = Outfit({
  subsets: ['latin'],
  weight: ['400']
})

export default function Header() {
  return (
    <header className="border-b-2 border-white w-full mt-5 pb-5">
      <div className="flex justify-center dark:bg-black">
        <h1 className={`${headingFont.className} text-5xl text-[#00ff7f] select-none`}>StackPera</h1>
      </div>
    </header>
    
  )
}