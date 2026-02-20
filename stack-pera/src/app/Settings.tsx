import { Outfit } from 'next/font/google';

const headingFont = Outfit({
  subsets: ['latin'],
  weight: ['600']
})

const bodyFont = Outfit({
  subsets: ['latin'],
  weight: ['400']
})

export default function Settings() {
  return (
    <div className="flex flex-col border-3 border-white w-1/2 h-7/8 rounded-2xl items-center">
      <h1 className={`${headingFont.className} flex text-white mt-4 text-4xl select-none`}>New Session</h1>
      <h2 className={`${bodyFont.className} flex text-white`}>Number of Players:</h2>
    </div>
  )
}