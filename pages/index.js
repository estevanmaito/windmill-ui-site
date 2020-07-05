import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Windmill UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-pattern">
        <Nav />
        <Container>
          <header className="max-w-2xl py-20 text-gray-700">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight font-montserrat md:text-6xl">
              Stunning components for faster web development
            </h1>
            <p className="mt-4 font-mono">For free.</p>
          </header>
        </Container>
      </div>

      <Container className="my-16">
        <div className="grid gap-10 font-mono md:gap-4 md:grid-cols-3">
          <div className="text-gray-700">
            <p className="mb-2 text-lg font-semibold">Windmill Dashboard HTML</p>
            <p className="mb-2">No frameworks, no dependencies. Pure, flexible web development.</p>
            <Link href="/dashboard-html">
              <a className="border-b border-primary">view more</a>
            </Link>
          </div>
          <div className="text-gray-700">
            <p className="mb-2 text-lg font-semibold">Windmill Dashboard React</p>
            <p className="mb-2">Four 100 scores and PWA ready. Just connect your data.</p>
            <Link href="/dashboard-react">
              <a className="border-b border-primary">view more</a>
            </Link>
          </div>
          <div className="text-gray-700">
            <p className="mb-2 text-lg font-semibold">Windmill React UI</p>
            <p className="mb-2">
              The component library for fast and accessible development of gorgeous interfaces.
            </p>
            <Link href="/react-ui">
              <a className="border-b border-primary">view more</a>
            </Link>
          </div>
        </div>
      </Container>

      <Container className="my-16">
        <h2 className="mb-6 text-xl text-gray-700">Features</h2>
        <div className="font-mono">
          <div className="space-y-4 text-gray-700">
            <p className="">Effortless accessible</p>
            <p className="">Dark mode included</p>
            <p className="">Multiple components</p>
            <p className="">Styled with Tailwind CSS</p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid my-20 md:grid-cols-2">
          <div></div>
          <div>
            <p className="mb-4 font-mono text-gray-700">
              This is the work of a single developer, creating fully functional, componentized and
              production-ready applications for free. I would love to continue this way and avoid
              the <strong>"Want this feature? Pay for it!"</strong> way.
            </p>
            <p className="mb-8 font-mono text-gray-700">
              You can help me keep it this way and receive some benefits by sponsoring me, so I can
              give 100% of my time to it.
            </p>
            <a
              className="px-6 py-2 font-mono text-lg text-black bg-primary focus:outline-none"
              href="https://www.patreon.com/estevanmaito"
            >
              Become a sponsor
            </a>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
