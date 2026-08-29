<script setup lang="ts"></script>

<template>
  <div class="relative min-h-screen bg-background text-foreground">
    <Navbar />

    <main class="mx-auto max-w-5xl px-6 pt-24">
      <slot />
    </main>

    <!-- Quando o Footer estiver pronto, é só descomentar: -->
    <!-- <Footer /> -->
  </div>
</template>
