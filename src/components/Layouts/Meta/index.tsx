import Head from 'next/head'
import * as React from 'react'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/common/lib/constants'
import { useWindowSize } from '@/common/utils/useWindowSize'

type Props = {
  pageTitle?: string
  pageDescription?: string
  pagePath?: string
  pageImg?: string
  pageImgWidth?: string
  pageImgHeight?: string
}

const Meta: React.FC<Props> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}: Props) => {
  const { windowHeight, windowWidth } = useWindowSize()
  const defaultDescription = ''
  const title = pageTitle ? `${pageTitle} | ${CMS_NAME} ` : CMS_NAME
  const description = pageDescription ? pageDescription : defaultDescription
  const url = pagePath
  const imgUrl = pageImg
  const imgWidth = pageImgWidth ? pageImgWidth : 1280
  const imgHeight = pageImgHeight ? pageImgHeight : 640

  return (
    <Head>
      viewport
      <title> {title} </title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta
        name="viewport"
        content={
          windowWidth > 360
            ? 'width=device-width, initial-scale=1'
            : 'width=360'
        }
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={description} />
      <meta property="og:url" content={HOME_OG_IMAGE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="canonical" href={url} />
    </Head>
  )
}

export default Meta
