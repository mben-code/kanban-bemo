<template>
  <modal name="edit-card">
    <div class="modal__title">{{ title }}</div>
    <div class="modal__body">{{ description }}</div>
  </modal>
</template>

<script>
export default {
  name: "EditModal",

  props: ["title", "description"],
};
</script>
