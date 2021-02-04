module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '4e37b62ef87245369f859e4e1f7a2cab',

  // if you want to restrict pages to a single notion workspace (optional)
  //rootNotionSpaceId: 'fde5ac74eea345278f004482710e1af3',

  // basic site info (required)
  name: 'Jerryw Blog',
  domain: 'jerryw.cn',
  author: 'Jerry Wang',

  // open graph metadata (optional)
  description: '',
  socialImageTitle: '',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
 // twitter: 'transitive_bs',
  github: 'Jerrywang959',
 // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:'',
  defaultPageCover: '',
  defaultPageCoverPosition: 0.1862,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  //imageCDNHost: 'https://ssfy.io',

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'Jerrywang959/notionsite',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: null
}
