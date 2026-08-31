<script setup lang="ts">
defineProps<{
  name: string
  level: number
}>()
</script>

<template>
  <div class="bg-card border border-border rounded-lg p-4">

    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-foreground">{{ name }}</span>
      <span class="text-sm text-muted-foreground">{{ level }}%</span>
    </div>

    <!-- Trilho da barra -->
    <div class="h-2 w-full rounded-full bg-muted">
     
      <div
        class="h-full rounded-full bg-primary transition-all duration-500"
        :style="{ width: level + '%' }"
      />
    </div>
  </div>
</template>
