// Tags permitidas. Se precisar de outra (ex: 'Nuxt'), é só adicionar aqui na união.
export type TagProjeto = 'Go' | 'Gin' | 'MongoSQL' | 'React' | 'Vue' | 'TS' | 'JS' | 'Bun'

export type Projeto = {
  foto: string
  tags: TagProjeto[]
  titulo: string
  conteudo: string
  linkGit: string
}

export const projetos: Projeto[] = [
  {
    foto: '/proj1.jpeg', 
    tags: ['Gin', 'TS', 'Bun', 'MongoSQL'],
    titulo: 'Projeto Gestão Administrativa',
    conteudo: 'Aplicação web desenvolvida na arquitetura MVC para controle e gerenciamento administrativo de equipamentos.',
    linkGit: 'https://github.com/C3cis/Projeto-Gestao-go'
  },
  {
    foto: '/proj4.jpeg',
    tags: ['Go', 'Gin', 'MongoSQL'],
    titulo: 'Site de Portal Empreendedor',
    conteudo: 'Desenvolvimento web de um portal informativo sobre empreendedorismo, transformação digital e ecossistema de negócios.',
    linkGit: 'https://github.com/C3cis/site-empreendedorismo',
  },
  {
    foto: '/proj3.jpeg',
    tags: ['Vue','TS'],
    titulo: 'Aplicativo e-commerce',
    conteudo: 'Desenvolvimento de um aplicativo web de e-commerce, com funcionalidades de carrinho de compras, checkout e integração com API.',
    linkGit: 'https://github.com/C3cis',
  },
]
