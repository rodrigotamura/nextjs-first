import React from 'react';
import axios from 'axios';
import withAnalytics from '~/hocs/withAnalytics';
import Link from 'next/link';

const Details = ({user}) => (
    <div>
        <h1>{ user.login }</h1>
        <img src={ user.avatar_url } width="200" />
        <Link href='/users'>
            <a>Back to Users</a>
        </Link>
    </div>
);

Details.getInitialProps = async ({ query }) => {
    // by query we have access to route param
    const { user } = query;
    const response = await axios.get(
        `https://api.github.com/users/${user}`
    );

    return { user: response.data };
};

export default withAnalytics()(Details);