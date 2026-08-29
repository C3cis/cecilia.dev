<script setup lang="ts">
defineProps<{
  name: string
  level: number
}>()
</script>

<template>
  <div class="bg-card border border-border rounded-lg p-4">
    <!-- Topo: nome da skill + porcentagem -->
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-foreground">{{ name }}</span>
      <span class="text-sm text-muted-foreground">{{ level }}%</span>
    </div>

    <!-- Trilho da barra (o fundo cinza, sempre 100% de largura) -->
    <div class="h-2 w-full rounded-full bg-muted">
      <!-- Preenchimento: a parte "pintadinha".
           A largura vem do level (ex: 85 -> width: 85%) -->
      <div
        class="h-full rounded-full bg-primary transition-all duration-500"
        :style="{ width: level + '%' }"
      />
    </div>
  </div>
</template>
