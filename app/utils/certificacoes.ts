// Tags específicas de certificações — união própria (não reaproveitei as de
// projetos porque o vocabulário é diferente: Linux, DevOps, Frontend, Nuxt...).
export type TagCert =
  | 'TS' | 'JS' | 'Linux' | 'DevOps' | 'Vue.js' | 'Nuxt' | 'Frontend'

export type Certificacao = {
  tags: TagCert[]
  titulo: string
  conteudo: string
  plataforma: string
  concluido: boolean
  dataFeito?: string
  horas: string
  linkCertificado?: string
}

export const certificacoes: Certificacao[] = [
  {
    tags: ['TS', 'JS'],
    titulo: "TypeScript: The Complete Developer's Guide",
    conteudo: 'Iniciando conhecimentos básicos e avançados sobre a implementação do TS.',
    plataforma: 'Udemy — Stephen Grider',
    concluido: false,
    dataFeito: 'Out 2026',
    horas: '80h',
    // linkCertificado: adicionar depois
  },
  {
    tags: ['Linux', 'DevOps'],
    titulo: 'Linux — The Practical Guide',
    conteudo: 'Adquirindo conceitos básicos de condução do Linux.',
    plataforma: 'Estudonauta',
    concluido: true,
    dataFeito: 'Maio 2026',
    horas: '50h',
    // linkCertificado: adicionar depois
  },
  {
    tags: ['Vue.js', 'Nuxt', 'Frontend'],
    titulo: 'Vue 3 — Composition API & Nuxt 3',
    conteudo: 'Implementando conceitos básicos de Vue e avançados para desenvolvimento com o Nuxt.',
    plataforma: 'Udemy — Stephen Grider',
    concluido: true,
    dataFeito: 'Junho 2026',
    horas: '60h',
    // linkCertificado: adicionar depois
  },
]
