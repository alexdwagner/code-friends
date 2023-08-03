import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
    }
  }

  render() {
    return (
      <Html>
        <Head>

          <link rel="preconnect" href="https://rsms.me/" />
          
          {/* Inter font stylesheet */}
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          
          {/* Inline CSS for Inter font */}
          <style jsx global>{`
            :root { 
              font-family: 'Inter', sans-serif; 
            }
            @supports (font-variation-settings: normal) {
              :root { 
                font-family: 'Inter var', sans-serif; 
              }
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
