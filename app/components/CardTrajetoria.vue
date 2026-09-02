<script setup lang="ts">
const props = defineProps ({
    categoria: { type: String, required: true },
    atual: { type: Boolean, default: false },
    titulo: {type: String, required: true },
    instituicao: { type: String, required: true },
    conteudo: {type: String, required: true },
    cidade: {type: String, required: true },
    dataInicio: { type: String, required: true },
    dataFim: { type: String, default: 'Presente' },
    tagsLinguagem: { type: Array as PropType<string[]>, required: true },
 })


</script>
    <template>
  <div class="bg-card border border-border  rounded-2xl p-9 relative">
    <div class="flex items-start justify-between mb-2 ">
      <div class="flex gap-2">
        <span class="text-xs font-semibold uppercase tracking-wide bg-primary text-primary-foreground px-3 py-1 rounded-full">
          {{ categoria }}
        </span>
        <span
          v-if="atual"
          class="text-xs font-semibold uppercase tracking-wide bg-muted text-muted-foreground px-3 py-1 rounded-full"
        >
          Atual
        </span>
      </div>

      <div class="text-right">
        <span class="text-sm text-muted-foreground">
          {{ dataInicio }} — {{ dataFim }}
        </span>
        <p class="text-sm text-muted-foreground/70">{{ cidade }}</p>
      </div>
    </div>
    <h3 class="text-2xl font-serif text-foreground mb-1">{{ titulo }}</h3>
    <p class="text-primary font-medium mb-4">{{ instituicao }}</p>
    <p class="text-muted-foreground mb-6 max-w-[95ch]">{{ conteudo }}</p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tagsLinguagem"
        :key="tag"
        class="text-sm bg-muted/50 text-muted-foreground border border-border px-3 py-1 rounded-full"
      >
        {{ tag }}
      </span>
    </div>
  </div>

</template>