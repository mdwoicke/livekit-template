import { Header } from "@/components/header";
import { RoomComponent } from "@/components/room-component";
import { Auth } from "@/components/auth";
import LK from "@/components/lk";
import Heart from "@/assets/heart.svg";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import styles from './page.module.css';
// import logo from "@/assets/noBgBlack.png";
import logo from "@/assets/dominos.png";
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className={`flex flex-col h-full bg-neutral-100 ${styles.pageWrapper}`}>
      <header className={`flex flex-shrink-0 h-12 items-center justify-between px-4 w-full md:mx-auto ${styles.hidden}`}>
        <LK />
        <Auth />
      </header>
      <header className="w-full bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <Image src={logo} alt="Intelepeer Logo" width={100} height={100} />
              <nav>
                  {/* <a href="http://localhost:8765" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Benefit Questions</a>
                  <a href="http://localhost:3000" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Company Q&A</a> */}
             </nav>
          </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-6 flex flex-col items-center">

        <RoomComponent />
      </main>
      <footer className={`md:flex md:items-center md:gap-2 md:justify-end font-mono uppercase text-right pt-1 pb-2 px-8 text-xs text-gray-600 w-full md:mx-auto ${styles.hidden}`}>
        Built with
        <Heart />
        on
        <a
          href="https://github.com/livekit/agents"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LiveKit Agents
        </a>{" "}
        •
        <a
          href="https://github.com/livekit-examples/realtime-playground"
          target="_blank"
          rel="noopener noreferrer"
          className="underline inline-flex items-center gap-1"
        >
          <GitHubLogoIcon className="h-4 w-4" />
          View source on GitHub
        </a>
        • © 2024 LiveKit
      </footer>
    </div>
  );
}
