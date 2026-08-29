export type SkillTab = 'frontend' | 'backend' | 'devops'

export const skillsData: Record<SkillTab, { name: string; level: number }[]> = {
  frontend: [
    { name: 'Vue.js', level: 85 },
    { name: 'Nuxt', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML & CSS', level: 92 },
    { name: 'React', level: 60 },
  ],
  backend: [
    { name: 'Go', level: 70 },
    { name: 'Gin Framework', level: 68 },
    { name: 'Bun', level: 65 },
    { name: 'REST APIs', level: 80 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'Node.js', level: 60 },
  ],
  devops: [
    { name: 'Linux / Terminal', level: 72 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Docker', level: 45 },
    { name: 'Nginx', level: 40 },
    { name: 'CI/CD noções', level: 35 },
    { name: 'Em aprendizado', level: 50 },
  ],
}

export const tabs: { key: SkillTab; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'devops', label: 'DevOps' },
]