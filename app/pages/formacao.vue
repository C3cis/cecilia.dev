<script setup lang="ts">
  const { data } = await useFetch('/api/certificados')

  const certificados = computed(() => {
    if (!data.value) return []
    return data.value.map((certificado) => ({
      tags: certificado.tags.split(',').map((tag: string) => tag.trim()),
      titulo: certificado.nome,
      conteudo: certificado.descricao,
      plataforma: certificado.instituicao,
      status: certificado.status,
      dataFeito: certificado.data,
      horas: certificado.horas,
      linkCertificado: certificado.link,
    }))
  })
</script>
<template>
  <section id="formacao" class="py-18">
    <div class="text-center font-serif">
      <h3
        class="w-max rounded-full border border-primary px-6 py-1 text-lg text-primary no-underline">
        Formação
      </h3>
      <h1 class="mt-8 text-left text-6xl font-bold text-primary italic">Cursos & Certificações</h1>

      <p class="mt-8 max-w-[65ch] text-left text-lg leading-relaxed text-secondary">
        Formação acadêmica, certificações técnicas e o que estou estudando agora.
      </p>
    </div>
    <div class="mt-10 flex flex-row gap-10 font-serif">
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">5</span>
        <p class="max-w-[9ch] text-sm leading-tight text-muted-foreground italic">Certificados</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">120h+</span>
        <p class="max-w-[9ch] text-sm leading-tight text-muted-foreground italic">de Estudos</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-4xl font-bold text-primary">4</span>
        <p class="max-w-[25ch]italic text-sm leading-tight text-muted-foreground">Áreas de Foco</p>
      </div>
    </div>
  </section>
  <section class="full-bleed bg-background-light py-16">
    <div class="mx-auto max-w-5xl px-6">
      <div class="flex flex-row items-center gap-4 font-serif">
        <Icon name="famicons:school-sharp" class="shrink-0 text-5xl text-background-dark" />
        <div class="flex flex-col">
          <span class="text-sm tracking-wide text-background-dark/70 uppercase"
            >Formação Acadêmica</span
          >
          <h2 class="text-2xl font-bold text-background-dark">Cursos</h2>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-8">
        <FormacaoAcad v-for="curso in formacao" :key="curso.titulo" v-bind="curso" />
      </div>
    </div>
  </section>
  <section class="py-10">
    <div class="flex flex-row items-center gap-4 font-serif">
      <Icon name="ant-design:safety-certificate-outlined" class="shrink-0 text-5xl text-primary" />
      <div class="flex flex-col">
        <span class="text-sm tracking-wide text-muted-foreground uppercase">Conquistas</span>
        <h2 class="text-2xl font-bold text-foreground">Certificações</h2>
      </div>
    </div>

    <div class="mt-10 flex flex-col gap-4">
      <Certificacoes v-for="cert in certificados" :key="cert.titulo" v-bind="cert" />
    </div>
  </section>
  <section class="py-10">
    <div class="flex flex-row items-center gap-4 font-serif">
      <Icon name="basil:book-open-outline" class="shrink-0 text-5xl text-primary" />
      <div class="flex flex-col">
        <span class="text-sm tracking-wide text-muted-foreground uppercase"
          >Aprendizado contínuo</span
        >
        <h2 class="text-2xl font-bold text-foreground">Estudando agora</h2>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      <Estudos v-for="estudo in estudos" :key="estudo.titulo" v-bind="estudo" />
    </div>
  </section>
</template>
