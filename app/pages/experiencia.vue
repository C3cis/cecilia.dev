<script setup lang="ts"></script>
<template>
  <section id="trajetoria" class="py-18">
    <div class="text-center font-serif">
      <h3
        class="w-max rounded-full border border-primary px-6 py-1 text-lg text-primary no-underline">
        Trajetória
      </h3>

      <h1 class="mt-8 text-left text-6xl font-bold">
        Experiência <span class="text-muted-medium italic">Profissional </span>
      </h1>

      <p class="mt-8 max-w-[65ch] text-left text-lg leading-relaxed text-secondary">
        Entre monitoria, estágio em pesquisa científica e projetos próprios, aprendi a transitar
        entre back-end, dados e front-end para saber o que acontece em cada processo do sistema.
      </p>
    </div>

    <div class="mt-10 flex flex-row gap-10 font-serif">
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">2</span>
        <p class="max-w-[9ch] text-sm leading-tight text-muted-foreground">Experiências</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">1</span>
        <p class="max-w-[13ch] text-sm leading-tight text-muted-foreground">Projetos Reais</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">1</span>
        <p class="max-w-[13ch] text-sm leading-tight text-muted-foreground">Ano de Atuação</p>
      </div>
    </div>

    <!-- Timeline-->
    <div class="max-w-1xl relative mx-auto mt-30 pl-[2.64rem]">
      <div class="absolute top-0 bottom-0 left-2 w-px bg-border" />

      <div class="flex flex-col gap-8">
        <div v-for="exp in experiencias" :key="exp.titulo" class="relative">
          <span class="absolute top-10 -left-10 h-3 w-3 rounded-full bg-primary" />

          <CardTrajetoria v-bind="exp" />
        </div>
      </div>
    </div>
  </section>
  <!--
    <section id="blog" 
  class="py-18">
    <div class="text-center font-serif">
      <h3 class="w-max border border-primary text-primary rounded-full px-6 py-1 no-underline text-lg">Bastidores</h3>
      <h1 class="text-left text-6xl font-bold mt-8">Blog & Reflexões</h1>
      <p class="mt-8 text-lg text-secondary max-w-[65ch] text-left leading-relaxed">
        Textos sobre o que estou aprendendo, as dificuldades do dia a dia e os bastidores da minha jornada como dev júnior.
      </p>
    </div>

  </section>
  -->
</template>
