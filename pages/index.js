import React from 'react';
import Link from "next/link";
import Head from "next/head";

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>

        <h1>Pagina SSR</h1>

        <p>Static content:</p>
        {/* it is very important to put the files within /public folder */}
        <img src="/lion.jpg" width="200" />

        <Link href="/users">
            <a>Go to Users</a>
        </Link>
    </div>
    
);

// withAnalytics() from HOCs
export default withAnalytics()(Home);