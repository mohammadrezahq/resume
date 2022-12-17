<template>
  <transition name="slide-left-fade">
    <slot></slot>
  </transition>
</template>
<style lang="scss" scoped>
.slide-left-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-left-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-fade-enter-from,
.slide-left-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
