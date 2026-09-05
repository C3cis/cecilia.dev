<script setup lang="ts">
  const props = defineProps({
    categoria: { type: String, required: true },
    atual: { type: Boolean, default: false },
    titulo: { type: String, required: true },
    instituicao: { type: String, required: true },
    conteudo: { type: String, required: true },
    cidade: { type: String, required: true },
    dataInicio: { type: String, required: true },
    dataFim: { type: String, default: 'Presente' },
    tagsLinguagem: { type: Array as PropType<string[]>, required: true },
  })
</script>
<template>
  <div class="relative rounded-2xl border border-t-5 border-border border-t-primary bg-card p-9">
    <div class="mb-2 flex items-start justify-between">
      <div class="flex gap-2">
        <span
          class="rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground uppercase">
          {{ categoria }}
        </span>
        <span
          v-if="atual"
          class="rounded-full bg-muted px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Atual
        </span>
      </div>

      <div class="text-right">
        <span class="text-sm text-muted-foreground"> {{ dataInicio }} — {{ dataFim }} </span>
        <p class="text-sm text-muted-foreground/70">{{ cidade }}</p>
      </div>
    </div>
    <h3 class="mb-1 font-serif text-2xl text-foreground">{{ titulo }}</h3>
    <p class="mb-4 font-medium text-primary">{{ instituicao }}</p>
    <p class="mb-6 max-w-[95ch] text-muted-foreground">{{ conteudo }}</p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tagsLinguagem"
        :key="tag"
        class="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
        {{ tag }}
      </span>
    </div>
  </div>
</template>
