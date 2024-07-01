import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center sm:text-left flex min-h-screen flex-col items-center justify-center space-y-4 px-4">
      <h1 className="text-5xl md:text-9xl font-bold">Ali Askari</h1>
      <h2 className="text-2xl md:text-4xl font-bold">Front-end Developer</h2>
      <h3 className="flex flex-wrap justify-center items-center gap-2 font-thin">
        <strong>React.js,</strong>
        <strong>Next.js,</strong>
        <strong>JavaScript,</strong>
        <strong>Typescript,</strong>
        <strong>HTML,</strong>
        <strong>CSS</strong>
      </h3>
      <div>
        <Link
          className={badgeVariants({ variant: "outline", className:"group" })}
          href={`/blog/1`}
        >
          <span className="text-sm font-medium">Latest post:</span>&nbsp;
          <h3 className="text-sm text-muted-foreground duration-150 transition-all group-hover:text-primary">
            Latest blog post title ...
          </h3>
        </Link>
      </div>
      <ul className="flex flex-col sm:flex-row gap-4">
        <li>
          <Link
            className="underline underline-offset-4 hover:text-primary duration-150 transition-all"
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:text-primary duration-150 transition-all"
            href="https://github.com/askariali"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:text-primary duration-150 transition-all"
            href="https://linkedin.com/in/askariali"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:text-primary duration-150 transition-all"
            href="mailto:askarialidev+site@gmail.com"
            target="_blank"
          >
            E-Mail
          </a>
        </li>
        {/*         <li>
          <a
            className="underline underline-offset-4 hover:text-primary duration-150 transition-all"
            href="https://calendly.com/askarialiwork/15-min"
            target="_blank"
          >
            Book a Meeting
          </a>
        </li> */}
      </ul>
    </main>
  );
}
