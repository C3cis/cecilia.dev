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
  <div class="bg-card border border-border rounded-3xl p-6 relative">

    <span
      v-if="!concluido"
      class="absolute top-0 right-0 text-xs font-semibold uppercase tracking-wide bg-muted text-muted-foreground px-3 py-1 rounded-bl-lg rounded-tr-lg"
    >
      Em andamento
    </span>

    <!--Tags -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs font-semibold uppercase tracking-wide bg-muted text-muted-foreground px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <span
        v-if="concluido"
        class="flex items-center justify-center w-6 h-6 rounded-full border border-primary text-primary"
      >
        ✓
      </span>
    </div>

    <h3 class="text-lg font-bold text-foreground mb-1">
      {{ titulo }}
    </h3>

    <p v-if="conteudo" class="text-sm text-muted-foreground mb-2">
      {{ conteudo }}
    </p>

    <p class="text-muted-foreground mb-4">
      {{ plataforma }}
    </p>

    <!-- linha -->
    <div class="border-t border-border mb-4" />

    <div class="flex items-center justify-between text-sm text-muted-foreground">
      <div class="flex items-center gap-3">
        <span>{{ concluido ? dataFeito : 'Em andamento' }}</span>
        <span>{{ horas }}</span>
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