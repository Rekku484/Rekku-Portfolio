<template>
  <div class="characterContainer">
    <div id="charSelection">
      <div class="character" @click="charDetail">
        <div class="ocs" id="rafa"><img src="/src/assets/Char_Selection.svg" /></div>
      </div>
      <div class="character" @click="charDetail">
        <div class="ocs" id="rishi"><img src="/src/assets/Char_Selection.svg" /></div>
      </div>
      <div class="character" @click="charDetail">
        <div class="ocs" id="unnamed-solarian"><img src="/src/assets/Char_Selection.svg" /></div>
      </div>
      <div class="dum"></div>
    </div>
    <div class="charContDetails">
      <div class="charNameSpecies">
        <div class="charDE" id="rafaDE">
          <h1>Rafa<br />Cat Spirit</h1>
        </div>
        <div class="charDE" id="rishiDE">
          <h1>Rishi<br />Slugcat</h1>
        </div>
        <div class="charDE" id="unnamed-solarianDE">
          <h1>NO_DATA<br />Solarian</h1>
        </div>
      </div>
      <div class="charDisc"></div>
    </div>
  </div>
</template>

<script lang="ts">
import gsap from 'gsap'
export default {
  name: 'CharacterShowcase',
  methods: {
    charDetail() {
      gsap.to('#charSelection', {
        scale: 0.4,
        duration: 0.5,
        ease: 'power4.out',
        xPercent: -25,
        yPercent: -35
        // x: '-25rem',
        // y: '-25vh'
      })

      // gsap.to('.second-btn', {
      //   scale: 0.4,
      //   duration: 0.5,
      //   ease: 'power4.out',
      //   xPercent: -48,
      //   x: '-25vw',
      //   y: '-25vh'
      // })
      // gsap.to('.third-btn', {
      //   scale: 0.4,
      //   duration: 0.5,
      //   ease: 'power4.out',
      //   xPercent: -96,
      //   x: '-25vw',
      //   y: '-25vh'
      // })
      let sex = document.getElementsByClassName('dum') as HTMLCollectionOf<HTMLElement>
      if (sex.length != 0) {
        sex[0].style.setProperty('flex', 'auto')
      }
    }
  }
}
</script>

<style scoped>
.characterContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 80vh;
  margin: 1rem;
}

#charSelection {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.dum {
  flex: 0;
  transition: flex 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

#charSelection {
  flex: auto;
}

.character {
  /* display: flex;
  align-content: center;
  flex-direction: column; */
  margin: -2rem;
  background-repeat: no-repeat;
  background-image: url(/src/assets/Char_Selection.svg);
  filter: drop-shadow(#f0f8ff 0px 0px 0px) brightness(0.75);
  transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.character:hover {
  filter: drop-shadow(#f0f8ff 0px 0px 25px) brightness(1);
}

.ocs {
  mask-image: url(/src/assets/Char_Selection.svg);
  mask-repeat: no-repeat;
  background-color: #dcdcdc;
}

#rafa {
  background-image: url(/src/assets/characters/rafa/rafa.png);
  background-position: 85%;
  background-size: auto 130%;
  cursor: pointer;
}

#rishi {
  background-image: url(/src/assets/characters/rishi/rishi_placeholder.png);
  background-position: 150% 0%;
  background-size: auto 150%;
  cursor: pointer;
}

#unnamed-solarian {
  background-image: url(https://pbs.twimg.com/media/GQNnBJra4AAOVnT?format=jpg&name=900x900);
  background-position: 20% 0%;
  background-size: auto 120%;
  cursor: pointer;
}

img {
  filter: opacity(0);
}

/* .charContDetails {
  display: flex;
  position: absolute;
} */

.charNameSpecies {
  position: absolute;
  top: 19rem;
  left: 4.9rem;
}

.charDE {
  position: absolute;
}

/* #rafaDE, */
#rishiDE,
#unnamed-solarianDE {
  filter: opacity(0);
}

#rafa:hover #rafaDE {
  filter: opacity(1);
}

h1 {
  font-size: 45px;
  font-weight: 450;
  text-wrap: nowrap;
}
</style>

<!-- <style scoped>
.characterContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.character {
  position: relative;
  width: 25vh;
  height: 40vh;
  margin: 1%;
}

.ocs {
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #dcdcdc;
  border-radius: 50px;
  transform: skew(-15deg);
  filter: drop-shadow(#f0f8ff 0px 0px 0px) brightness(0.75);
  transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.ocs:hover {
  filter: drop-shadow(#f0f8ff 0px 0px 25px) brightness(1);
}

.image {
  position: relative;
  width: 50vh;
  height: 40vh;
  transform: skew(15deg);
  background-repeat: no-repeat;
}

#rafa_img {
  background-image: url(/src/assets/characters/rafa/rafa.png);
  background-position: 120%;
  background-size: auto 130%;
}

#rishi_img {
  background-image: url(/src/assets/characters/rishi/rishi_placeholder.png);
  background-size: auto 150%;
}
</style> -->

<!-- <template>
  <div class="popup">
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
  transition:
    background-color 0.5s cubic-bezier(0.87, 0, 0.13, 1),
    height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
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
  background-image: url(/src/assets/characters/rafa/rafa.png);
}

#rishi_img {
  background-image: url(/src/assets/characters/rishi/rishi_placeholder.png);
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
</style> -->
