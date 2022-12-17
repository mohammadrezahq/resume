<template>
  <ToRight>
    <h2
      class="text-xl select-none font-bold mb-2 bg-black bg-opacity-5 inline-block px-4 py-2 rounded-lg"
      v-if="show"
    >
      <svg
        v-if="$i18n.locale == 'en'"
        class="inline-block align-middle"
        style="margin-bottom: 4px"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <path d="M6 15l5-5l-5-5l1-2l7 7l-7 7z" fill="currentColor" />
      </svg>
      <svg
        v-if="$i18n.locale == 'fa'"
        class="inline-block align-middle"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <path d="M14 5l-5 5l5 5l-1 2l-7-7l7-7z" fill="currentColor" />
      </svg>
      <slot></slot>
    </h2>
  </ToRight>
</template>
<script setup>
import ToRight from "@/Components/Transitions/ToRight.vue";
import { ref, onMounted } from "vue";

const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>
