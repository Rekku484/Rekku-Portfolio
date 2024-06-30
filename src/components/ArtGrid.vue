<template>
  <div id="grid">
    <div id="rows">
      <img src="/src/assets/arts/yi-small.png" />
    </div>
  </div>
</template>

<style scoped>
:root {
  --gap: 1rem;
  --card-width: clamp(280px, 20vw, 100vw);
  --card-aspect-ratio: 5 / 7;
  --card-height: calc(var(--card-width) * (7 / 5));
}

body {
  height: 100vh;
  background-color: #04232e;
}

body {
  display: grid;
  place-items: center;
  font-family: Arial, Helvetica, sans-serif;
  overflow-y: hidden;
  justify-content: center;
  min-height: 100vh;
}

#grid {
  display: grid;
  justify-content: center;
  grid-template-rows: 5;
  gap: 1rem;
  overflow: hidden;
}

#row {
  display: grid;
  gap: 1rem;
  align-content: center;
}

#row:is(:nth-of-type(odd)) {
  animation: linear;
  animation-timeline: left;
}

#row:is(:nth-child(even)) {
  animation-timeline: right;
}
</style>
