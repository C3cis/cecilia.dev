<script setup lang="ts"></script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-background-gradient text-foreground">
    <Navbar />

    <main class="mx-auto max-w-5xl px-6 pt-8 lg:pt-24">
      <slot />
    </main>


    <!-- <Footer /> -->
  </div>
</template>
