import React from 'react';
import Link from "next/link";
import Head from "next/head";

import styled from 'styled-components';

import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
    color: Green;
    font-size: 40px;
`;

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>

        <Title>Page rendered by SSR</Title>

        <p>Static content:</p>
        {/* it is very important to put the files within /public folder */}
        <p><img src="/lion.jpg" width="200" /></p>

        <Link href="/users">
            <a>Go to Users</a>
        </Link>
    </div>
    
);

// withAnalytics() from HOCs
export default withAnalytics()(Home);