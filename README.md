# About

In this project I`m using SSR (server side rendering) with NextJS.

## What we've learned?

- The page is previously loaded at the server side;
- Page rendering performance;
- SEO optimization;
- Using Link - next/link - for navigation among pages;
- Configuring <head> with next/head;
- Global document ([see here](./pages/_document.js)) for page standardization;
- Using HOCs (Hight Order Components) - it is an architecture which we share some a functionality between many components (in this case will be the pages itself). In this approach we are implementing a HOC of Google Analytics - *react-ga* ([check here](./src/hocs/withAnalytics.js));
- Statics content, such as images, third-part libs, etc. (Node will import it, not React);
- Working with dynamic route params and another fun stuffs by NextJS re-configuration ([see here](./server.js));
- Applying stylization. Babel will transpile our JS into a friendly manner to browser or Node.
- Using root-import in order to import files using `~/some/page` instead `../../../some/page` (configuring [babel file](https://github.com/rodrigotamura/nextjs-first/blob/master/.babelrc) and [making VSCode to understand it](https://github.com/rodrigotamura/nextjs-first/blob/master/jsconfig.json)).
  
## Want to test it? No prob!

1. `git clone git@github.com:rodrigotamura/nextjs-first.git`
2. `cd nextjs-first`
3. `npm install`
4. `npm run dev`
