<script setup lang="ts">
 const props = defineProps ({
    foto: { type: String, required: true },
    tags: { type: Array as PropType<string[]>, required: true },
    titulo: {type: String, required: true },
    conteudo: {type: String, required: true },
    linkGit: {type: String, required: true },

 })

</script>

<template>
  <div class="bg-card border border-border rounded-lg overflow-hidden">
    <!-- Área da imagem -->
    <div class="relative h-44 bg-muted">
      <img :src="foto" :alt="titulo" class="w-full h-full object-cover" />

      <!-- Badges sobre a imagem -->
      <div class="absolute bottom-3 left-3 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="text-xs font-semibold uppercase tracking-wide bg-black/40 text-foreground px-3 py-1 rounded-full backdrop-blur-sm"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Conteúdo -->
    <div class="p-4">
      <h3 class="text-lg font-bold text-foreground mb-2">
        {{ titulo }}
      </h3>

      <p class="text-sm text-muted-foreground mb-4">
        {{ conteudo }}
      </p>

      <a
        :href="linkGit"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        Ver projeto
        <Icon name="mdi:open-in-new" class="w-4 h-4" />
      </a>
    </div>
  </div>
</template>