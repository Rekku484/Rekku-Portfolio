<template>
  <div class="char">
    <div class="showcase">
      <div id="rafa">
        <a>"RAFA"</a>
        <div id="rafa_img"></div>
        <b>CAT SPIRIT</b>
      </div>
    </div>
    <div class="showcase">
      <div id="rishi"><a>"RISHI"</a><b>SLUGCAT</b></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CharacterShowcase'
}
</script>

<style scoped>
.char {
  display: flex;
  justify-content: center;
}

.showcase {
  position: relative;
  width: 80vh;
  height: 50vh;
  margin: 1%;
}

#rafa,
#rishi {
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgb(3, 11, 16);
  border-radius: 50px;
  transition: background-color 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

#rafa:hover,
#rishi:hover {
  background-color: rgb(9, 40, 60);
}

a,
b {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 150px;
  filter: blur(2px) brightness(0.5) grayscale();
  color: #62c0ff;
  user-select: none;
  white-space: nowrap;
}

a {
  z-index: 3;
  position: absolute;
  bottom: -25px;
  left: -50px;
  transition:
    left 0.7s cubic-bezier(0.87, 0, 0.13, 1),
    filter 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

#rafa:hover a,
#rishi:hover a {
  left: 10px;
  filter: none;
}

#rafa_img {
  z-index: 2;
  position: relative;
  filter: grayscale() brightness(0.5) blur(2px);
  overflow: hidden;
  width: 80vh;
  height: 50vh;
  background-image: url(/src/assets/characters/rafa.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -25px;
  transition:
    background-position 0.5s cubic-bezier(0.87, 0, 0.13, 1),
    filter 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

#rafa:hover #rafa_img {
  filter: none;
  background-position-x: -50px;
}

b {
  z-index: 1;
  top: -25px;
  left: 300px;
  position: absolute;
  transition:
    left 0.7s cubic-bezier(0.87, 0, 0.13, 1),
    filter 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}
#rafa:hover b,
#rishi:hover b {
  filter: none;
  left: 150px;
}
</style>
