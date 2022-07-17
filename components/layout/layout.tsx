import Head from 'next/head'


type LayoutProps = React.PropsWithChildren<{
    title?: string
    description?: string
}>

const Layout: React.FC<LayoutProps> = ({
    children,
    title = 'Crstnmac',
    description = 'Crstnmac'
}) => {
    return (
        <div className='contianer'>
            <Head>
                <title>{title}</title>
                <link
                    rel="icon"
                    type='image/png'
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type='image/png'
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type='image/png'
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="icon" href="/favicon/favicon.ico" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <meta name='description' content={description} />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content={title} />
            </Head>

            {/* { <Navbar /> } */}
            <main>{children}</main>
            {/* { <Footer /> } */}
        </div>
    )
}

export default Layout