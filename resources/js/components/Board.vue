<template>
  <div class="lists">
    <list v-for="(list, id) in lists" :key="list.title + id" :list="list" />
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
  </div>
</template>

<script>
import List from "./List";
import CustomButton from "./Button";

const lists = [
  {
    title: "bababa",
    list: [
      {
        title: "Lorem ipsum dolor sit amet",
        description: "sdfasdfasd asdfasd",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum",
      },
    ],
  },
  {
    title: "dasdfasdfasd",
    list: [
      {
        title: "awerqef",
        description: "werdfasdf werqwer",
      },
      {
        title: "werfsdfqwer",
        description: "werfs asdfwer",
      },
    ],
  },
];

export default {
  name: "Board",

  components: {
    List,
    CustomButton,
  },

  data: () => ({
    lists,

    isToggleAddList: false,
  }),

  methods: {
    onAddList() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
