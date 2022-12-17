<template>
  <transition name="slide-right-fade">
    <slot></slot>
  </transition>
</template>
<style lang="scss" scoped>
.slide-right-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-right-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-fade-enter-from,
.slide-right-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
