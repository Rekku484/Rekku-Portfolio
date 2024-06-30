<template>
  <header>
    <router-link to="/"><img src="/src/assets/logo.svg" width="350" height="350" /></router-link>
  </header>
  <h1>WORKS</h1>
</template>

<style scoped>
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

h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: #f0f8ff;
  font-size: 50px;
  text-align: center;
  text-shadow: #f0f8ff 1px 0px 75px;
}
</style>
