<script setup>
import Cart from "./Cart.vue";
import List from "./List.vue";
import Logo from "./Logo.vue";
</script>

<template>
  <header>
    <nav class="container">
      <Logo />
      <ul>
        <List />
      </ul>
      <Cart />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: 80px;
  background: rgba(10, 10, 11, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--hairline);
  z-index: 10;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;

    ul {
      display: flex;
      list-style: none;
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
  }
}
</style>
