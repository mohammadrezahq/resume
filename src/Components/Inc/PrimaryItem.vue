<template>
  <div :class="classes">
    <p class="text-md">{{ name }}</p>
  </div>
</template>
<script setup>
import { computed } from "vue";

const colors = [
  "text-red-400",
  "text-blue-400",
  "text-slate-400",
  "text-indigo-400",
  "text-black",
  "text-orange-400",
];

const classes = computed(() => {
  return (
    "flex items-center mr-2 my-1 bg-white " +
    colors[Math.floor(Math.random() * colors.length)] +
    " px-2 py-1 font-semibold rounded-xl shadow-sm cursor-pointer transition hover:animate-pulse"
  );
});

defineProps({
  name: String,
});
</script>
