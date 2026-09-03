// Cada disciplina em destaque, com nota de 0 a 10
export type Disciplina = {
  nome: string
  nota: number
}

export type Formacao = {
  categoria: string
  statusLabel?: string
  titulo: string
  instituicao: string
  dataInicio: string
  dataFim?: string
  conteudo: string
  disciplinas: Disciplina[]
}

export const formacao: Formacao[] = [
  {
    categoria: '4º Semestre',
    statusLabel: 'Em andamento',
    titulo: 'Bacharelado em Sistemas de Informação',
    instituicao: 'SENAC — Serviço Nacional de Aprendizagem Comercial',
    dataInicio: '2025',
    dataFim: '2028',
    conteudo: 'Focando em desenvolvimento de software, banco de dados e arquitetura de sistemas.',
    disciplinas: [
      { nome: 'Algoritmos e Estruturas de Dados', nota: 8.5 },
      { nome: 'Banco de Dados', nota: 8.0 },
      { nome: 'Desenvolvimento Web', nota: 9.2 },
      { nome: 'Redes de Computadores', nota: 8.7 },
      { nome: 'Arquitetura Orientada a Serviços', nota: 8.0 },
    ],
  },
]
