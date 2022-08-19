import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>PlanetFone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          {' '}
          <a className="text-blue-600" href="https://nextjs.org">
          PlanetFone em Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          click nos cards abaixo ou acesse o link{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            /users
          </code>
          {' '}
          ou 
          {' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            /api/users
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/users"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Usuários &rarr;</h3>
            <p className="mt-4 text-xl">
              Usuários listados conforme o teste solicitado.
            </p>
          </a>

          <a
            href="/api/users"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Usuários - json &rarr;</h3>
            <p className="mt-4 text-xl">
              Json de usuários listados na rota api do projeto . 
            </p>
          </a>

          <a
            href="https://github.com/gab-h3nrique/planetfone-test"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Github &rarr;</h3>
            <p className="mt-4 text-xl">
              click para ver o projeto no github. 
            </p>
          </a>

        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.linkedin.com/in/gabriel-henrique-47ab76188/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gabriel Henrique {' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
