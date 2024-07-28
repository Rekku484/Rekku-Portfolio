<template>
  <div class="characterContainer">
    <div class="character">
      <div class="ocs" id="rafa">
        <div class="top-text"><a>CAT SPIRIT</a></div>
        <div class="image" id="rafa_img"></div>
        <div class="bottom-text"><b>"RAFA"</b></div>
      </div>
    </div>
    <div class="character">
      <div class="ocs" id="rishi">
        <div class="top-text"><a>SLUGCAT</a></div>
        <div class="image" id="rishi_img"></div>
        <div class="bottom-text"><b>"RISHI"</b></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CharacterShowcase'
}
</script>

<style scoped>
.characterContainer {
  display: flex;
  justify-content: center;
}

.character {
  position: relative;
  width: 80vh;
  height: 50vh;
  margin: 1%;
}

.ocs {
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

.ocs:hover {
  background-color: rgb(9, 40, 60);
}

.top-text,
.bottom-text {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 150px;
  filter: blur(2px) brightness(0.5) grayscale();
  color: #62c0ff;
  user-select: none;
  white-space: nowrap;
  transition: filter 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

/* top layer */

.top-text {
  z-index: 1;
  position: absolute;
  top: -25px;
  left: 300px;
  position: absolute;
  transition:
    left 0.7s cubic-bezier(0.87, 0, 0.13, 1),
    filter 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

.ocs:hover .top-text {
  left: 10px;
  filter: none;
}

/* middle layer */

.image {
  z-index: 2;
  position: relative;
  filter: grayscale() brightness(0.5) blur(2px);
  overflow: hidden;
  width: 80vh;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -25px;
  transition:
    background-position 0.5s cubic-bezier(0.87, 0, 0.13, 1),
    filter 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

.ocs:hover .image {
  filter: none;
  background-position-x: -50px;
}

#rafa_img {
  background-image: url(/src/assets/characters/rafa.png);
}

#rishi_img {
  background-image: url(/src/assets/characters/rishi_placeholder.png);
  background-size: auto 155%;
  background-position-x: 250px;
}

.ocs:hover #rishi_img {
  background-position-x: 200px;
}

/* bottom layer */

.bottom-text {
  z-index: 3;
  bottom: -25px;
  left: -50px;
  position: absolute;
  transition:
    left 0.7s cubic-bezier(0.87, 0, 0.13, 1),
    filter 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

.ocs:hover .bottom-text {
  left: 10px;
  filter: none;
}
</style>
