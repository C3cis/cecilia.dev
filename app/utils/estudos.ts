// O que estou estudando agora — precisa bater com as props do Estudos.vue
export type Estudo = {
  categoria: string
  titulo: string
  porcentagem: number
  status?: string
}

export const estudos: Estudo[] = [
  {
    categoria: 'DevOps',
    titulo: 'Docker & MV',
    porcentagem: 5,
  },
  {
    categoria: 'Backend',
    titulo: 'React',
    porcentagem: 0,
  },
  {
    categoria: 'Backend',
    titulo: 'Arquitetura de Microsserviços',
    porcentagem: 20,
  },
]
