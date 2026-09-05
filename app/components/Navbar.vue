<script setup lang="ts">
const navLinks = [
    {name: 'My', to: '/#sobre' },
    {name: 'Skills', to: '/#skills'},
    {name: 'Experiência', to:'/experiencia'},
    {name: 'Cursos', to: '/formacao'},
    {name: 'Projetos', to: '/#projetos'},
]
</script>

<template>
    <header
    class="relative lg:absolute inset-x-0 top-0 z-50 bg-background backdrop-blur  border-b-2 border-border ">
    <div class="mx-auto flex items-start justify-between gap-6 max-w-5xl px-6 py-5 lg:items-center">
        <h1 class="text-lg font-serif">My Portfolio.</h1>

      <div class="flex flex-col items-start gap-3 lg:contents">
        <nav class="grid grid-cols-2 gap-x-10 gap-y-3 lg:flex lg:gap-10">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-[15px] font-serif text-foreground transition hover:text-muted">
            {{ link.name }}
          </NuxtLink>
        </nav>
        <NuxtLink
          to="/#contatos"
          class="px-4 inline-block border border-primary p-2 rounded-full text-xs font-medium text-primary transition  hover:bg-secondary">
          Contatos
        </NuxtLink>
      </div>
    </div>
   
  </header>
</template>