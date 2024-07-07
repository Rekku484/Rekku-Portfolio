<template>
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
</style>
