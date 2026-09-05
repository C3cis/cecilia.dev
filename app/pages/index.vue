<script setup lang="ts">
  const activeTab = ref<SkillTab>('frontend')
</script>

<template>
  <section
    id="hero"
    class="grid min-h-[70vh] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2 lg:gap-45">
    <div class="order-2 lg:order-1">
      <h3
        class="w-max rounded-full border border-primary px-4 py-1 font-serif text-primary no-underline">
        Olá eu sou
      </h3>

      <h1 class="mt-8 max-w-[10ch] text-5xl font-bold md:text-6xl lg:text-7xl">
        <span class="text-muted-medium italic">Full Stack </span>
        Developer Junior
      </h1>

      <p
        class="mt-8 mb-10 max-w-[65ch] border-b-3 border-border pb-8 text-left font-serif leading-relaxed text-secondary-light">
        Estou cursando Sistemas de Informação (4º semestre) e estagio atualmente, atuando em frentes
        de desenvolvimento web, backend, DevOps e cloud. Construindo aplicações de ponta a ponta, do
        código à infraestrutura que o sustenta.
      </p>

      <div class="flex items-center gap-4">
        <NuxtLink
          to="#projetos"
          class="rounded-full border border-muted-medium px-4 py-1.5 text-sm text-muted-medium hover:bg-primary">
          Ver Projetos
        </NuxtLink>

        <a
          href="https://github.com/C3cis"
          target="_blank"
          class="flex items-center justify-center rounded-full border border-muted-medium p-2 text-muted-medium transition-colors hover:bg-primary hover:text-primary-foreground">
          <Icon name="mdi:github" size="20" />
        </a>

        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          class="flex items-center justify-center rounded-full border border-muted-medium p-2 text-muted-medium transition-colors hover:bg-primary hover:text-primary-foreground">
          <Icon name="mdi:linkedin" size="20" />
        </a>

        <a
          href="mailto:ceciliaponte0124@gmail.com"
          class="flex items-center justify-center rounded-full border border-muted-medium p-2 text-muted-medium transition-colors hover:bg-primary hover:text-primary-foreground">
          <Icon name="mdi:email" size="20" />
        </a>
      </div>
    </div>

    <div class="order-1 flex justify-center lg:order-2 lg:block">
      <img
        src="/cat.jpeg"
        alt="Imagem Principal"
        class="h-[280px] w-[280px] rounded-2xl object-cover sm:h-[540px] sm:w-[450px]" />
    </div>
  </section>

  <section id="skills" class="full-bleed bg-light-soft py-20">
    <div class="mx-auto max-w-5xl px-6">
      <div class="text-center font-serif text-sm text-background-dark">
        <p>O QUE EU FAÇO</p>
        <h1 class="mt-5 text-4xl font-bold">Minhas Skills</h1>
      </div>

      <div class="mt-10 flex flex-row flex-wrap justify-center gap-4 font-sans">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          class="rounded-xl border px-4 py-2 transition-colors"
          :class="
            activeTab === tab.key
              ? 'border-background-dark bg-background-dark text-primary-medium'
              : 'border-primary bg-muted-medium text-primary-medium hover:bg-muted'
          "
          @click="activeTab = tab.key">
          {{ tab.label }}
        </button>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-4 font-serif sm:grid-cols-2 lg:grid-cols-3">
        <CardSkills
          v-for="skill in skillsData[activeTab]"
          :key="skill.name"
          :name="skill.name"
          :level="skill.level" />
      </div>
    </div>
  </section>

  <section id="projetos" class="mb-30 py-20">
    <div class="flex flex-row items-center gap-4 font-serif">
      <Icon name="bxl:gitlab" class="shrink-0 text-5xl text-primary" />
      <div class="flex flex-col">
        <span class="text-sm tracking-wide text-muted-foreground uppercase"
          >TRABALHOS EM DESENVOLVIMENTO</span
        >
        <h2 class="text-2xl font-bold text-foreground">Projetos Pessoais</h2>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <CardProjetos
        v-for="projeto in projetos"
        :key="projeto.titulo"
        :foto="projeto.foto"
        :tags="projeto.tags"
        :titulo="projeto.titulo"
        :conteudo="projeto.conteudo"
        :link-git="projeto.linkGit" />
    </div>
  </section>

  <section
    id="contatos"
    class="full-bleed relative overflow-hidden bg-gradient-to-br from-primary/40 via-muted to-primary/30 py-20 text-center">
    <div class="mx-auto max-w-3xl px-6">
      <h2 class="px-8 font-serif text-3xl leading-tight font-bold text-foreground md:text-5xl">
        Bora transformar ideia em
        <span class="text-primary italic">código</span>
      </h2>

      <p class="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
        Estou aberta a oportunidades, freelas e colaborações. Me chama!
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:ceciliaponte0124@gmail.com"
          class="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted">
          <Icon name="mdi:email-outline" class="h-5 w-5" />
          Enviar
        </a>

        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted">
          <Icon name="mdi:linkedin" class="h-5 w-5" />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
