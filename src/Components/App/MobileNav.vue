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
        @click="changeRoute('/@/education')"
        @mouseover="changePathName('Education')"
        @mouseleave="setPathName()"
        :class="currentPath == '/@/education' ? classesOnActive : classes"
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
<script>
export default {
  props: ["currentPath"],
  data() {
    return {
      classes:
        "transition w-2 h-2 shadow-md mx-2 rounded-full bg-white hover:h-4 hover:w-4 cursor-pointer",
      classesOnActive:
        "transition w-4 h-4 shadow-md mx-2 rounded-full bg-white",
      classesOnPathName: "mr-1 mt-1 font-bold z-10",
      pathName: "",
    };
  },
  mounted() {
    this.setPathName();
  },
  methods: {
    setPathName() {
      this.classesOnPathName = "mr-1 mt-1 font-bold z-10";
      const path = this.$router.currentRoute.value.path;
      if (path == "/@/welcome") {
        this.pathName = this.$t("nav.welcome");
      }
      if (path == "/@/about") {
        this.pathName = this.$t("nav.about");
      }

      if (path == "/@/skills") {
        this.pathName = this.$t("nav.skills");
      }

      if (path == "/@/packages") {
        this.pathName = this.$t("nav.packages");
      }

      if (path == "/@/projects") {
        this.pathName = this.$t("nav.projects");
      }

      if (path == "/@/education") {
        this.pathName = this.$t("nav.education");
      }

      if (path == "/@/employment-history") {
        this.pathName = this.$t("nav.employment");
      }

      if (path == "/@/social") {
        this.pathName = this.$t("nav.social");
      }
    },
    changePathName(name) {
      this.classesOnPathName = "mr-1 mt-1 font-bold text-gray-400 z-10";
      this.pathName = name;
    },
    changeRoute(name) {
      this.$router.push(name);
    },
  },
  watch: {
    $route(to, from) {
      this.setPathName();
    },
  },
};
</script>
