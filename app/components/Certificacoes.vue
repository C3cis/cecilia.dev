<script setup lang="ts">
  const props = defineProps({
    tags: { type: Array as PropType<string[]>, required: true },
    titulo: { type: String, required: true },
    conteudo: { type: String, required: true },
    plataforma: { type: String, required: true },
    status: { type: String, default: '' },
    dataFeito: { type: String, required: false, default: '' },
    horas: { type: Number, required: true },
    linkCertificado: { type: String, required: false, default: '' },
  })
</script>

<template>
  <div
    class="relative flex flex-col gap-4 rounded-2xl border border-border bg-card px-7 py-8 transition-colors hover:border-primary/40 md:flex-row md:items-center md:gap-9">
    <span
      v-if="status"
      class="absolute top-0 left-6 -translate-y-1/2 rounded-full border border-border bg-muted px-3 py-1 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
      {{ status }}
    </span>

    <div class="min-w-0 flex-1">
      <div class="mb-2 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-muted px-3 py-1 text-[9px] font-semibold tracking-wide text-muted-foreground uppercase">
          {{ tag }}
        </span>
      </div>

      <h3 class="text-lg font-bold text-foreground">
        {{ titulo }}
      </h3>

      <p v-if="conteudo" class="mt-1 text-sm text-muted-foreground">
        {{ conteudo }}
      </p>

      <p class="mt-1 text-muted-foreground">
        {{ plataforma }}
      </p>
    </div>

    <div class="hidden w-px self-stretch bg-border md:block" />

    <div
      class="flex shrink-0 items-center justify-between gap-1 font-serif text-[15px] text-muted-foreground md:w-40 md:flex-col md:items-end md:justify-center">
      <div class="flex items-center gap-2">
        <span>{{ dataFeito ?? 'Em andamento' }} </span>
        <span class="font-sans text-xl"> — {{ horas }}</span>
      </div>

      <a
        v-if="linkCertificado"
        :href="linkCertificado"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 font-medium text-foreground hover:underline">
        Ver credencial
        <Icon name="mdi:open-in-new" class="h-4 w-4" />
      </a>
    </div>
  </div>
</template>
