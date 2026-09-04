<script setup lang="ts">

</script>
<template>
    <section id="formacao" 
  class="py-18">
    <div class="text-center font-serif">
      <h3 class="w-max border border-primary text-primary rounded-full px-6 py-1 no-underline text-lg">Formação</h3>
      <h1 class="text-left text-6xl font-bold mt-8 italic text-primary">Cursos & Certificações</h1>
      
      <p class="mt-8 text-lg text-secondary max-w-[65ch] text-left leading-relaxed">
       Formação acadêmica, certificações técnicas e o que estou estudando agora.
      </p>
    </div>
    <div class="flex flex-row gap-10 mt-10 font-serif">
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">5</span>
        <p class="text-sm text-muted-foreground leading-tight max-w-[9ch] italic">Certificados</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">120h+</span>
        <p class="text-sm text-muted-foreground leading-tight max-w-[9ch] italic">de Estudos</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">4</span>
        <p class="text-sm text-muted-foreground leading-tight max-w-[25ch]italic">Áreas de Foco</p>
      </div>
    </div>
</section>
<section class="py-10">
    <div class="flex flex-row items-center gap-4 font-serif">
      <Icon name="famicons:school-sharp" class="text-primary text-5xl shrink-0" />
      <div class="flex flex-col">
        <span class="text-sm uppercase tracking-wide text-muted-foreground">Formação Acadêmica</span>
        <h2 class="text-2xl font-bold text-foreground">Cursos</h2>
      </div>
    </div>

    <div class="flex flex-col gap-8 mt-10">
      <FormacaoAcad
        v-for="curso in formacao"
        :key="curso.titulo"
        v-bind="curso"
      />
    </div>
</section>
<section class="py-10">
    <div class="flex flex-row items-center gap-4 font-serif">
      <Icon name="ant-design:safety-certificate-outlined" class="text-primary text-5xl shrink-0" />
      <div class="flex flex-col">
        <span class="text-sm uppercase tracking-wide text-muted-foreground">Conquistas</span>
        <h2 class="text-2xl font-bold text-foreground">Certificações</h2>
      </div>
    </div>

    <div class="flex flex-col gap-4 mt-10">
      <Certificacoes
        v-for="cert in certificacoes"
        :key="cert.titulo"
        v-bind="cert"
      />
    </div>
</section>
<section class="py-10">
    <div class="flex flex-row items-center gap-4 font-serif">
      <Icon name="basil:book-open-outline" class="text-primary text-5xl shrink-0" />
      <div class="flex flex-col">
        <span class="text-sm uppercase tracking-wide text-muted-foreground">Aprendizado contínuo</span>
        <h2 class="text-2xl font-bold text-foreground">Estudando agora</h2>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <Estudos
        v-for="estudo in estudos"
        :key="estudo.titulo"
        v-bind="estudo"
      />
    </div>
</section>

</template>