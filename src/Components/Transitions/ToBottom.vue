<template>
  <transition name="slide-bottom-fade">
    <slot></slot>
  </transition>
</template>
<style lang="scss" scoped>
.slide-bottom-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-bottom-fade-leave-active {
  transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-bottom-fade-enter-from,
.slide-bottom-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
