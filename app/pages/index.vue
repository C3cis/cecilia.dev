<script setup lang="ts">

const activeTab = ref<SkillTab>('frontend')

</script>

<template>
  <section id="hero" class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-45 py-10 min-h-[70vh]">
    <div class="order-2 lg:order-1">
      <h3 class="w-max border border-primary text-primary rounded-full px-4 py-1 no-underline font-serif">
        Olá eu sou
      </h3>

      <h1 class="max-w-[10ch] text-5xl md:text-6xl lg:text-7xl font-bold mt-8">
        <span class="italic text-muted-medium">Full Stack </span>
        Developer Junior
      </h1>
      

      <p class="mt-8 mb-10 max-w-[65ch] text-left leading-relaxed  border-b-3 border-border pb-8 text-secondary-light font-serif">
       Estou cursando Sistemas de Informação (4º semestre) e estagio atualmente, atuando em frentes de desenvolvimento web, backend, DevOps e cloud. Construindo aplicações de ponta a ponta, do código à infraestrutura que o sustenta.
      </p>

      <div class="flex items-center gap-4">
        <NuxtLink
        to="#projetos" 
        class="text-sm border border-muted-medium text-muted-medium rounded-full px-4 py-1.5 hover:bg-primary">
          Ver Projetos 
        </NuxtLink>

        <a
          href="https://github.com/C3cis"
          target="_blank"
          class="border border-muted-medium text-muted-medium rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Icon name="mdi:github" size="20" />
        </a>

        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          class="border border-muted-medium text-muted-medium rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Icon name="mdi:linkedin" size="20" />
        </a>

         <a
          href="mailto:ceciliaponte0124@gmail.com"
          class="border border-muted-medium text-muted-medium rounded-full p-2 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Icon name="mdi:email" size="20" />
        </a>
      </div>
    </div>

    <div class="order-1 lg:order-2 flex justify-center lg:block">
      <img
        src="/cat.jpeg"
        alt="Imagem Principal"
        class="w-[280px] h-[280px] sm:w-[450px] sm:h-[540px] object-cover rounded-2xl"
      >
    </div>
  </section>

  <section id="skills" class="full-bleed bg-light-soft py-20 ">
   <div class="mx-auto max-w-5xl px-6">
    <div class="text-center text-sm font-serif text-background-dark">
      <p>O  QUE EU FAÇO</p>
      <h1 class="text-4xl font-bold mt-5">Minhas Skills</h1>
    </div>

    <div class="flex flex-row flex-wrap justify-center gap-4 mt-10 font-sans">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="rounded-xl px-4 py-2 border  transition-colors"
        :class="activeTab === tab.key
          ? 'bg-background-dark text-primary-medium border-background-dark'
          : 'border-primary bg-muted-medium text-primary-medium hover:bg-muted'"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 font-serif">
      <CardSkills
        v-for="skill in skillsData[activeTab]"
        :key="skill.name"
        :name="skill.name"
        :level="skill.level"
      />
    </div>
   </div>
  </section>

  

  <section 
  id="projetos" 
  class="mb-30 py-20">
<div class="flex flex-row items-center gap-4 font-serif">
      <Icon name="bxl:gitlab" class="text-primary text-5xl shrink-0" />
      <div class="flex flex-col">
        <span class="text-sm uppercase tracking-wide text-muted-foreground">TRABALHOS EM DESENVOLVIMENTO</span>
        <h2 class="text-2xl font-bold text-foreground">Projetos Pessoais</h2>
      </div>
</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
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
  
  <section id="contatos" class="full-bleed relative overflow-hidden py-20 text-center bg-gradient-to-br from-primary/40 via-muted to-primary/30">
   <div class="mx-auto max-w-3xl px-6">
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
      class="inline-flex items-center gap-2 border border-foreground text-foreground font-semibold px-6 py-3 rounded-full hover:bg-muted transition-colors"
    >
      <Icon name="mdi:email-outline" class="w-5 h-5" />
      Enviar
    </a>

    <a
      href="https://www.linkedin.com/feed/"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 border border-foreground text-foreground font-semibold px-6 py-3 rounded-full hover:bg-muted transition-colors"
    >
      <Icon name="mdi:linkedin" class="w-5 h-5" />
      LinkedIn
    </a>
  </div>
   </div>
</section>

</template>
