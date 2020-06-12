import Header from './Header';
import Footer from './Footer';
import {Container} from "reactstrap";
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress'
import Home from '../Home/News'
import News from "../Home/News";

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default ({ children }) => (
  <div>

      <Head>
          <title> Heliummusic </title>
          <meta name = "viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous" />
          <link rel="stylesheet" href="/static/nprogress.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


      </Head>
      <Header/>
       <Container>{children}</Container>
   </div>
);
