<template>
  <b
    ><router-link to="/"><img src="/src/assets/logo.svg" /></router-link
  ></b>
  <h1>Credits</h1>
  <h2>Many thanks to the people who have helped me build this website!</h2>
  <div id="credits">
    <div id="masaru">
      <div id="masaru-avatar">
        <img src="https://avatars.githubusercontent.com/u/75265021?v=4" />
      </div>
      <div id="masaru-info">
        <a href="https://github.com/masaru9002">Masaru</a><br />
        <p>for fixing most of the problems I encounter</p>
      </div>
    </div>

    <div id="asc">
      <div id="asc-avatar">
        <img src="https://avatars.githubusercontent.com/u/59214813?v=4" />
      </div>
      <div id="asc-info">
        <a href="https://github.com/ascdragonite">ascdragonite</a><br />
        <p>for emotional support (no)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: aliceblue;
  font-size: 25px;
  text-align: center;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: aliceblue;
  font-size: 25px;
  text-align: center;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  color: aliceblue;
  font-size: 25px;
  text-align: center;
}

a {
  font-size: 40px;
}

a:link {
  color: aliceblue;
}

a:visited {
  color: aliceblue;
}

b {
  display: flex;
  align-self: center;
  justify-content: center;
}

img {
  max-width: 100%;
  border-radius: 100px;
  width: 150px;
}

#credits {
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
}

#masaru {
  align-self: center;
  justify-content: center;
  display: flexbox;
  margin-right: 50px;
}

#masaru-avatar {
  display: flex;
  align-self: center;
  justify-content: center;
}

#masaru-info {
  font-family: Arial, Helvetica, sans-serif;
  color: aliceblue;
  text-align: center;
}

#asc-avatar {
  align-self: center;
  justify-content: center;
  display: flex;
}

#asc-info {
  font-family: Arial, Helvetica, sans-serif;
  color: aliceblue;
  text-align: center;
}
</style>
