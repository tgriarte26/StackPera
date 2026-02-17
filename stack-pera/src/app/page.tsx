import { Outfit } from 'next/font/google';

const headingFont = Outfit({
  subsets: ['latin'],
  weight: ['600']
})

const bodyFont = Outfit({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center bg-[#1a1a1a] dark:bg-black py-5">
        <h1 className={`${headingFont.className} text-5xl text-[#00ff7f]`}>StackPera</h1>  
      </main>
    </div>
  );
}
