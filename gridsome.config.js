// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss');



module.exports = {
  siteName: 'BakeBunny',
  transformers: {
    remark: {
      // global remark options
      externalLinksTarget: '_blank',
      anchorClassName: 'icon icon-link'
    }
  },
  plugins: [
     // configure Netlify CMS
     { use: 'gridsome-plugin-netlify-cms' },
     // fix paths
     { use: 'gridsome-plugin-netlify-cms-paths' },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}