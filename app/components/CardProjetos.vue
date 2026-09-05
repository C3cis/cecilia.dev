<script setup lang="ts">
  const props = defineProps({
    foto: { type: String, required: true },
    tags: { type: Array as PropType<string[]>, required: true },
    titulo: { type: String, required: true },
    conteudo: { type: String, required: true },
    linkGit: { type: String, required: true },
  })
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-border bg-card">
    <div class="relative h-44 bg-muted">
      <img :src="foto" :alt="titulo" class="h-full w-full object-cover" />

      <!--Status-->
      <div class="absolute bottom-3 left-3 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold tracking-wide text-foreground uppercase backdrop-blur-sm">
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="p-4">
      <h3 class="mb-2 text-lg font-bold text-foreground">
        {{ titulo }}
      </h3>

      <p class="mb-4 text-sm text-muted-foreground">
        {{ conteudo }}
      </p>

      <a
        :href="linkGit"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
        Ver projeto
        <Icon name="mdi:open-in-new" class="h-4 w-4" />
      </a>
    </div>
  </div>
</template>
