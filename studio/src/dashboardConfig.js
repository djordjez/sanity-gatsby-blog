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
                  buildHookId: '5e67e655539dce01f886bdc6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zbdmmuij',
                  apiId: '5cccbf7d-8731-47d6-9067-130ebe013974'
                },
                {
                  buildHookId: '5e67e6551f7b4857e1df76ca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wurrt2m1',
                  apiId: '524034f0-9214-4a12-99aa-7d5ae6d1bec4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djordjez/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wurrt2m1.netlify.com', category: 'apps' }
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
