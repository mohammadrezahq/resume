<template>
  <div class="flex h-screen w-screen flex-col justify-center items-center">
    <ToTop>
      <div v-if="show" class="select-none">
        <h1
          class="text-4xl text-center sm:text-6xl font-bold text-gray-600 block"
        >
          {{ $t("nav.name") }}
        </h1>
        <p
          :class="
            $i18n.locale == 'en'
              ? 'text-center sm:text-left'
              : 'text-center sm:text-right'
          "
        >
          {{ $t("nav.resume") }}
        </p>
        <div class="text-center">
          <span
            @click="changeLocale('en')"
            :class="
              $i18n.locale == 'en'
                ? 'font-Quick inline-block cursor-pointer rounded-md m-2 p-2 font-bold bg-black bg-opacity-10'
                : 'font-Quick inline-block cursor-pointer rounded-md m-2 p-2 hover:bg-black hover:bg-opacity-10'
            "
            >English</span
          >
          <span
            @click="changeLocale('fa')"
            :class="
              $i18n.locale == 'fa'
                ? 'font-Cairo inline-block cursor-pointer rounded-md m-2 p-2 font-bold bg-black bg-opacity-10'
                : 'font-Cairo inline-block cursor-pointer rounded-md m-2 p-2 hover:bg-black hover:bg-opacity-10'
            "
            >فارسی</span
          >
        </div>
      </div>
    </ToTop>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import ToTop from "@/Components/Transitions/ToTop.vue";

const { locale } = useI18n({ useScope: "global" });

const show = ref(false);

const changeLocale = (lang) => {
  locale.value = lang;
};

onMounted(() => {
  show.value = true;
});
</script>
