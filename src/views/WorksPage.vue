<template>
  <header>
    <router-link to="/"><img src="/src/assets/logo.svg" width="350" height="350" /></router-link>
  </header>
  <h1>WORKS</h1>
  <body>
    <Suspense>
      <Works />
      <template #fallback>
        <LoadingAni />
      </template>
    </Suspense>
  </body>
  <footer>
    <a href="https://github.com/Rekku484/Rekku-Portfolio">Made with ♥, Deployed using Vercel</a
    ><br /><router-link to="/credits">Credits</router-link>
  </footer>
</template>

<script setup lang="ts">
import LoadingAni from '@/components/Loading/LoadingAni.vue'
import Works from '../components/WorksShowcase.vue'
</script>

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
  font-size: 50px;
  text-align: center;
  text-shadow: #f0f8ff 1px 0px 75px;
}

footer {
  font-size: 15px;
  text-align: center;
  text-decoration: none;
}

a:link {
  color: aliceblue;
}

a:visited {
  color: aliceblue;
}
</style>
