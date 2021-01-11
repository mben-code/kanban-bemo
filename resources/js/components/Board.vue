<template>
  <div class="board">
    <div class="board__header">Custom Board</div>
    <div class="board__lists"></div>
  </div>
</template>

<script>

const lists = [
  {
    title: 'bababa',
    cards: [
      {
        title: 'afafaf',
        description: 'sdfasdfasd asdfasd',
      },
      {
        title: 'sdfasdfasf',
        description: 'sdfqwerw afsdfwerqwer',
      },
    ],
  },
  {
    title: 'dasdfasdfasd',
    cards: [
      {
        title: 'awerqef',
        description: 'werdfasdf werqwer',
      },
      {
        title: 'werfsdfqwer',
        description: 'werfs asdfwer'
      },
    ],
  },
];

export default {
  name: 'Board',
};
</script>

<style lang="scss">
@import '../../sass/variables';

.board {
  &__header {
    padding: 10px;
    font-size: 1.1rem;
  }

  &__body {
    display: flex;
    overflow-x: auto;

    > * {
      flex: 0 0 auto;
      margin-left: $gap;
    }

    &::after {
      content: '';
      flex: 0 0 $gap;
    }
  }
}
</style>
