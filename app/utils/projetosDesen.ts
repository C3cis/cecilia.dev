// Tags permitidas. Se precisar de outra (ex: 'Nuxt'), é só adicionar aqui na união.
export type Tag = 'Go' | 'Gin' | 'MongoSQL' | 'React' | 'Vue' | 'TS' | 'JS' | 'Bun'

export type Projeto = {
  foto: string
  tags: Tag[]
  titulo: string
  conteudo: string
  linkGit: string
}

export const projetos: Projeto[] = [
  {
    foto: '/cat.jpg', 
    tags: ['Vue', 'TS', 'Bun'],
    titulo: 'Projeto Fictício 1',
    conteudo: 'Descrição de exemplo. Troque por um resumo curto do que o projeto faz.',
    linkGit: 'https://github.com/C3cis',
  },
  {
    foto: '/cat.jpg',
    tags: ['Go', 'Gin', 'MongoSQL'],
    titulo: 'Projeto Fictício 2',
    conteudo: 'Descrição de exemplo. Troque por um resumo curto do que o projeto faz.',
    linkGit: 'https://github.com/C3cis',
  },
  {
    foto: '/cat.jpg',
    tags: ['React', 'JS', 'TS'],
    titulo: 'Projeto Fictício 3',
    conteudo: 'Descrição de exemplo. Troque por um resumo curto do que o projeto faz.',
    linkGit: 'https://github.com/C3cis',
  },
]
