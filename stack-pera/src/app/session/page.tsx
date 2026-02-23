import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outfit } from 'next/font/google';

const headingFont = Outfit({
  subsets: ['latin'],
  weight: ['600']
})

const bodyFont = Outfit({
  subsets: ['latin'],
  weight: ['400']
})

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a]">
      <Header />
      <div className="flex flex-col flex-1 items-center bg-[#1a1a1a] p-5">
        <div className="flex border-3 rounded-3xl border-[#00ff7f] w-full h-full items-center justify-center mb-2">
          
        </div>
        <Footer />
      </div>
    </div>
  );
}
