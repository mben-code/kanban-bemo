<template>
  <draggable
    :list="lists"
    :animation="200"
    tag="div"
    class="lists"
    draggable=".draggable-item"
    ghost-class="ghost-class"
  >
    <list
      v-for="(list, id) in lists"
      :key="list.title + id"
      :list="list"
      class="draggable-item"
    />

    <div class="list">
      <div
        v-if="!isToggleAddList"
        class="list--composer"
        @click="isToggleAddList = true"
      >
        <font-icon icon="plus" />
        Add another list
      </div>
      <form
        v-if="isToggleAddList"
        class="list--compose-form"
        @submit.prevent="onAddList"
      >
        <input
          type="text"
          class="list--compose-form__name-input"
          placeholder="Enter list title..."
        />
        <div class="list--compose-form__controls">
          <input type="submit" class="clr-btn" value="Add List" />
          <custom-button icon="times" @click.native="isToggleAddList = false" />
        </div>
      </form>
    </div>
  </draggable>
</template>

<script>
import { mapGetters } from "vuex";
import List from "./List";
import CustomButton from "./Button";
import draggable from "vuedraggable";

export default {
  name: "Board",

  components: {
    List,
    CustomButton,
    draggable,
  },

  data: () => ({
    isToggleAddList: false,
  }),

  computed: {
    ...mapGetters(["lists"]),
  },

  methods: {
    onAddList() {},
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.ghost-class {
  opacity: 0.7;
  background-color: $ghost-bg-color;
  color: $ghost-bg-color;
}
</style>
