import React from 'react'
import Head from 'next/head'

const Metadata = () => (
    <>
        <meta name='msapplication-TileColor' content='#FFFFFF'/>
        {/*...*/}
    </>
)

const HomePage = () => (
    <>
        <Head>
            {/*Also adding metadata to Head doesn't work on homepage*/}
            <title>Homepage</title>
            <meta property="og:title" content="My new title" key="title"/>
            <Metadata/>
        </Head>
        <div>Homepage</div>
    </>
)

export default HomePage