<template>
  <b
    ><router-link to="/"><img src="/src/assets/logo.svg" /></router-link
  ></b>
  <h1>Credits</h1>
  <h2>
    This is actually the first time I touched coding, with 0 knowledge beforehand<br />I would like
    to thank these people for helping me create this website!
  </h2>
  <div id="credits">
    <div id="column1">
      <div id="masaru">
        <div class="avatar">
          <a href="https://github.com/masaru9002"
            ><img src="https://avatars.githubusercontent.com/u/75265021?v=4"
          /></a>
        </div>
        <div class="info">
          <a href="https://github.com/masaru9002">Masaru</a><br />
          <p>Bug Fixing<br />Guiding me through vue</p>
        </div>
      </div>

      <div id="volt">
        <div class="avatar">
          <a href="https://github.com/VoltSeven"
            ><img src="https://avatars.githubusercontent.com/u/108687132?v=4"
          /></a>
        </div>
        <div class="info">
          <a href="https://github.com/VoltSeven">Volt7</a><br />
          <p>for emotional support (no)</p>
        </div>
      </div>
    </div>

    <div id="column2">
      <div id="asc">
        <div class="avatar">
          <a href="https://github.com/ascdragonite"
            ><img src="https://avatars.githubusercontent.com/u/59214813?v=4"
          /></a>
        </div>
        <div class="info">
          <a href="https://github.com/ascdragonite">ascdragonite</a><br />
          <p>Bug Fixing</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 25px;
  text-align: center;
}

h2 {
  font-size: 25px;
  text-align: center;
}

h3 {
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

img {
  filter: drop-shadow(#f0f8ff 0px 0px -1px);
  transition: filter 0.3s;
}

img:hover {
  filter: drop-shadow(#f0f8ff 0px 0px 10px);
}

#credits {
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
}

#column1 {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 20%;
}

#column2 {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 20%;
}

.avatar {
  display: flex;
  align-self: center;
  justify-content: center;
}

.info {
  font-family: Arial, Helvetica, sans-serif;
  color: aliceblue;
  text-align: center;
}

#masaru {
  align-self: center;
  justify-content: center;
  display: flexbox;
  /* margin-right: 50px; */
}

#asc {
  align-self: center;
  justify-content: center;
  display: flexbox;
  /* margin-right: 50px; */
}

#volt {
  align-self: center;
  justify-content: center;
  display: flexbox;
  /* margin-right: 50px; */
}
</style>
