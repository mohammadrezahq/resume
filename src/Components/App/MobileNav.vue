<template>
  <div
    class="absolute right-0 left-0 top-2 flex flex-col justify-center items-center"
  >
    <div
      class="flex flex-row p-1 rounded-full justify-center items-center"
      style="background: rgba(0, 0, 0, 0.1)"
    >
      <div
        @click="changeRoute('/@/welcome')"
        @mouseover="changePathName('Welcome')"
        @mouseleave="setPathName()"
        :class="currentPath == '/@/welcome' ? classesOnActive : classes"
      ></div>
      <div
        @click="changeRoute('/@/about')"
        @mouseover="changePathName('About Me')"
        @mouseleave="setPathName()"
        :class="currentPath == '/@/about' ? classesOnActive : classes"
      ></div>
      <div
        @click="changeRoute('/@/skills')"
        @mouseover="changePathName('Skills')"
        @mouseleave="setPathName()"
        :class="currentPath == '/@/skills' ? classesOnActive : classes"
      ></div>
      <div
        @click="changeRoute('/@/packages')"
        @mouseover="changePathName('Packages')"
        @mouseleave="setPathName()"
        :class="currentPath == '/@/packages' ? classesOnActive : classes"
      ></div>
      <div
        @click="changeRoute('/@/projects')"
        @mouseover="changePathName('Projects')"
        @mouseleave="setPathName()"
        :class="currentPath == '/@/projects' ? classesOnActive : classes"
      ></div>
      <div
        @click="changeRoute('/@/employment-history')"
        @mouseover="changePathName('Employment History')"
        @mouseleave="setPathName()"
        :class="
          currentPath == '/@/employment-history' ? classesOnActive : classes
        "
      ></div>
      <div
        @click="changeRoute('/@/social')"
        @mouseover="changePathName('Socials')"
        @mouseleave="setPathName()"
        :class="currentPath == '/@/social' ? classesOnActive : classes"
      ></div>
    </div>
    <div :class="classesOnPathName">{{ pathName }}</div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });

defineProps(["currentPath"]);
const router = useRouter();
const route = useRoute();

const classes = ref(
  "transition w-2 h-2 shadow-md mx-2 rounded-full bg-white hover:h-4 hover:w-4 cursor-pointer"
);
const classesOnActive = ref(
  "transition w-4 h-4 shadow-md mx-2 rounded-full bg-white"
);

const pathName = ref("");
const classesOnPathName = ref("mr-1 mt-1 font-bold z-10");

onMounted(async () => {
  await router.isReady();
  setPathName();
});

const setPathName = () => {
  classesOnPathName.value = "mr-1 mt-1 font-bold z-10";

  const path = route.path;

  if (path == "/@/welcome") {
    pathName.value = t("nav.welcome");
  }
  if (path == "/@/about") {
    pathName.value = t("nav.about");
  }

  if (path == "/@/skills") {
    pathName.value = t("nav.skills");
  }

  if (path == "/@/packages") {
    pathName.value = t("nav.packages");
  }

  if (path == "/@/projects") {
    pathName.value = t("nav.projects");
  }

  if (path == "/@/education") {
    pathName.value = t("nav.education");
  }

  if (path == "/@/employment-history") {
    pathName.value = t("nav.employment");
  }

  if (path == "/@/social") {
    pathName.value = t("nav.social");
  }
};
const changePathName = (name) => {
  classesOnPathName.value = "mr-1 mt-1 font-bold text-gray-400 z-10";
  pathName.value = name;
};
const changeRoute = (name) => {
  router.push(name);
};

watch(
  () => route.path,
  () => {
    setPathName();
  }
);

watch(
  () => locale.value,
  () => {
    setPathName();
  }
);
</script>
