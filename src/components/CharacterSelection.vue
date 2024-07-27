<template>
  <div class="characters">
    <div id="rafa">
      <a>"RAFA"</a>
      <div id="rafa_img"></div>
      <b>CAT SPIRIT</b>
    </div>

    <div id="rishi"></div>
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
}

a,
b {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 150px;
  color: #62c0ff;
  user-select: none;
  white-space: nowrap;
}

#rafa,
#rishi {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1%;
  overflow: hidden;
  width: 80vh;
  height: 50vh;
  background-color: rgb(3, 11, 16);
  border-radius: 50px;
  transition: background-color 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

#rafa:hover,
#rishi:hover {
  background-color: rgb(9, 40, 60);
}

a {
  z-index: 3;
  position: absolute;
  height: 50vh;
  width: 80vh;
  bottom: 0px;
  left: -50px;
  transition: left 0.7s cubic-bezier(0.87, 0, 0.13, 1);
}

#rafa:hover a {
  left: 10px;
}

b {
  z-index: 1;
  height: 50vh;
  width: 80vh;
  left: 300px;
  position: absolute;
  transition: left 0.7s cubic-bezier(0.87, 0, 0.13, 1);
}
#rafa:hover b {
  left: 150px;
}

#rafa_img {
  z-index: 2;
  display: flex;
  position: relative;
  overflow: hidden;
  width: 80vh;
  height: 50vh;
  background-image: url(/src/assets/characters/rafa.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -25px;
  transition: background-position 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

#rafa:hover #rafa_img {
  background-position-x: -50px;
}

/* #rafa,
#rishi {
  display: flex;
  flex-direction: column;
  filter: grayscale() opacity(0.5);
  overflow: hidden;
  background-color: rgb(3, 11, 16);
  border-radius: 50px;
  margin: 1%;
  width: 80vh;
  height: 50vh;
  transition:
    background-color 0.5s cubic-bezier(0.87, 0, 0.13, 1),
    filter 0.5s cubic-bezier(0.87, 0, 0.13, 1),
    background-position-x 0.5s cubic-bezier(0.87, 0, 0.13, 1);
}

#rafa:hover,
#rishi:hover {
  filter: none;
  background-color: rgb(9, 40, 60);
  background-position-x: -50px;
}

#rafa {
  background-image: url(/src/assets/characters/rafa.png);
  background-position-x: -px;
  background-size: cover;
  background-repeat: no-repeat;
} */
</style>
