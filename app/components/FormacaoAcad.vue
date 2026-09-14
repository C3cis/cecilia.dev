<script setup lang="ts">
  interface Disciplina {
    nome: string
    nota: number
  }

  defineProps({
    categoria: { type: String, required: true },
    statusLabel: { type: String, required: false, default: '' },
    titulo: { type: String, required: true },
    instituicao: { type: String, required: true },
    dataInicio: { type: String, required: true },
    dataFim: { type: String, required: false, default: '' },
    conteudo: { type: String, required: true },
    disciplinas: { type: Array as PropType<Disciplina[]>, required: true },
  })
</script>

<template>
  <div
    class="rounded-2xl border border-t-5 border-border border-t-primary bg-secondary-foreground p-6 px-9 py-8">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <div class="mb-4 flex gap-3">
          <span
            class="rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground uppercase">
            {{ categoria }}
          </span>
          <span
            v-if="statusLabel"
            class="rounded-full bg-card-foreground px-3 py-1 text-xs font-semibold tracking-wide text-secondary uppercase">
            {{ statusLabel }}
          </span>
        </div>
        <div>
          <h3 class="mb-2 font-serif text-2xl text-black">{{ titulo }}</h3>
          <p class="mb-1 text-muted-foreground italic">{{ instituicao }}</p>
          <p class="mb-4 text-xs text-muted">{{ dataInicio }} — {{ dataFim }}</p>

          <p class="text-sm text-secondary">{{ conteudo }}</p>
        </div>
      </div>

      <div>
        <h4 class="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Disciplinas em destaque
        </h4>

        <div class="flex flex-col gap-4">
          <div v-for="disciplina in disciplinas" :key="disciplina.nome">
            <div class="mb-1 flex items-center justify-between">
              <span class="text-sm font-medium text-primary-foreground italic">{{
                disciplina.nome
              }}</span>
              <span class="text-sm font-semibold text-primary-foreground">{{
                disciplina.nota.toFixed(1)
              }}</span>
            </div>

            <div class="talic h-2 w-full rounded-full bg-primary-medium">
              <div
                class="h-full rounded-full bg-muted-medium transition-all duration-500"
                :style="{ width: (disciplina.nota / 10) * 100 + '%' }" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
