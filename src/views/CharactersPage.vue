<template>
  <header>
    <router-link to="/"><img src="/src/assets/logo.svg" width="250" height="250" /></router-link>
  </header>
  <h1>Characters</h1>
  <body>
    <CharacterShowcase />
  </body>
</template>

<script setup lang="ts">
import CharacterShowcase from '../components/CharacterSelection.vue'
</script>

<style scoped>
h1 {
  text-align: center;
}

header {
  display: flex;
  justify-content: center;
  align-self: center;
}

img {
  filter: drop-shadow(#f0f8ff 0px 0px 90px);
  transition:
    transform 0.5s,
    rotate 0.5s,
    filter 0.5s;
}

img:hover {
  transform: scale(1.1);
  rotate: 1deg;
  filter: drop-shadow(#f0f8ff 0px 0px 110px);
}
</style>
