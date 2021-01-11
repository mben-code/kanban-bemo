<template>
  <div class="list">
    <header class="list__header"></header>
  </div>
</template>

<script>
export default {
  name: 'List',
};
</script>

<style lang="scss">
@import '../../sass/variables';

.list {
  width: $list-width;
  height: calc(100% - #{$gap} - #{$scrollbar-thickness});

  > * {
    background-color: $list-bg-color;
    color: #333;

    padding: 0 $gap;
  }

  &__header {
    line-height: $list-header-height;
    font-size: 16px;
    font-weight: bold;
    border-top-left-radius: $list-border-radius;
    border-top-right-radius: $list-border-radius;
  }

  &__footer {
    line-height: $list-footer-height;
    border-bottom-left-radius: $list-border-radius;
    border-bottom-right-radius: $list-border-radius;
    color: #888;
  }
}
</style>
