<template>
  <footer class="footer">
    <span>
      GAMES provided by -
      <a href="https://rawg.io/apidocs">RAWG best api EU</a>
    </span>
    <span class="ml-2 socials">
      FRONTEND/BACKEND - <span id="nickname">Dimi-Dun-Morogh</span>
      <a href="https://github.com/Dimi-Dun-Morogh">
        <span class="icon-github soc-icons"></span>
      </a>
      <a href="https://t.me/dimibro">
        <span class="icon-telegram soc-icons"></span>
      </a>
      <a href="www.linkedin.com/in/dmytro-vasyliev-2633861b3">
        <span class="icon-linkedin soc-icons"></span>
      </a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
 margin-top: 10px;
  padding: 2px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  border-top: 1px solid #ffffff63;
  font-family: 'Teko', sans-serif;
font-size: 18px;
font-weight: 400;
}
.footer a {
  /* font-size: 10px; */
  text-decoration: underline;
  font-weight: normal;
  color: black;
  color: #fff;
}
.socials a {
  text-decoration: none;
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-left: 10px;
}
.soc-icons {
  font-size: 20px;
  transform: translate(-50%, 15%);
  position: absolute;
}
#nickname {
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  letter-spacing: 0,069em;
}
</style>
