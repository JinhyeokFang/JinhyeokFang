import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'

export async function getServerSideProps(context: { query: { url: string } }) {
    const { url } = context.query;
    const apiResult = await axios.get(`https://bang.jinhy.uk/api/url?name=${url}`);
    const responseData: Record<string, unknown> = apiResult.data;
    const siteData: Record<string, unknown> = responseData.site as Record<string, unknown>;
    const redirectUrl = siteData ? siteData.url : '../';
    return {
        props: {
            redirectUrl,
        },
    };
}

const RedirectPage: NextPage<{ redirectUrl: string }> = ({ redirectUrl }) => {
    return (
        <Head>
            <title>Jin-hyeok Bang</title>
            <meta name="description" content="Jin-hyeok Bang" />
            <link rel="icon" href="/favicon.ico" />
            <meta http-equiv="refresh" content={`0 url=${redirectUrl}`} />
        </Head>
    )
}

export default RedirectPage
