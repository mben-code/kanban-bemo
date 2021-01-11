<template>
  <div class="app">
    <div class="app__bar">Kanban</div>
    <Board class="app__board" />
  </div>
</template>

<script>
import Board from './components/Board';

export default {
  name: 'App',

  components: {
    Board,
  },
};
</script>

<style lang="scss">
@import '../sass/variables';

.app {
  height: 100vh;
  
  background-color: $board-bg-color;
  color: #EEE;

  &__bar {
    padding: 20px;
    text-align: center;
    background-color: $appbar-bg-color;
    font-size: 2.5rem;
  }

  &__board {

  }
}
</style>
