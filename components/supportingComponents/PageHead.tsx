import Head from 'next/head'

const PageHead = ({ headTitle }:{ headTitle :string}) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Gerow - Business Consulting Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead