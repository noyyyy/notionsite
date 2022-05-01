import Head from 'next/head'
import * as React from 'react'

import * as types from 'lib/types'
import * as config from 'lib/config'
import { getSocialImageUrl } from 'lib/get-social-image-url'

export const PageHead: React.FC<
  types.PageProps & {
    title?: string
    description?: string
    image?: string
    url?: string
  }
> = ({ site, title, description, pageId, image, url }) => {
  const rssFeedUrl = `${config.host}/feed`

  title = title ?? site?.name
  description = description ?? site?.description

  const socialImageUrl = getSocialImageUrl(pageId) || image

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />

      {site && (
        <>
          <meta property='og:site_name' content={site.name} />
          <meta property='twitter:domain' content={site.domain} />
        </>
      )}

      <meta name='theme-color' content='#EB625A' />
      <meta property='og:type' content='website' />
      <script
        async
        defer
        data-domain='jerryw.cn'
        src='https://plausible.io/js/plausible.outbound-links.js'
      ></script>
      <script
        defer
        src='https://static.cloudflareinsights.com/beacon.min.js'
        data-cf-beacon='{"token": "34fab0bddceb4db1849fe73897f3d208"}'
      ></script>
    </Head>
  )
}
