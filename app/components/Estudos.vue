<script setup lang="ts">
  const props = defineProps({
    categoria: { type: String, required: true },
    titulo: { type: String, required: true },
    porcentagem: { type: Number, required: true },
    status: { type: String, default: 'Em andamento' },
  })
</script>
<template>
  <div class="rounded-2xl border border-border bg-card p-6 px-5">
    <div class="mb-4 flex items-start justify-between">
      <span
        class="rounded-full bg-muted px-3 py-1 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
        {{ categoria }}
      </span>

      <span class="font-serif text-3xl text-primary"> {{ porcentagem }}% </span>
    </div>

    <h3 class="mb-4 text-sm font-bold text-foreground">
      {{ titulo }}
    </h3>

    <div class="mb-2 flex items-center justify-between text-sm text-muted-foreground">
      <span>Progresso</span>
      <span>{{ status }}</span>
    </div>

    <div class="h-2 w-full rounded-full bg-muted">
      <div
        class="h-full rounded-full bg-primary transition-all duration-500"
        :style="{ width: porcentagem + '%' }" />
    </div>
  </div>
</template>
