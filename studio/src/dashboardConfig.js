export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea9b68b1beed07028cac0b7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-eke43sg1',
                  apiId: '44bd0ad6-1b73-49a7-af05-99687c7c2870'
                },
                {
                  buildHookId: '5ea9b68ba45724020a68d4f2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7k8af1ha',
                  apiId: 'd819dc29-2dcc-47ee-999b-63693dab4555'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peteainsworth/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7k8af1ha.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
