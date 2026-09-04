<script setup lang="ts">
const props = defineProps({
  categoria: { type: String, required: true },
  titulo: { type: String, required: true },
  porcentagem: { type: Number, required: true },
  status: { type: String, default: 'Em andamento' },
})


</script>
<template>
  <div class="bg-card border border-border rounded-2xl p-6 px-5">

    <div class="flex items-start justify-between mb-4">
      <span class="text-[10px] font-semibold uppercase tracking-wide bg-muted text-muted-foreground px-3 py-1 rounded-full">
        {{ categoria }}
      </span>

      <span class="text-3xl font-serif text-primary">
        {{ porcentagem }}%
      </span>
    </div>

    <h3 class="text-sm font-bold text-foreground mb-4">
      {{ titulo }}
    </h3>

    <div class="flex items-center justify-between text-sm text-muted-foreground mb-2">
      <span>Progresso</span>
      <span>{{ status }}</span>
    </div>

    <div class="h-2 w-full rounded-full bg-muted">
      <div
        class="h-full rounded-full bg-primary transition-all duration-500"
        :style="{ width: porcentagem + '%' }"
      />
    </div>
  </div>
</template>