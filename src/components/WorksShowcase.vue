<template>
  <div class="bento-grid-imgs">
    <h1>REWORKING THE WHOLE GALLERY...</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WorksShowcase'
}
</script>

<style scoped>
.bento-grid-imgs {
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.bento-grid-imgs img {
  margin: 0.5%;
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

.work-imgs {
  margin: 1%;
}

h1 {
  text-align: center;
}
</style>
