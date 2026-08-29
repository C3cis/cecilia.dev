<script setup lang="ts">

const activeTab = ref<SkillTab>('frontend')

</script>

<template>
  <section id="hero" class="grid grid-cols-2 items-center gap-45  py-10 min-h-[70vh]">
    <div>
      <h3 class="w-max border border-primary text-primary rounded-full px-4 py-1 no-underline">
        Olá eu sou
      </h3>

      <h1 class="max-w-[10ch] text-7xl font-bold mt-8">
        Full Stack Developer Junior
      </h1>

      <p class="mt-8 mb-10 max-w-[65ch] text-left leading-relaxed border-b-3 border-border pb-8">
        Estou cursando Sistemas de Informação (4º semestre) e atualmente estou estagiando
        no CBPF adquirindo experiência em projetos reais participando nos processos do frontend e backend.
      </p>

      <div class="flex items-center gap-4">
        <NuxtLink
        to="#projetos" 
        class="text-sm border border-primary text-primary rounded-full px-4 py-1.5 hover:bg-primary">
          Ver Projetos 
        </NuxtLink>

        <a
          href="https://github.com/C3cis"
          target="_blank"
          class="border border-primary text-primary rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Icon name="mdi:github" size="20" />
        </a>

        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          class="border border-primary text-primary rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Icon name="mdi:linkedin" size="20" />
        </a>

         <a
          href="mailto:ceciliaponte0124@gmail.com"
          class="border border-primary text-primary rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Icon name="mdi:email" size="20" />
        </a>
      </div>
    </div>

    <div>
      <img
        src="/cat.jpg"
        alt="Imagem Principal"
        class="w-[350px] h-[350px] object-cover rounded-2xl border-[9px] border-transparent bg-border from-primary to-secondary bg-origin-border"
      >
    </div>
  </section>

  <section id="skills" class="px-4 py-24 ">
    <div class="text-center">
      <p>O que eu faço</p>
      <h1 class="text-4xl font-bold">Minhas Skills</h1>
    </div>

    <div class="flex flex-row justify-center gap-4 mt-10">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="rounded-full px-4 py-2 border transition-colors"
        :class="activeTab === tab.key
          ? 'bg-primary text-primary-foreground border-primary'
          : 'border-primary text-primary hover:bg-primary/10'"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-10">
      <CardSkills
        v-for="skill in skillsData[activeTab]"
        :key="skill.name"
        :name="skill.name"
        :level="skill.level"
      />
    </div>
  </section>

  <section id="trajetoria" class="px-80 py-24 min-h-[50vh]">
    <div class="text-center">
      <p>Trajetória</p>
      <h1 class="text-4xl font-bold">Experiência & Educação</h1>
    </div>
  </section>

  <section id="projetos">
    <div class="trabalhos">
      <p>Trajetória</p>
      <h1 class="text-4xl font-bold">Experiência & Educação</h1>
    </div>
  </section>
</template>
