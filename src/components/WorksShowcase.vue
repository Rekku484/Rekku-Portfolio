<template>
  <div class="arts">
    <!-- 2024-yi-->
    <a href="https://x.com/Rekku484/status/1800932093041770508"
      ><img src="https://pbs.twimg.com/media/GP4x_RaagAAta25?format=jpg&name=4096x4096"
    /></a>
    <!-- 2024-ori-->
    <a href="https://x.com/Rekku484/status/1760226502640095636"
      ><img src="https://pbs.twimg.com/media/GG2UqcwWIAAxd83?format=jpg&name=4096x4096"
    /></a>
    <!--2024-paraba-raffle-->
    <a href="https://x.com/Rekku484/status/1748607444455153721"
      ><img src="https://pbs.twimg.com/media/GERNAfXaMAAOPnr?format=jpg&name=4096x4096"
    /></a>
    <!--2024-gabespirit-raffle-->
    <a href="https://x.com/Rekku484/status/1745811288943731051"
      ><img src="https://pbs.twimg.com/media/GDpeF3FaMAAAu-u?format=jpg&name=4096x4096"
    /></a>
    <!--2024-diego-rafa-commission-->
    <a href="https://x.com/Rekku484/status/1745465400811495446"
      ><img src="https://pbs.twimg.com/media/GDkjdvWbkAAhPjl?format=jpg&name=4096x4096"
    /></a>
    <!--2024-safi-raffle-->
    <a href="https://x.com/Rekku484/status/1741489405104386292"
      ><img src="https://pbs.twimg.com/media/GCsBaCGbUAAOk-8?format=jpg&name=4096x4096"
    /></a>
    <!--2023-robertspirit-raffle-->
    <a href="https://x.com/Rekku484/status/1739377313018691897"
      ><img src="https://pbs.twimg.com/media/GCOAZYSa4AEuass?format=jpg&name=4096x4096"
    /></a>
    <!--2023-fivepebbles-rotting-->
    <a href="https://x.com/Rekku484/status/1738201333713514616"
      ><img src="https://pbs.twimg.com/media/GB9U4ssbMAEIOIA?format=jpg&name=4096x4096"
    /></a>
    <!--2023-ori-bluearchive-->
    <a href="https://x.com/Rekku484/status/1736001915744641203"
      ><img src="https://pbs.twimg.com/media/GBeD-ipbIAAgKEr?format=jpg&name=4096x4096"
    /></a>
    <!--2023-yanara-commission-->
    <a href="https://x.com/Rekku484/status/1729197910267736235"
      ><img src="https://pbs.twimg.com/media/F_9YVb4aoAA8YIs?format=jpg&name=large"
    /></a>
    <!--2023-espeon-art-->
    <a href="https://x.com/Rekku484/status/1727015511706501209"
      ><img src="https://pbs.twimg.com/media/F_eXZScakAAYF79?format=jpg&name=4096x4096"
    /></a>
    <!--2023-rainworld-artificer-alea.jacta.est.-->
    <a href="https://x.com/Rekku484/status/1720860832207393130"
      ><img src="https://pbs.twimg.com/media/F-G5m6TasAAe5tV?format=jpg&name=4096x4096"
    /></a>
    <!--2023-big-project-->
    <a href="https://www.youtube.com/watch?v=k8eajOqY6mg"
      ><img src="https://pbs.twimg.com/media/F4vpQ3Ta0AArolO?format=jpg&name=large"
    /></a>
    <!--2023-rafa-couch-->
    <a href="https://x.com/Rekku484/status/1710983821460693060"
      ><img src="https://pbs.twimg.com/media/F76itSDbMAABsre?format=jpg&name=4096x4096"
    /></a>
    <!--2023-melusine-->
    <a href="https://x.com/Rekku484/status/1705918784559808560"
      ><img src="https://pbs.twimg.com/media/F6ykCSRbAAAQCQP?format=jpg&name=4096x4096"
    /></a>
    <!--2023-fivepebbles-destoryed-->
    <a href="https://x.com/Rekku484/status/1619569996417597440"
      ><img src="https://pbs.twimg.com/media/FnndxbBagAAX4Sh?format=jpg&name=4096x4096"
    /></a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WorksShowcase',
  methods: {
    randomWidth() {
      return Math.floor(Math.random() * (5 - 2 + 1)) + 2 + '%'
    }
  }
}
</script>

<style scoped>
.arts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
}

img {
  height: 275px;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, filter;
}

img:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  -webkit-filter: drop-shadow(#86dbfd 0px 0px 10px);
  filter: drop-shadow(#86dbfd 0px 0px 10px);
}
</style>
