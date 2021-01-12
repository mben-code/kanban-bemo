<template>
  <div class="list">
    <header class="list__header header">
      <div class="header__title">{{ list.title }}</div>
      <div class="header__action">
        <custom-button icon="trash-alt" />
      </div>
    </header>

    <draggable
      :list="list.cards"
      :animation="200"
      :id="`list-${list.order}`"
      group="board"
      tag="ul"
      ghost-class="ghost-class"
      @add="onAdd"
      @update="onUpdate"
    >
      <card
        v-for="card in list.cards"
        :key="card.title + card.order"
        :card="card"
        @remove="onRemove"
      />
    </draggable>

    <footer class="list__footer">
      <custom-button
        v-if="!isToggleAddCard"
        icon="plus"
        @click.native="
          isToggleAddCard = true;
          newCardTitle = '';
        "
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
          v-model="newCardTitle"
          class="list--compose-form__name-textarea"
          placeholder="Enter a title for this card..."
        />
        <div class="list--compose-form__controls">
          <input type="submit" class="clr-btn" value="Add Card" />
          <custom-button
            icon="times"
            @click.native="
              isToggleAddCard = false;
              newCardTitle = '';
            "
          />
        </div>
      </form>
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    newCardTitle: "",
  }),

  computed: {
    cardComposerLabel() {
      return this.list && this.list.cards && this.list.cards.length
        ? "Add another card"
        : "Add a card";
    },
  },

  methods: {
    ...mapActions(["addNewCard", "moveCard", "updateList", "removeCard"]),

    async onAddCard() {
      try {
        this.addNewCard({
          listOrder: this.list.order,
          title: this.newCardTitle,
        });

        this.isToggleAddCard = false;
        this.newCardTitle = "";
      } catch (e) {
        alert("Oops! Something went wrong");
      }
    },

    async onUpdate(evt) {
      const { newDraggableIndex, oldDraggableIndex, target } = evt;

      const listOrder = parseInt(target.id.match(/\d+/)[0]);

      try {
        this.updateList({
          source: oldDraggableIndex,
          target: newDraggableIndex,
          listOrder,
        });
      } catch (e) {
        alert("Oops! something went wrong");
      }
    },

    async onAdd(evt) {
      const { newDraggableIndex, oldDraggableIndex, from, to } = evt;

      const sourceListOrder = parseInt(from.id.match(/\d+/)[0]);
      const targetListOrder = parseInt(to.id.match(/\d+/)[0]);

      try {
        this.moveCard({
          source: {
            listOrder: sourceListOrder,
            cardOrder: oldDraggableIndex,
          },
          target: {
            listOrder: targetListOrder,
            cardOrder: newDraggableIndex,
          },
        });
      } catch (e) {
        alert("Oops! something went wrong");
      }
    },

    async onRemove(card) {
      try {
        this.removeCard({
          listOrder: this.list.order,
          cardOrder: card.order,
        });
      } catch (e) {
        alert("Oops! something went wrong");
      }
    },
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
