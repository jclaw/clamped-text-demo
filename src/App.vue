<template>
  <div id="app">
    <h1>Clamped Text</h1>
    <ClampedText> hi hello hi </ClampedText>
  </div>
</template>

<script setup>
import ClampedText from './components/ClampedText.vue';
</script>

<style lang="scss">
@use './reset.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #222222;
  padding: 1rem 0.5rem;
}
</style>
