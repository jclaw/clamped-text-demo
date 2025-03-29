<template>
  <div class="clamped-text">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

interface Props {
  initialValue?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialValue: 0,
});
</script>

<style lang="scss" scoped>
.clamped-text {
}
</style>
