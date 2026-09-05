<script setup lang="ts">
  defineProps({
    name: { type: String, required: true },
    level: { type: Number, required: true },
  })
</script>

<template>
  <div class="rounded-2xl bg-secondary-foreground p-4">
    <div class="mb-2 flex items-center justify-between">
      <span class="text-sm font-medium text-background-dark">{{ name }}</span>
      <span class="text-sm text-background-dark/60">{{ level }}%</span>
    </div>

    <!-- Trilho da barra -->
    <div class="h-2 w-full rounded-full bg-primary">
      <div
        class="h-full rounded-full bg-muted transition-all duration-500"
        :style="{ width: level + '%' }" />
    </div>
  </div>
</template>
