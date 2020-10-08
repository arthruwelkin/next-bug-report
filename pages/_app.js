import React from 'react'
import App from 'next/app'
import Head from 'next/head'

const Metadata = () => (
    <>
        <base href='/'/>
        <meta name='msapplication-TileColor' content='#000000'/>
        {/*...*/}
    </>
)

class NextApp extends App {
    render() {
        return (
            <>
                <Head>
                    <title>Next Bug Report</title>
                    {/*ERROR*/}
                    <Metadata/>
                </Head>
            </>
        )
    }
}

export default NextApp