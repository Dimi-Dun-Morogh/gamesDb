<template>
  <div id="app">
<div id="background"></div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0.2);
}
body {
 background-image: url('./assets/wallpaper.jpg');
 background-size: cover;
}
</style>
