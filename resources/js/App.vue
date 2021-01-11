<template>
  <div class="app">
    <div class="app__bar">Kanban</div>
    <div class="app__board">
      <board />
    </div>
  </div>
</template>

<script>
import Board from "./components/Board";

export default {
  name: "App",

  components: {
    Board,
  },
};
</script>

<style lang="scss" scoped>
</style>
