import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import utils from '@vuepress/utils'
const { path } = utils

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  lang: 'en-US',
  title: 'Blog - Kevin Fechner',
  base: "/",
  description: '(Un)interesting things in a life of a developer',
  theme: defaultTheme({
    navbar: [
        {
          text: 'Home',
          link: '/',
        },
        {
          text: 'Books',
          link: '/books',
        },
        {
          text: 'Bucket list',
          link: '/bucketlist'
      },
        {
            text: 'Resources',
            link: '/resources'
        },
        {
          text: 'Snippets',
          link: '/snippets'
      },
        {
            text: 'Projects',
            link: '/projects'
        },
        {
            text: 'Tutorials',
            link: '/tutorials',
        },
        {
            text: 'Web Development',
            link: '/webdevelopment'
        },
      ],
      sidebar: {
        '/interesting': [
          {
            text: 'Map Routing',
            link: '/interesting/open-routing.md',
          },
        ],
        '/snippets': [
            {
              text: 'Docker',
              children: [
                {
                    link: '/snippets/docker-debug.md',
                    text: 'Docker with Wordpress'
                }
              ]
            },
            {
              text: 'Wordpress',
              children: [
                {
                    link: '/snippets/wordpress-import.md',
                    text: 'Import Database in Wordpress'
                },
                {
                  text: 'Wordpress Upload Image Quality',
                  link: '/snippets/wordpress-image-quality.md'
                }
              ]
            },
            {
              text: 'MySQL',
              children: [
                {
                    link: '/snippets/db-backups.md',
                    text: 'Automated DB Backups'
                }
              ]
            },
            {
              text: 'Utility',
              children: [
                {
                    link: '/snippets/utility.md',
                    text: 'Utility Functions & Stuff'
                }
              ]
            },
          ],
          '/projects' : [
            {
              text: 'Safeboxen',
              link: '/projects/Safeboxen.md'
            },
            {
              text: 'Festival Survival',
              link: '/projects/Festival-survival.md'
            },

          ],
          '/tutorials' : [
           {
            text: "Progressive Web Apps (PWA)",
            link: "/tutorials/pwa.md",
            children: [
              {
                text: 'Web Push',
                link: '/tutorials/web-push-server.md'
              },
              {
                text: 'Service Worker',
                link: '/tutorials/service-worker.md'
              },
            ]
           }, 
           {
            text: "Two-Factor Authentication (2FA)",
            link: "/tutorials/two-factor-auth.md"
           },
            {
              text: 'Wordpress',
              children: [
                {
                  text: 'Plugin Development',
                  link: '/tutorials/plugin-dev-rave.md'
                }
              ]
            },
            {
              text: 'CSS',
              children: [
                {
                  text: 'Dark Mode',
                  link: '/tutorials/dark-mode.md'
                },
                {
                  text: 'Clamp',
                  link: '/tutorials/clamp.md'
                },
                {
                  text: 'Container Queries',
                  link: '/tutorials/container-queries.md'
                },
              ]
            }
          ]
      },
  }),
  plugins: [
    searchPlugin({
      // options
    }),
    registerComponentsPlugin({
      components: {
        FactfulnessQuiz: path.resolve('./components/FactfulnessQuiz.vue')
      }
    })
  ],
})