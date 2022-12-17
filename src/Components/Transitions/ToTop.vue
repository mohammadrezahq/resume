<template>
  <transition name="slide-top-fade">
    <slot></slot>
  </transition>
</template>
<style lang="scss" scoped>
.slide-top-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-top-fade-leave-active {
  transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-top-fade-enter-from,
.slide-top-fade-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
