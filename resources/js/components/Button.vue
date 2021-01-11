<template>
  <button type="button" class="btn">
    <span class="btn__content">
      <font-icon
        v-if="icon"
        :icon="icon"
        :class="{ 'icon--left': hasDefaultSlot }"
        class="icon"
      />
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: "CustomButton",

  props: ["icon"],

  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.btn {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  background-color: inherit;
  height: 24px;
  color: $button-color;

  &:hover {
    color: $button-hover-color;
    background-color: $button-hover-bg-color;
  }

  &__content {
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
  }
}

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  vertical-align: middle;

  &--left {
    margin-left: -4px;
    margin-right: 8px;
  }
}
</style>
