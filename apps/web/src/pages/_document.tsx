import Document, { Html, Head, Main, NextScript } from 'next/document'

import { Seo } from '@components/Seo'

export default class AppDocument extends Document {
  render() {
    const title = 'Giffy: Open Source Gif Recording App'
    const description =
      'Use Giffy and record your GIFs with ease, available on Linux, Windows and MacOS.'
    const img =
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/614b3660-7752-4d1e-beaa-2bbf89c3be51/MacOS_Apps.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220123T072839Z&X-Amz-Expires=86400&X-Amz-Signature=3ef878863f5c77c46b56ae483c0b3a463f2672bec217896b8ccd5e1185371129&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MacOS%2520Apps.png%22&x-id=GetObject'

    return (
      <Html lang="pt-BR">
        <Head>
          <Seo theme="dark" />
          <Seo theme="light" />

          <meta charSet="utf-8" />

          <meta name="author" content="Vitor Neves Gomes Gouveia" />
          <meta name="description" content={description} />

          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={img} />

          <meta
            property="og:url"
            content="https://vitorgouveia.github.io/Giffy/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={img} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={img} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
