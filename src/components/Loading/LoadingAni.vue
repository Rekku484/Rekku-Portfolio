<template>
  <img src="/src/assets/logo.svg" />
</template>

<style scoped>
@keyframes fade {
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
img {
  animation: fade 2s infinite;
}
</style>
