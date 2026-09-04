<script setup lang="ts">
interface Disciplina {
  nome: string
  nota: number 
}

const props = defineProps<{
  categoria: string          
  statusLabel?: string       
  titulo: string           
  instituicao: string        
  dataInicio: string        
  dataFim?: string          
  conteudo: string
  disciplinas: Disciplina[]
}>()
</script>

<template>
  <div class="bg-secondary-foreground border-t-5 border-t-primary border border-border rounded-2xl p-6 px-9 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
        <div class="flex gap-3 mb-4">
          <span class="text-xs font-semibold uppercase tracking-wide bg-primary text-primary-foreground px-3 py-1 rounded-full">
            {{ categoria }}
          </span>
          <span
            v-if="statusLabel"
            class="text-xs font-semibold uppercase tracking-wide bg-card-foreground text-secondary px-3 py-1 rounded-full"
          >
            {{ statusLabel }}
          </span>
        </div>
        <div>
        <h3 class="text-2xl font-serif text-black mb-2">{{ titulo }}</h3>
        <p class="text-muted-foreground mb-1 italic">{{ instituicao }}</p>
        <p class="text-muted mb-4 text-xs ">{{ dataInicio }} — {{ dataFim }}</p>

        <p class="text-secondary text-sm">{{ conteudo }}</p>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
          Disciplinas em destaque
        </h4>

        <div class="flex flex-col gap-4">
          <div v-for="disciplina in disciplinas" :key="disciplina.nome">
            <div class="flex items-center justify-between mb-1">
              <span class="text-primary-foreground font-medium text-sm italic">{{ disciplina.nome }}</span>
              <span class="text-sm font-semibold text-primary-foreground">{{ disciplina.nota.toFixed(1) }}</span>
            </div>

            <div class="h-2 w-full rounded-full bg-muted italic">
              <div
                class="h-full rounded-full bg-primary transition-all duration-500"
                :style="{ width: (disciplina.nota / 10) * 100 + '%' }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>