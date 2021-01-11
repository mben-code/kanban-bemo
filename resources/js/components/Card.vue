<template>
  <li class="card" @click="onEditCard">
    <div class="card__label">{{ card.title }}</div>
    <span class="card__operation">
      <custom-button icon="trash-alt" />
    </span>
  </li>
</template>

<script>
import CustomButton from "./Button";

export default {
  name: "Card",

  components: {
    CustomButton,
  },

  props: ["card"],

  methods: {
    onEditCard() {
      const { title, description } = this.card;
      this.$modal.show(
        {
          template: `
            <div>
              <div>{{ title }}</div>
              <div>{{ description }}</div>
            </div>
          `,
          props: ["title", "description"],
        },
        {
          title,
          description,
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";

.card {
  cursor: pointer;
  display: block;
  position: relative;
  z-index: 0;
  left: 0;
  top: 0;

  &:hover {
    background-color: $card-hover-bg-color;
    border-bottom-color: rgba(9, 30, 66, 0.25);

    & .card__operation {
      visibility: visible;
    }
  }

  &__operation {
    opacity: 0.7;
    position: absolute;
    right: 2px;
    top: 2px;
    visibility: hidden;
    z-index: 40;
  }

  &__label {
    clear: both;
    display: block;
    margin: 0 0 4px;
    overflow: hidden;
    text-decoration: none;
    word-wrap: break-word;
  }
}
</style>
