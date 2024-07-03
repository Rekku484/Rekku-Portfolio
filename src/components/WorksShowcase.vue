<template>
  <div class="works">
    <h1>2024</h1>
    <a href="https://twitter.com/Rekku484/status/1800932093041770508">
      <img src="/src/assets/arts/2024/yi-small.png" />
    </a>
    <a href="https://twitter.com/Rekku484/status/1766845696659845233">
      <img src="https://pbs.twimg.com/media/GIUYlZkWoAAn8cj?format=jpg&name=4096x4096" />
    </a>
    <a href="https://twitter.com/Rekku484/status/1764926761610182682">
      <img src="https://pbs.twimg.com/media/GH5Hh3MawAA0t2u?format=jpg&name=large" />
    </a>
    <a href="https://twitter.com/Rekku484/status/1760226502640095636">
      <img src="https://pbs.twimg.com/media/GG2UqcwWIAAxd83?format=jpg&name=4096x4096" />
    </a>
    <a href="https://twitter.com/Rekku484/status/1753069854964482529">
      <img src="https://pbs.twimg.com/media/GFQnmUkbQAAM5nr?format=jpg&name=4096x4096" />
    </a>
    <a href="https://twitter.com/Rekku484/status/1752200361765720104">
      <img src="https://pbs.twimg.com/media/GFEQ7sPasAAShRk?format=jpg&name=large" />
    </a>
    <a href="https://twitter.com/Rekku484/status/1745465400811495446">
      <img src="/src/assets/arts/2024/diego-rafa.png" />
    </a>

    <h1>2023</h1>
    <a href="https://twitter.com/Rekku484/status/1738201333713514616">
      <img src="/src/assets/arts/2023/5p-rot.png" />
    </a>
    <a href="https://twitter.com/Rekku484/status/1736001915744641203">
      <img src="https://pbs.twimg.com/media/GBeD-ipbIAAgKEr?format=jpg&name=4096x4096" />
    </a>
    <a href="https://twitter.com/Rekku484/status/1734230877969031608">
      <img src="/src/assets/arts/2023/exit-8.png" />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WorksShowcase'
}
</script>

<style scoped>
.works {
  display: flex;
  align-items: center;
}

.works img {
  margin: 0.5%;
  height: 250px;
  width: auto;
  object-fit: cover;
  border-radius: 20px;
}

img {
  align-items: center;
  justify-content: center;
  transition:
    transform 0.5s,
    filter 0.5s;
}

img:hover {
  transform: scale(1.03);
  filter: drop-shadow(#86dbfd 0px 0px 10px);
}

a {
  margin: 1%;
}

h1 {
  text-align: center;
}
</style>
