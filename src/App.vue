<template>
  <div id="app">
    <div class="container">
      <Head/>
      <Postes/>
      <div class="main">
          <AboutUs/>
          <div class="scroll">
            <Scroll/>
            <ScrollAboutUs/>
          </div>
          <Pages/>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Postes from "./components/Postes.vue";
import AboutUs from "./components/AboutUs.vue";
import Pages from "./components/Pages.vue";
import Scroll from "./components/Scroll.vue";
import ScrollAboutUs from "./components/ScrollAboutUs.vue";






export default {

  name: "App",
  components: {
    Head,
    Postes,
    AboutUs,
    Pages,
    Scroll,
    ScrollAboutUs,
    
  },
};


</script>

<style>
* {

margin: 0;
padding: 0;
box-sizing: border-box;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #0A0A0A;
  width: 100%;
  }

.container {
  width: 1728px;
  height: 100%;
  border-right-style: dashed;
  border-color: #504C4C;
  margin: 0 96px;
  
}

.main {
  display: flex;
  justify-content: space-between;
}

.scroll {
  overflow-y: scroll;
  height: 850px;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;

}

.scroll::-webkit-scrollbar {
    display: none;
}

</style>


<img alt="Vue logo" src="./assets/logo.png" />