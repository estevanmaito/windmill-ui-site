import Link from 'next/link'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO title="Windmill UI" image="https://windmillui.com/public/img/windmillui.png" />
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
        <div className="grid gap-10 md:gap-16 md:grid-cols-3">
          <div className="text-gray-700">
            <p className="mb-2 font-mono text-lg font-semibold">Windmill Dashboard HTML</p>
            <p className="mb-2">No frameworks, no dependencies. Pure, flexible web development.</p>
            <Link href="/dashboard-html">
              <a className="border-b border-primary">view more</a>
            </Link>
          </div>
          <div className="text-gray-700">
            <p className="mb-2 font-mono text-lg font-semibold">Windmill Dashboard React</p>
            <p className="mb-2">Four 100 scores and PWA ready. Just connect your data.</p>
            <Link href="/dashboard-react">
              <a className="border-b border-primary">view more</a>
            </Link>
          </div>
          <div className="text-gray-700">
            <p className="mb-2 font-mono text-lg font-semibold">Windmill React UI</p>
            <p className="mb-2">
              The component library for fast and accessible development of gorgeous interfaces.
            </p>
            <Link href="/react-ui">
              <a className="border-b border-primary">view more</a>
            </Link>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
