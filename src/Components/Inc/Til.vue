<template>
  <div
    class="flex items-center relative overflow-hidden progress-animation mr-2 my-1 bg-gray-200 text-gray-600 font-semibold px-2 py-1 rounded-xl shadow-sm cursor-pointer"
  >
    <p class="text-md">{{ name }}</p>
  </div>
</template>
<script setup>
defineProps({
  name: String,
});
</script>
<style scoped>
.progress-animation::before {
  content: "";
  position: absolute;
  left: -50%;
  top: 0;
  bottom: 0;
  width: 100%;
  background: gray;
  opacity: 0.2;
  transition: 0.5s;
}

.progress-animation:hover::before {
  left: 0;
}
</style>
