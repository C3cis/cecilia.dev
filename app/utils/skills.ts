export type SkillTab = 'frontend' | 'backend' | 'devops'

export const skillsData: Record<SkillTab, { name: string; level: number }[]> = {
  frontend: [
    { name: 'Vue.js', level: 75 },
    { name: 'Nuxt', level: 60 },
    { name: 'TypeScript', level: 50 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'HTML & CSS', level: 85 },
    { name: 'React', level: 2 },
  ],
  backend: [
    { name: 'Go', level: 40 },
    { name: 'Gin Framework', level: 35 },
    { name: 'Bun', level: 50 },
    { name: 'REST APIs', level: 60 },
    { name: 'MongoSQL', level: 40 },
    { name: 'Node.js', level: 68 },
  ],
  devops: [
    { name: 'Linux / Terminal', level: 10 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Docker', level: 5 },
    { name: 'Nginx', level: 10 },
    { name: '--', level: 0 },
    { name: '--', level: 0 },
  ],
}

export const tabs: { key: SkillTab; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'devops', label: 'DevOps' },
]