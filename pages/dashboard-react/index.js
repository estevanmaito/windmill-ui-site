import Link from 'next/link'
import Container from '../../components/layout/Container'
import Banner from '../../components/Banner'
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import ButtonOutline from '../../components/ButtonOutline'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import useSWR from 'swr'
import SpinnerIcon from '../../icons/spinner.svg'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    'https://api.github.com/repos/estevanmaito/windmill-dashboard-react/releases/latest',
    fetcher
  )

  const createdAt = new Date(data ? data.created_at : Date.now())
  const lastUpdate = `${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`
  return (
    <>
      <SEO
        title="Windmill Dashboard React"
        description="The modern, accessible and dark theme ready React dashboard. PWA ready (can be installed on mobile), works offline, made on top of reusable components."
        image="https://windmillui.com/img/windmill-dashboard-react.png"
      />

      <Banner tag={Link} href="/sponsor">
        You can sponsor this project and access exclusive content.
      </Banner>

      <div className="bg-pattern">
        <Nav />
        <Container>
          <header className="max-w-2xl py-20 text-gray-700">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight font-montserrat md:text-6xl">
              Windmill Dashboard React
            </h1>
            <p className="mt-4 font-mono">Four 100 scores and PWA ready. Just connect your data.</p>
          </header>
        </Container>
      </div>

      <Container className="my-16">
        <div className="grid gap-4 text-gray-700 md:grid-cols-10">
          <div className="md:col-span-7">
            <div className="p-4 border md:mb-10">
              <img src="/img/Dashboard.png" alt="Dashboard preview" loading="lazy" />
            </div>
          </div>

          <aside className="mb-8 md:col-span-3 md:mb-auto">
            <div className="p-4 border">
              <div className="flex justify-between">
                <p>Version</p>
                <p className="font-mono text-sm font-semibold">
                  {data ? data.tag_name : 'Loading'}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Last update</p>
                <p className="font-mono text-sm font-semibold">{lastUpdate}</p>
              </div>
              <div className="flex justify-between">
                <p>License</p>
                <p className="font-mono text-sm font-semibold">MIT</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>
                  <a
                    className="border-b border-primary"
                    href="https://github.com/estevanmaito/windmill-dashboard-react"
                  >
                    View on GitHub
                  </a>
                </p>
              </div>
              <ButtonOutline
                tag="a"
                href="https://demo.windmillui.com/dashboard-react"
                className="w-full mb-4"
              >
                live preview
              </ButtonOutline>
              {data ? (
                <Button tag="a" href={data.zipball_url} className="w-full">
                  download
                </Button>
              ) : (
                <Button className="w-full">
                  <SpinnerIcon className="w-5 h-5" />
                </Button>
              )}
            </div>
          </aside>
        </div>

        <div className="grid gap-4 text-gray-700 md:grid-cols-10">
          <main className="md:col-span-7">
            <div className="mb-8 text-gray-700">
              <h2 className="mb-2 font-mono text-xl font-semibold">Description</h2>
              <p className="mb-4">
                This is not a template. This is a complete application, built on top of React, with
                all tiny details taken care of so you just need to bring the data to feed it.
              </p>
              <p>
                Accessibility is a priority in my projects and I think it should be in yours too, so
                this was developed listening to real screen readers, focus traps and keyboard
                navigation are available everywhere.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-mono text-xl font-semibold text-gray-700">Features</h2>
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

      <Footer />
    </>
  )
}
