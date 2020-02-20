import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import ReactGA from 'react-ga';

export default () => Composed => 
    class extends Component {
        static getInitialProps(ctx) {
            // ctx = context
            return loadGetInitialProps(Composed, ctx)
        }

        componentDidMount() {
            console.error("GA configuration");
        
            ReactGA.initialize('ID-ANALYTICS');
            // launching pageview() -> user entering in a page
            ReactGA.pageview(window.location.pathname);
        }

        render() {
            // each props received it will transfer to child component
            return <Composed {...this.props} />
        }
    }