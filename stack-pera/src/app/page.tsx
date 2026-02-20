import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Settings from '../app/Settings';
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
    <div className="flex flex-col md:overflow-hidden md:h-screen bg-[#1a1a1a]">
      <Header />
      <div className="flex flex-col flex-1 items-center bg-[#1a1a1a] p-5">
        <div className="flex border-3 rounded-3xl border-[#00ff7f] w-full h-full items-center justify-center mb-2">
          <Settings />
        </div>
        <Footer />
      </div>
    </div>
  );
}
