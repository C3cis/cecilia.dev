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
    class="absolute inset-x-0 top-0 z-50 bg-background backdrop-blur  border-b-2 border-border ">
    <div class="flex max-w-7xl items-center justify-between px-2 py-5 sm:px-6">
        <h1 class="text-lg font-serif">My Portfolio.</h1>

      <nav class="flex flex-wrap gap-10  lg:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[15px] font-serif text-foreground transition hover:text-accent">
          {{ link.name }}
        </NuxtLink>
      </nav>
      <NuxtLink
   to="#contatos"
   class="px-4 inline-block border border-primary p-2 rounded-full text-xs font-medium text-primary transition hover:bg-primary">
            Contatos
   </NuxtLink>
    </div>
   
  </header>
</template>