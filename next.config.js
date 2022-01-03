// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['']
  }
})


module.exports = {
// async redirects() {
//   return [
//     {
//       source: '/notion-faster',
//       destination: 'https://notionfaster.cn',
//       basePath:  false,
//       permanent:   false,
//     },
//   ]
// }

}
