<template>
  <div
    class="bg-white rounded-lg p-2 relative my-4 w-full shadow-slate-600 hover:shadow-md transition-shadow"
  >
    <!-- Top Icon -->
    <div class="absolute right-0" style="top: -18px">
      <Icon :icon="icon" class="text-4xl" />
    </div>

    <!-- Title and Date -->
    <p
      :class="
        $i18n.locale == 'en'
          ? 'text-left flex flex-col md:flex-row items-center'
          : 'text-right flex flex-col md:flex-row items-center'
      "
    >
      <b class="text-lg">{{ title }}</b>
      <span class="text-gray-500 mx-2">{{ date }}</span>
    </p>

    <!-- Description -->
    <p>{{ description }}</p>

    <!-- Langs or Feautures -->
    <div class="flex mt-2" v-if="langs">
      <div v-for="(lang, i) in langs" :key="i">
        <span
          :class="
            ($i18n.locale == 'en' ? 'py-1 mr-2' : 'ml-2 ') +
            ' my-2 px-2 text-sm font-semibold rounded-xl cursor-pointer ' +
            lang.color
          "
        >
          {{ lang.title }}
        </span>
      </div>
    </div>

    <!-- Images and Modals -->
    <div
      v-if="modal !== '0'"
      class="fixed w-full p-8 h-full top-0 left-0 right-0 bg-white z-50 flex justify-center items-center"
    >
      <img :src="images[modal]" class="md:h-3/4" />
      <button
        class="fixed flex justify-center gap-x-2 items-center top-2 left-0 m-auto w-32 right-0 text-md font-bold bg-gray-200 text-gray-600 p-4 rounded-md"
        @click="modal = '0'"
      >
        <Icon icon="ri:eye-close-line" />
        Close
      </button>
    </div>
    <div v-if="images">
      <br />
      <div class="flex flex-wrap gap-y-1 gap-x-1">
        <img
          v-for="(image, i) in images"
          :key="i"
          class="h-36 rounded-lg border-2 border-slate-200 cursor-pointer"
          :src="image"
          @click="modal = i"
        />
      </div>
    </div>

    <!-- Link -->
    <div class="flex justify-end">
      <a
        :href="link"
        target="_blank"
        class="bg-transparent text-gray-500 font-bold rounded-full transition block py-2 px-4 hover:bg-gray-100"
        >{{ linkText }}</a
      >
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

defineProps({
  title: String,
  date: String,
  description: String,
  link: String,
  linkText: String,
  langs: Object,
  images: Object,
  icon: String,
});

const modal = ref("0");
</script>
