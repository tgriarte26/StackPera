import { Outfit } from 'next/font/google';
import { Github, Linkedin, Instagram, Heart} from "lucide-react"

const font = Outfit({
  subsets: ['latin'],
  weight: ['400']
})

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-center mt-2 gap-4">
      <div className={`${font.className} flex text-white pl-5 pr-5`}>
        <span className="text-xl">Made by trev</span>
        <Heart className="flex pl-2 text-white-400 fill-red-400" size={28}/>
      </div>
      <div className="flex gap-6">
        <a className="flex items-center text-white" href="https://github.com/tgriarte26"
          target="_blank"
          rel="noopener noreferrer">
          <Github className="mb-1 fill-gray-400" size={25} />
          <span className="text-xl ml-2">Github</span>
        </a>
        <a className="flex items-center text-white" href="https://www.linkedin.com/in/trevor-raphael-griarte/"
          target="_blank"
          rel="noopener noreferrer">
          <Linkedin className="mb-1 fill-blue-400" size={25} />
          <span className="text-xl ml-2">LinkedIn</span>
        </a>
        <a className="flex items-center text-white" href="https://www.instagram.com/trevorgriarte/"
          target="_blank"
          rel="noopener noreferrer">
          <Instagram className="mb-1 fill-red-300" size={25} />
          <span className="text-xl ml-2">Instagram</span>
        </a>
      </div>
    </footer>
  )
}