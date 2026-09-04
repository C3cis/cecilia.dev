<script setup lang="ts">
const props = defineProps({
  tags: { type: Array as PropType<string[]>, required: true },
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  plataforma: { type: String, required: true },
  concluido: { type: Boolean, default: true },
  dataFeito: { type: String, required: false },
  horas: { type: String, required: true },
  linkCertificado: { type: String, required: false },
})

</script>

<template>
  <div class="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-9 bg-card border border-border rounded-2xl px-7 py-8 hover:border-primary/40 transition-colors">
   
    <span
      v-if="!concluido"
      class="absolute top-0 left-6 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-wide bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border"
    >
      Em andamento
    </span>

    <div class="flex md:w-8 shrink-0">
      <span
        v-if="concluido"
        class="flex items-center justify-center w-9 h-9 rounded-full border border-primary text-primary shrink-0"
      >
        ✓
      </span>
    </div>

    <div class="flex-1 min-w-0">
      <div class="flex flex-wrap gap-2 mb-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-[9px] font-semibold uppercase tracking-wide bg-muted text-muted-foreground px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <h3 class="text-lg font-bold text-foreground">
        {{ titulo }}
      </h3>

      <p v-if="conteudo" class="text-sm text-muted-foreground mt-1">
        {{ conteudo }}
      </p>

      <p class="text-muted-foreground mt-1">
        {{ plataforma }}
      </p>
    </div>

    <div class="hidden md:block w-px self-stretch bg-border" />

    <div class="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-1 md:w-40 shrink-0 text-[15px] text-muted-foreground font-serif ">
      <div class="flex items-center gap-2">
        <span >{{ concluido ? dataFeito : 'Em andamento'}} </span>
        <span class="text-xl font-sans"> — {{ horas }}</span>
      </div>

      <a
        v-if="concluido && linkCertificado"
        :href="linkCertificado"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 text-foreground font-medium hover:underline"
      >
        Ver credencial
        <Icon name="mdi:open-in-new" class="w-4 h-4" />
      </a>
    </div>
  </div>
</template>