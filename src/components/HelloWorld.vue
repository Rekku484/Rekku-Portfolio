<template>
  <title>Rekku484</title>
  <div id="landing">
    <img src="/src/assets/logo.svg" width="250" height="250" />
    <h1>WORKING IN PROGRESS...</h1>
    <h2>STAY TUNE!</h2>
  </div>
  <div id="plexus"></div>
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
  background: radial-gradient(circle, transparent, rgba(0, 0, 0, 1.5));
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

h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: #f0f8ff;
  font-size: 35px;
  text-align: center;
  text-shadow: #f0f8ff 1px 0px 25px;
}
h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: #f0f8ff;
  font-size: 35px;
  text-align: center;
  text-shadow: #f0f8ff 1px 0px 25px;
}
</style>
