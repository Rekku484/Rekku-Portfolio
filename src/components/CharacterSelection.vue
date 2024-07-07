<template>
  <div class="characters">
    <div id="rafa_img_hover"></div>
    <div id="rishi_img_hover"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CharacterShowcase'
}
</script>

<style scoped>
.characters {
  display: flex;
  justify-content: center;
  align-items: center;
}

#rafa_img_hover {
  background-image: url(../assets/characters/r_placeholder.png);
  height: 500px;
  width: 500px;
  background-size: cover;
  transition:
    filter 0.5s,
    background-image 0.5s;
}

#rafa_img_hover:hover {
  background-image: url(../assets/characters/r_placeholder_hover.png);
  filter: drop-shadow(#f3f3f3 0px 0px 10px);
}
</style>
