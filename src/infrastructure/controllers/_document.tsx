/* eslint-disable @next/next/no-document-import-in-page */
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const { renderPage: originalRenderPage } = ctx;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="Description" content="Tasks" />
          <script
            dangerouslySetInnerHTML={{
              __html:
                '    !function () {\n' +
                "            if ('TechtouchObject' in window && document.querySelector('script#techtouch-snippet')) return;\n" +
                '            window.TechtouchObject = {\n' +
                '            organizationUuid: "orga-612dcbe7-b556-d8fb-2758-41963c269cd7"\n' +
                '          };\n' +
                '            var e = document.createElement("script"); e.async = 1, e.src = "https://dev-apps.techtouch.jp/script/orga-612dcbe7-b556-d8fb-2758-41963c269cd7/main.js"; e.id = "techtouch-snippet";\n' +
                '            var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t)\n' +
                '          }()',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
