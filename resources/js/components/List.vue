<template>
  <div class="list">
    <header class="list__header header">
      <div class="header__title">{{ list.title }}</div>
      <div class="header__action">
        <custom-button icon="trash-alt" />
      </div>
    </header>

    <draggable
      :list="list.list"
      :animation="200"
      group="board"
      tag="ul"
      ghost-class="ghost-class"
    >
      <card
        v-for="(card, id) in list.list"
        :key="card.title + id"
        :card="card"
      />
    </draggable>

    <footer class="list__footer">
      <custom-button
        v-if="!isToggleAddCard"
        icon="plus"
        @click.native="isToggleAddCard = true"
      >
        {{ cardComposerLabel }}
      </custom-button>
      <form
        v-if="isToggleAddCard"
        class="list--compose-form"
        style="padding: 8px 0 0"
        @submit.prevent="onAddCard"
      >
        <textarea
          class="list--compose-form__name-textarea"
          placeholder="Enter a title for this card..."
        />
        <div class="list--compose-form__controls">
          <input type="submit" class="clr-btn" value="Add Card" />
          <custom-button icon="times" @click.native="isToggleAddCard = false" />
        </div>
      </form>
    </footer>
  </div>
</template>

<script>
import Card from "./Card";
import CustomButton from "./Button";
import draggable from "vuedraggable";

export default {
  name: "List",

  components: {
    Card,
    CustomButton,
    draggable,
  },

  props: ["list"],

  data: () => ({
    isToggleAddCard: false,
    drag: false,
  }),

  computed: {
    cardComposerLabel() {
      return this.list && this.list.list && this.list.list.length
        ? "Add another card"
        : "Add a card";
    },
  },

  methods: {
    onAddCard() {},
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.header {
  display: flex;
  justify-content: space-between;

  &__title {
    display: block;
    flex: 1 0 auto;
  }
}

.ghost-class {
  opacity: 0.7;
  background-color: $ghost-bg-color;
  border-radius: 3px;
  color: $ghost-bg-color;
}
</style>
