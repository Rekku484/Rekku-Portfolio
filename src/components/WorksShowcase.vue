<template>
  <div class="bento-grid-imgs">
    <div class="works-imgs">
      <a href="https://twitter.com/Rekku484/status/1800932093041770508"><img src="/src/assets/arts/1.jpeg"></a>
    </div>
    <div class="works-imgs">
      <a href="https://twitter.com/Rekku484/status/1770064835184636399"><img src="/src/assets/arts/2.jpeg"></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WorksShowcase'
}
</script>

<style scoped>
.bento-grid-imgs {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bento-grid-imgs img {
  height: 250px;
  width: auto;
  object-fit: cover;
  border-radius: 20px;
}

img {
  align-items: center;
  justify-content: center;
  transition:
    transform 0.5s,
    filter 0.5s;
}

img:hover {
  transform: scale(1.02);
  filter: drop-shadow(#86dbfd 0px 0px 10px);
}

a {
  margin: 1%;
}

h1 {
  text-align: center;
}
</style>
