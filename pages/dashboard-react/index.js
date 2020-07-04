import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/layout/Container'
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import ButtonOutline from '../../components/ButtonOutline'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Windmill Dashboard React</title>
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
              Windmill Dashboard React
            </h1>
            <p className="mt-4 font-mono">Four 100 scores and PWA ready. Just connect your data.</p>
          </header>
        </Container>
      </div>

      <Container className="my-16">
        <div className="grid gap-4 font-mono text-gray-800 md:grid-cols-10">
          <div className="md:col-span-7">
            <div className="p-4 border md:mb-10">
              <img src="/img/Dashboard.png" alt="Dashboard preview" loading="lazy" />
            </div>
          </div>

          <aside className="mb-8 md:col-span-3 md:mb-auto">
            <div className="p-4 border">
              <div className="flex justify-between">
                <p>Version</p>
                <p className="font-medium">{props.lastRelease.name}</p>
              </div>
              <div className="flex justify-between">
                <p>Last update</p>
                <p className="font-medium">07/2020</p>
              </div>
              <div className="flex justify-between">
                <p>License</p>
                <p className="font-medium">MIT</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Read docs</p>
              </div>
              <ButtonOutline className="w-full mb-4">live preview</ButtonOutline>
              <Button tag="a" href={props.lastRelease.zipball_url} className="w-full">
                download
              </Button>
            </div>
          </aside>
        </div>

        <div className="grid gap-4 font-mono text-gray-800 md:grid-cols-10">
          <main className="md:col-span-7">
            <div className="mb-8 text-gray-800">
              <h2 className="mb-2 text-2xl font-semibold">Description</h2>
              <p className="mb-4">
                This is not a template. This is complete application, built on top of React, with
                all tiny details taken care of so you just need to bring the data to feed it.
              </p>
              <p>
                Accessibility is a priority in my projects and I think it should be in yours too, so
                this was developed listening to real screen readers, focus traps and keyboard
                navigation are available everywhere.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">Features</h2>
              <ul className="mb-4 space-y-2 list-inside list-square">
                <li>
                  <span className="ml-2">
                    Dark theme enabled (load even different images based on theme)
                  </span>
                </li>
                <li>
                  <span className="ml-2">
                    Throughly accessible (developed using screen readers)
                  </span>
                </li>
                <li>
                  <span className="ml-2">100% keyboard navigable</span>
                </li>
                <li>
                  <span className="ml-2">Custom components</span>
                </li>
                <li>
                  <span className="ml-2">
                    Built on top of{' '}
                    <Link href="/react-ui">
                      <a className="border-b border-primary">Windmill React UI</a>
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="ml-2">React Router</span>
                </li>
                <li>
                  <span className="ml-2">Context API</span>
                </li>
                <li>
                  <span className="ml-2">
                    <abbr title="Progressive Web Application">PWA</abbr> delivering offline-first
                    and app-like experience
                  </span>
                </li>
                <li>
                  <span className="ml-2">Tailwind CSS</span>
                </li>
                <li>
                  <span className="ml-2">Chart.js</span>
                </li>
                <li>
                  <span className="ml-2">Heroicons</span>
                </li>
                <li>
                  <span className="ml-2">
                    <Link href="/sponsor">
                      <a className="border-b border-primary">Sponsor me</a>
                    </Link>{' '}
                    and have a voice deciding the next features and have early access to them
                  </span>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps(ctx) {
  const res = await fetch('https://api.github.com/repos/estevanmaito/windmill-dashboard-react/tags')
  const lastRelease = await res.json()

  return {
    props: { lastRelease: lastRelease[0] },
  }
}
