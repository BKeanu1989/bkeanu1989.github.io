import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
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
            text: 'Resources',
            link: '/resources'
        },
        {
            text: 'Interesting',
            children: [
                {
                    text: 'Home',
                    link: '/interesting'
                },
                {
                    text: 'Snippets',
                    link: '/snippets'
                },
                {
                    text: 'Bucket',
                    link: '/interesting/bucket'
                }
            ]
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
            text: 'About Me',
            children: [
                {
                    text: 'About me',
                    link: '/personal'
                },
            ]
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
            link: "/tutorials/pwa.md"
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
                  link: '/tutorials/plugin-development-rave.md'
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
                }
              ]
            }
          ]
      },
  }),
  plugins: [
    searchPlugin({
      // options
    }),
  ],
})