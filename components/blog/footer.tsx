import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t px-4 pt-4 text-center md:text-left">
      <div className="flex items-center justify-between md:justify-start gap-8">
        <Link href="/" className="text-nowrap">
          <h3 className="font-bold text-2xl hover:text-primary duration-150 transition-all">
            Ali Askari
          </h3>
        </Link>
        {/* Socials */}
        <ul className="flex items-center justify-center md:justify-start gap-4">
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary duration-150 transition-all"
              href="https://github.com/askariali"
              target="_blank"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary duration-150 transition-all"
              href="https://linkedin.com/in/askariali"
              target="_blank"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 dark:fill-white hover:!fill-primary duration-150 transition-all"
              href="https://x.com/askariali_dev"
              target="_blank"
            >
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 463"
                width="24"
                height="22"
              >
                <path
                  fillRule="evenodd"
                  d="m403.2 0h78.5l-171.5 196 201.8 266.8h-158l-123.7-161.8-141.6 161.8h-78.6l183.5-209.7-193.6-253.1h162l111.9 147.9zm-27.6 415.8h43.5l-280.8-371.3h-46.7z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      {/* copy text */}
      <p className="font-silkscreen text-center text-muted-foreground mt-2 text-sm">made with <span className="text-xl">☕️</span></p>
    </footer>
  );
}
