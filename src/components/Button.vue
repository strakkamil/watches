<script setup>
defineProps({
  class: {
    type: String,
  },
  element: {
    type: String,
    default: "BUTTON",
  },
  event: {
    type: [Function, String],
    default: null,
  },
});

const emit = defineEmits(["click"]);

function handleClick() {
  emit("click");
}
</script>

<template>
  <RouterLink v-if="element === 'LINK'" :to="event" :class="class">
    <slot />
  </RouterLink>
  <button v-if="element === 'BUTTON'" :class="class" @click="handleClick">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
a {
  display: block;
  background-color: var(--gold);
  width: fit-content;
  padding: 20px 35px;
  border-radius: 3px;
  color: var(--bg);
  font-size: 16px;
  font-family: "JetBrains";
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background-color: var(--gold-bright);
  }
}

button {
  padding: 15px;
  font-family: "JetBrains";
  font-size: 16px;
  background-color: var(--gold);
  color: var(--bg);
  border: none;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;

  &.remove {
    background-color: var(--danger);

    &:hover {
      background-color: var(--danger-bright);
    }
  }

  &.cart {
    background-color: var(--hairline);
    color: var(--text);
    margin-left: unset;

    &:hover {
      color: var(--bg);
    }
  }

  &:hover {
    background-color: var(--gold-bright);
  }
}
</style>
