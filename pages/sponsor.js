import Head from 'next/head'
import Container from '../components/layout/Container'
import Nav from '../components/Nav'

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

      <Container className="my-16 font-mono text-gray-800">
        <p className="mb-4 font-mono text-gray-800">
          This is the work of a single developer, creating fully functional, componentized and
          production-ready applications for free. I would love to continue this way and avoid the{' '}
          <strong>"Want this feature? Pay for it!"</strong> way.
        </p>
        <p className="mb-8 font-mono text-gray-800">
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

      <Container className="my-16">
        <h2 className="mb-4 font-mono text-xl font-semibold text-gray-800">Tiers</h2>
        <div className="grid gap-10 font-mono md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-gray-800">
            <p className="mb-2 text-lg font-semibold">Supporter</p>
            <p className="mb-4">
              You just want to support my work and want nothing more than what you already have.
              Thank you so much!
            </p>
            <ul className="mb-4 space-y-2 list-inside list-square">
              <li>
                <span className="ml-2">Patron-only posts and messages</span>
              </li>
            </ul>
            <p className="font-semibold">
              $7 <a href="/dashboard-html">sponsor</a>
            </p>
          </div>
          <div className="text-gray-800">
            <p className="mb-2 text-lg font-semibold">Individual</p>
            <p className="mb-4">
              You enjoy my work and want to support it. From one developer to the next, I thank you.
            </p>
            <ul className="mb-4 space-y-2 list-inside list-square">
              <li>
                <span className="ml-2">Early access to content on GitHub</span>
              </li>
              <li>
                <span className="ml-2">Patron-only posts and messages</span>
              </li>
              <li>
                <span className="ml-2">Patron-only feature voting</span>
              </li>
            </ul>
            <p className="font-semibold">$14</p>
            {/* <a className="border-b-2 border-primary" href="/dashboard-html">
              view more
            </a> */}
          </div>
          <div className="text-gray-800">
            <p className="mb-2 text-lg font-semibold">Generous Individual</p>
            <p className="mb-4">
              You enjoy my work and want to support it, but $14 feels low for the value you're
              getting from the tools I build, and you want to contribute more! For that I thank you!
            </p>
            <ul className="mb-4 space-y-2 list-inside list-square">
              <li>
                <span className="ml-2">Early access to content on GitHub</span>
              </li>
              <li>
                <span className="ml-2">Patron-only posts and messages</span>
              </li>
              <li>
                <span className="ml-2">Patron-only feature voting</span>
              </li>
            </ul>
            <p className="font-semibold">$29</p>
            {/* <a className="border-b-2 border-primary" href="/dashboard-html">
              view more
            </a> */}
          </div>
          <div className="text-gray-800">
            <p className="mb-2 text-lg font-semibold">Freelancer/Startup</p>
            <p className="mb-4">
              You might be a solo dev that uses software I work on. You might maintain an app or two
              for yourself or a few clients. You make decent money, but you're not rolling in it.
              Show some love.
            </p>
            <ul className="mb-4 space-y-2 list-inside list-square">
              <li>
                <span className="ml-2">Logo/link listed on the Windmill UI landing page</span>
              </li>
              <li>
                <span className="ml-2">Early access to content on GitHub</span>
              </li>
              <li>
                <span className="ml-2">Patron-only posts and messages</span>
              </li>
              <li>
                <span className="ml-2">Patron-only feature voting</span>
              </li>
            </ul>
            <p className="font-semibold">$79</p>
            {/* <a className="border-b-2 border-primary" href="/dashboard-html">
              view more
            </a> */}
          </div>
          <div className="text-gray-800">
            <p className="mb-2 text-lg font-semibold">Business/Agency</p>
            <p className="mb-4">
              You run a successful business or agency that generates profits from software you build
              using my work.
            </p>
            <ul className="mb-4 space-y-2 list-inside list-square">
              <li>
                <span className="ml-2">Logo/link listed on every page of the docs</span>
              </li>
              <li>
                <span className="ml-2">Logo/link listed on the Windmill UI landing page</span>
              </li>
              <li>
                <span className="ml-2">Early access to content on GitHub</span>
              </li>
              <li>
                <span className="ml-2">Patron-only posts and messages</span>
              </li>
              <li>
                <span className="ml-2">Patron-only feature voting</span>
              </li>
            </ul>
            <p className="font-semibold">$279</p>
            {/* <a className="border-b-2 border-primary" href="/dashboard-html">
              view more
            </a> */}
          </div>
          <div className="text-gray-800">
            <p className="mb-2 text-lg font-semibold">Gold Sponsor</p>
            <p className="mb-4">
              You fit one of the above categories, but are heavily invested in one of my projects
              and want monthly consulting/top sponsor placement.
            </p>
            <ul className="mb-4 space-y-2 list-inside list-square">
              <li>
                <span className="ml-2">
                  1.5 hours of any Windmill related project consulting per month
                </span>
              </li>
              <li>
                <span className="ml-2">
                  Logo listed in a bolder "Gold Sponsors" section at the top
                </span>
              </li>
              <li>
                <span className="ml-2">Logo/link listed on the Windmill UI landing page</span>
              </li>
              <li>
                <span className="ml-2">Logo/link listed on every page of the docs</span>
              </li>
              <li>
                <span className="ml-2">Early access to content on GitHub</span>
              </li>
              <li>
                <span className="ml-2">Patron-only posts and messages</span>
              </li>
              <li>
                <span className="ml-2">Patron-only feature voting</span>
              </li>
            </ul>
            <p>
              <span className="font-semibold">$479</span>{' '}
              <a className="border-b border-primary" href="https://www.patreon.com/estevanmaito">
                go to patreon
              </a>
            </p>
          </div>
        </div>
      </Container>

      <footer className="py-20 font-mono">
        <Container>
          <p className="text-center text-gray-800">
            Made by{' '}
            <a className="border-b border-primary" href="https://twitter.com/estevanmaito">
              Estevan Maito
            </a>
          </p>
        </Container>
      </footer>
    </>
  )
}
