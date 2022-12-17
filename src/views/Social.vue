<template>
  <div class="flex h-screen w-screen flex-col justify-center items-center">
    <div class="text-center text-xl text-gray-400">
      <div class="text-6xl">
        <Social />
      </div>
      <p>
        {{ $t("social.madeWith") }} <b class="text-green-500">Vue.js</b>
        {{ $t("social.and") }}
        <b class="text-red-600"> {{ $t("social.love") }}</b>
        {{ $t("social.by") }}
        <b class="animate-pulse"> {{ $t("nav.name") }}</b>
      </p>
    </div>
  </div>
</template>
<script setup>
import Social from "@/Components/Social.vue";
</script>
