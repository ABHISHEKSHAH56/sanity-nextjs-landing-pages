export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6094dd1956750cd418783702',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8d9cxy9k',
                  apiId: 'ef340a62-0ac2-4dc0-a634-5f32f1d66e20'
                },
                {
                  buildHookId: '6094dd1a8ffba6d92c00f970',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zjmx55xo',
                  apiId: '2a3d9dce-c81b-46de-bacf-df0530f51cf1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ABHISHEKSHAH56/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zjmx55xo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
