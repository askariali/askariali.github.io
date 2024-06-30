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
      <ul className="flex flex-col sm:flex-row gap-4 !mt-8">
        <li>
          <a
            className="underline underline-offset-4 hover:text-purple-500 duration-150 transition-all"
            href="https://github.com/askariali"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:text-purple-500 duration-150 transition-all"
            href="https://linkedin.com/in/askariali"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:text-purple-500 duration-150 transition-all"
            href="mailto:askarialidev+site@gmail.com"
            target="_blank"
          >
            E-mail
          </a>
        </li>
{/*         <li>
          <a
            className="underline underline-offset-4 hover:text-purple-500 duration-150 transition-all"
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
