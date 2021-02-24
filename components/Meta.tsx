import Head from 'next/head'

interface Props {
    title: string;
    keywords: string;
    description: string;
}

const Meta: React.FC<Props> = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device=width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            
            <title>{title}</title>
        </Head>

    )
}

export default Meta;