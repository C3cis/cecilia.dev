<script setup lang="ts">
defineProps<{
  name: string
  level: number
}>()
</script>

<template>
  <div class="bg-secondary-foreground rounded-2xl p-4">

    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-background-dark">{{ name }}</span>
      <span class="text-sm text-background-dark/60">{{ level }}%</span>
    </div>

    <!-- Trilho da barra -->
    <div class="h-2 w-full rounded-full bg-primary ">
     
      <div
        class="h-full rounded-full bg-muted transition-all duration-500"
        :style="{ width: level + '%' }"
      />
    </div>
  </div>
</template>
