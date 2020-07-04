import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/layout/Container'
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Windmill React UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner tag={Link} href="/sponsor">
        You can sponsor this project and access exclusive content.
      </Banner>

      <div className="bg-pattern">
        <Nav />
        <Container>
          <header className="max-w-2xl py-20">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl">
              Windmill React UI
            </h1>
            <p className="mt-4 font-mono">
              The component library for fast and accessible development of gorgeous interfaces.
            </p>
          </header>
        </Container>
      </div>

      <Container className="my-16">
        <div className="grid gap-10 font-mono md:gap-4 md:grid-cols-3">
          <div className="text-gray-800">
            <p className="mb-2 text-lg font-semibold">Components</p>
            <p className="mb-2">No frameworks, no dependencies. Pure, flexible web development.</p>
            <Link href="/dashboard-html">
              <a className="border-b border-primary">view more</a>
            </Link>
          </div>
          <div className="text-gray-800">
            <p className="mb-2 text-lg font-semibold">Design</p>
            <p className="mb-2">Figma design files (coming soon)</p>
          </div>
        </div>
      </Container>
    </>
  )
}
