<template>
  <div id="whole-screen">
    <div id="logo">
      <img src="/src/assets/logo.svg" width="250" height="250" />
    </div>
    <div class="navi" id="artworks">
      <router-link to="/works"><h2>Works</h2></router-link>
      <div class="bg-img">
        <img src="https://pbs.twimg.com/media/GP4x_RaagAAta25?format=jpg&name=4096x4096" />
      </div>
    </div>

    <div class="navi" id="github">
      <a href="https://github.com/Rekku484/Rekku-Portfolio" target="_blank"><h2>Github</h2></a>
      <div class="bg-img">
        <img src="https://pbs.twimg.com/media/F9mOkB8bIAAy4jL?format=jpg&name=4096x4096" />
      </div>
    </div>

    <div class="navi" id="characters">
      <router-link to="/chars"><h2>Characters</h2></router-link>
      <div class="bg-img">
        <img src="https://pbs.twimg.com/media/F8XtmvNa0AA9GlC?format=jpg&name=large" />
      </div>
    </div>

    <div class="navi" id="credits">
      <router-link to="/credits"><h2>Credits</h2></router-link>
      <div class="bg-img">
        <img src="https://pbs.twimg.com/media/GTWYCxTaEAAMKxH?format=jpg&name=large" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#whole-screen {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-content: center;
}

h1,
h2 {
  text-align: left;
  font-weight: 450;
}

#logo {
  margin-left: 22%;
}

.navi {
  display: flex;
  flex-direction: row;
  margin-left: 25%;
  margin-right: 75%;
  margin-bottom: -25px;
  transition:
    text-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    text-decoration 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.navi:hover {
  text-shadow: 0px 0px 10px #f0f8ff;
  text-decoration: underline;
}

.bg-img img {
  z-index: -1;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  filter: opacity(0);
  transition: filter 0.3s;
}

#artworks:hover .bg-img img,
#github:hover .bg-img img,
#characters:hover .bg-img img,
#credits:hover .bg-img img {
  filter: opacity(0.3);
}

img {
  filter: drop-shadow(#f0f8ff 0px 0px 30px);
}
</style>

<!-- BACKUP -->

<!-- <template>
  <title>Rekku484</title>
  <div id="landing">
    <img src="/src/assets/logo.svg" width="250" height="250" />
    <h1>WORKING IN PROGRESS...</h1>
    <h2>STAY TUNE!</h2>
    <h3>
      while this website is working in progress, you can check the other parts of the website
      here<br /><a
        ><router-link to="/works">Works</router-link><br /><router-link to="/credits"
          >Credits</router-link
        ></a
      ><br /><a href="https://github.com/Rekku484/Rekku-Portfolio">Github</a><br /><router-link
        to="/chars"
        >Characters</router-link
      >
    </h3>
  </div>
</template>

<style scoped>
#landing {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

#landing {
  min-height: 100%;
  background: radial-gradient(circle, transparent, rgba (0, 0, 0, 1.5));
  background-size: cover;
}

img {
  filter: drop-shadow(#f0f8ff 0px 0px 30px);
  transition:
    transform 0.5s,
    rotate 0.5s,
    filter 0.5s;
}

img:hover {
  transform: scale(1.1);
  rotate: 1deg;
  filter: drop-shadow(#f0f8ff 0px 0px 45px);
}

body {
  height: 100vh;
  background-color: #04232e;
}

h1,
h2 {
  font-size: 35px;
  text-align: center;
  text-shadow: #f0f8ff 1px 0px 25px;
}

h3 {
  font-size: 25px;
  text-align: center;
  text-shadow: #f0f8ff 1px 0px 25px;
}

a:link {
  color: aliceblue;
}

a:visited {
  color: aliceblue;
}
</style> -->
