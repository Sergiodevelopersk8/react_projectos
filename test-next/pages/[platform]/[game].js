import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

/*el [platform] es un fichero dinamico */
/*el [game].js es para mostrar la página de un juego específico */
export default function Game() {
  
    const router = useRouter();
console.log(router)

  const {platform, game} = router.query;

  return (
    <div>
      <Head>
        <title>{game} - {platform}</title>
      </Head>
      <h1>plataforma: {platform}</h1>
        <h1>
        estamos en un juego {game}

        </h1>
        </div>
  )
}
