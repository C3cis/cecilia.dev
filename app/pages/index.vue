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
        <span class="italic text-primary">Full Stack </span>
        Developer Junior
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

  <section id="skills" 
  class="py-20">
    <div class="text-center text-sm font-serif">
      <p>O  QUE EU FAÇO</p>
      <h1 class="text-4xl font-bold mt-5">Minhas Skills</h1>
    </div>

    <div class="flex flex-row justify-center gap-4 mt-10 font-sans">
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
    <div class="grid grid-cols-3 gap-4 mt-10 font-serif">
      <CardSkills
        v-for="skill in skillsData[activeTab]"
        :key="skill.name"
        :name="skill.name"
        :level="skill.level"
      />
    </div>
  </section>

  

  <section 
  id="trabalhos" 
  class="mb-30">
<div class="flex flex-row items-center gap-4 font-serif">
      <Icon name="bxl:gitlab" class="text-primary text-5xl shrink-0" />
      <div class="flex flex-col">
        <span class="text-sm uppercase tracking-wide text-muted-foreground">TRABALHOS EM DESENVOLVIMENTO</span>
        <h2 class="text-2xl font-bold text-foreground">Projetos Pessoais</h2>
      </div>
</div>

    <div class="grid grid-cols-3 gap-10 mt-10">
      <CardProjetos
        v-for="projeto in projetos"
        :key="projeto.titulo"
        :foto="projeto.foto"
        :tags="projeto.tags"
        :titulo="projeto.titulo"
        :conteudo="projeto.conteudo"
        :link-git="projeto.linkGit"
      />
    </div>
  </section>
  
  <section class="relative overflow-hidden rounded-3xl px-50 py-20 text-center bg-gradient-to-br from-primary/40 via-muted to-primary/30">
  <h2 class="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight px-8">
    Bora transformar ideia em
    <span class="italic text-primary">código</span>
  </h2>

  <p class="mt-6 text-sm text-muted-foreground max-w-xl mx-auto">
    Estou aberta a oportunidades, freelas e colaborações. Me chama!
  </p>

  <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
    <a
      href="mailto:ceciliaponte0124@gmail.com"
      class="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
    >
      <Icon name="mdi:email-outline" class="w-5 h-5" />
      Enviar e-mail
    </a>

    <a
      href="https://www.linkedin.com/feed/"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 border border-foreground text-foreground font-semibold px-6 py-3 rounded-full hover:bg-foreground/10 transition-colors"
    >
      <Icon name="mdi:linkedin" class="w-5 h-5" />
      LinkedIn
    </a>
  </div>
</section>

</template>
