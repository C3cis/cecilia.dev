interface Certificados {
  id: number
  name: string
  instituicao: string
  data: string
  horas: number
  link: string
  descricao: string
  tags: string
  status: string
}

export default defineEventHandler(async () => {
  const { results } = await d1<Certificados>('SELECT * FROM certificados')

  return results
})
