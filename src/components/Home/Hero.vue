<script setup>
import Clock from "../Clock.vue";
</script>

<template>
  <section class="hero container">
    <div class="hero-wrapper">
      <span class="gold">KOLEKCJA 2026 · WYKONANIE OGRANICZONE</span>
      <h1>
        Czas mierzony <br />
        <span class="gold">rzemiosłem</span>, nie modą.
      </h1>
      <span class="desc"
        >Mechaniczne zegarki wybrane dla charakteru, nie dla logo. Każdy
        egzemplarz z pełną kartą techniczną i numerem referencyjnym.</span
      >
      <RouterLink to="/watches">Przeglądaj kolekcję</RouterLink>
    </div>
    <Clock size="300" />
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--hairline);

  h1 {
    margin: 25px 0;
    font-size: 52px;
    font-family: "Fraunces";

    span {
      font-size: 52px;
      font-family: "Fraunces";
      font-style: italic;
    }
  }

  span {
    font-size: 13px;
    font-family: "JetBrains";
    font-weight: 400;

    &.gold {
      color: var(--gold-bright);
    }

    &.desc {
      display: inline-block;
      max-width: 440px;
      font-size: 16px;
      font-family: "Fraunces";
      color: var(--text-dim);
    }
  }

  a {
    display: block;
    margin-top: 25px;
    background-color: var(--gold);
    width: fit-content;
    padding: 20px 35px;
    border-radius: 3px;
    color: var(--bg);
    font-size: 15px;
    font-family: "JetBrains";
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      background-color: var(--gold-bright);
    }
  }
}
</style>
