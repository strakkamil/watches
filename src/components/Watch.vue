<script setup>
import { defineProps } from "vue";

const props = defineProps({
  watch: Object,
});
</script>

<template>
  <RouterLink :to="`/product/${props.watch.id}`" class="watch">
    <span class="ref"> REF. {{ props.watch.reference }}</span>
    <img
      loading="lazy"
      :src="props.watch.imageUrl"
      :alt="props.watch.reference"
    />
    <span class="brand">{{ props.watch.name }}</span>
    <span class="movement">{{ props.watch.description }}</span>
    <span v-if="props.watch.price" class="price"
      >{{ props.watch.price }} {{ props.watch.currency }}</span
    >
  </RouterLink>
</template>

<style lang="scss" scoped>
.watch {
  padding: 35px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  background-color: var(--bg);
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background-color: var(--hairline);
  }

  .ref {
    font-size: 12px;
    font-family: "JetBrains";
    color: var(--text-dim);
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 0 auto;
  }

  .brand {
    text-transform: capitalize;
    font-size: 20px;
  }

  .movement {
    font-size: 14px;
    font-family: "JetBrains";
    color: var(--text-dim);
  }

  .price {
    font-size: 18px;
    font-family: "JetBrains";
    color: var(--gold);
  }
}
</style>
