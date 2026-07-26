<script setup>
import Button from "../Button.vue";
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
      <Button type="LINK" to="/watches">Przeglądaj kolekcję</Button>
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
      margin-bottom: 25px;
      max-width: 440px;
      font-size: 16px;
      font-family: "Fraunces";
      color: var(--text-dim);
    }
  }

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
    padding-bottom: 50px;

    h1 {
      font-size: 34px;

      span {
        font-size: 34px;
      }
    }

    span.desc {
      max-width: 100%;
    }

    .hero-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
