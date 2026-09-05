export type tagsLinguagem =
  | 'Go'
  | 'Gin'
  | 'MongoSQL'
  | 'React'
  | 'Vue'
  | 'TS'
  | 'JS'
  | 'Bun'
  | 'Java'
  | 'Spring Boot'
  | 'API'
  | 'Micro-serviço'
  | 'Nuxt'
  | 'Tailwind'

export interface Experiencia {
  categoria: string
  atual?: boolean
  titulo: string
  instituicao: string
  conteudo: string
  cidade: string
  dataInicio: string
  dataFim?: string
  tagsLinguagem: tagsLinguagem[]
}

export const experiencias: Experiencia[] = [
  {
    categoria: 'Estágio',
    atual: true,
    titulo: 'Estagiária Full Stack',
    instituicao: 'CBPF — Centro Brasileiro de Pesquisas Físicas',
    conteudo:
      'Desenvolvimento de ferramentas web para apoio a equipes de pesquisa científica. Implementação de dashboards interativos com Vue.js e APIs em Go conectadas ao banco de dados MongoSQL.',
    cidade: 'Rio de Janeiro, RJ',
    dataInicio: 'Abril 2026',
    dataFim: 'Presente',
    tagsLinguagem: ['Vue', 'Go', 'MongoSQL', 'Nuxt', 'Tailwind'],
  },
  {
    categoria: 'Extensão',
    atual: true,
    titulo: 'Administrador de Equipamentos',
    instituicao: 'Faculdade SENAC — Sistemas de Informação',
    conteudo:
      'Desenvolvimento de um projeto Administrador de Equipamentos, feito por meio da elaboração de um sistema ...',
    cidade: 'Cidade, SP',
    dataInicio: 'Abril 2025',
    dataFim: 'Presente',
    tagsLinguagem: ['Java', 'Spring Boot', 'Micro-serviço'],
  },
]
