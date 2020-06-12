/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }
    render() {
        return(
            <Html>
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                          rel="stylesheet"
                          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                          crossOrigin="anonymous"
                    />

                    <link
                        rel="stylesheet"
                        href="/static/nprogress.css"
                    />

                    <link
                        rel="stylesheet"
                        href="/static/styles.css"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto"
                        rel="stylesheet"
                    />

                </Head>
                <body className="custom_class">
                <Main />
                <NextScript />
                </body>
                <style global jsx>{`
              body {
                font-family: 'Roboto', sans-serif;
              }
            `}</style>
            </Html>

        );
    }
}

export default MyDocument;
