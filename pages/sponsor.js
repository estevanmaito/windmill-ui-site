import Head from 'next/head'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Sponsor() {
  return (
    <>
      <Head>
        <title>Sponsor - Windmill UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-pattern">
        <Nav />
        <Container>
          <header className="max-w-2xl py-20">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl">
              Sponsor
            </h1>
            <p className="mt-4 font-mono">Make this project free forever.</p>
          </header>
        </Container>
      </div>

      <Container className="max-w-2xl my-16 text-gray-800">
        <p className="mb-4 text-gray-800">
          This is the work of a single developer, creating fully functional, componentized and
          production-ready applications for free. I would love to continue this way and avoid the{' '}
          <strong>"Want this feature? Pay for it!"</strong> way.
        </p>
        <p className="mb-8 text-gray-800">
          You can help me keep it this way and receive some benefits by sponsoring me, so I can give
          100% of my time to it.
        </p>
        <a
          className="px-6 py-2 font-mono text-lg text-black bg-primary focus:outline-none"
          href="https://www.patreon.com/estevanmaito"
        >
          Become a sponsor
        </a>
        <p className="mt-2 text-xs text-gray-700">Redirects to Patreon</p>
      </Container>

      <Footer />
    </>
  )
}
