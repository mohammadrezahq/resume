<template>
  <div class="absolute right-4 top-0 bottom-0 flex items-center" dir="ltr">
    <div :class="classesOnPathName" style="color: #00000085">
      {{ pathName }}
    </div>
    <div
      class="flex flex-col p-1 rounded-full justify-center items-center"
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
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t, locale } = useI18n({ useScope: "global" });

const route = useRoute();

defineProps(["currentPath"]);

const classes =
  "transition w-2 h-2 shadow-md my-2 rounded-full bg-white hover:h-4 hover:w-4 cursor-pointer";
const classesOnActive =
  "transition w-4 h-4 shadow-md my-2 rounded-full bg-white";
const pathName = ref("");
const classesOnPathName = ref("mr-1 mt-1 font-bold z-10");

const router = useRouter();

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

  if (path == "/@/employment-history") {
    pathName.value = t("nav.employment");
  }

  if (path == "/@/social") {
    pathName.value = t("nav.social");
  }
};

onMounted(async () => {
  await router.isReady();
  setPathName();
});

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
