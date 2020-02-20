import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Users = ({ users }) => (
    <div>
        <Head>
            <title>Users</title>
        </Head>
        <ul>
            {
                users.map(user => (
                <li key={user.id}>{user.login}</li>
            )) }
        </ul>
        <Link href="/">
            <a>Back</a>
        </Link>
    </div>
);

// it is a kind of componentDidMount() for data loading
Users.getInitialProps = async () =>{
    const response = await axios.get(
        'https://api.github.com/orgs/nubank/members'
    );

    // at the first load this console.log will appear at the server side
    // if this page is loaded from a link, console.log will throw it at the client side
    console.log(response.data);

    return { users: response.data };
}

export default withAnalytics()(Users);