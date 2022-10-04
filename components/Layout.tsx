import Head from 'next/head';
import React from 'react';

interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="A simple project to add songs to a Spotify playlist"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="flex flex-col h-screen">{children}</main>
    </>
  )
}
