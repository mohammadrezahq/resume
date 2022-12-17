<template>
  <div
    :dir="$i18n.locale == 'fa' ? 'rtl' : 'ltr'"
    :class="$i18n.locale == 'en' ? 'font-Quick' : 'font-Cairo'"
  >
    <Desktop v-if="windowWidth >= 955" />
    <Mobile v-if="windowWidth < 955" />
  </div>
</template>
<script setup>
import Desktop from "@/app/Desktop.vue";
import Mobile from "@/app/Mobile.vue";
import { onUnmounted, ref } from "vue";

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

window.addEventListener("resize", updateWidth);

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
