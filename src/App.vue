<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'App',
    metaInfo: {
      title: 'Vue ssr',
    },
    components: {
      Header,
    },
  };
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
