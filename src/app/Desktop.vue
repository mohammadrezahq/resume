<template>
  <div class="h-screen w-full" @wheel="onWheel">
    <SmallNav :currentPath="currentPath" />
    <router-view v-slot="{ Component }">
      <transition :name="animationType">
        <component v-if="show" :is="Component" class="p-12" />
      </transition>
    </router-view>
    <transition :name="animationType">
      <div
        v-if="isNotLastPage"
        class="text-center fixed w-20 m-auto bottom-2 left-0 right-0"
      >
        <img
          src="@/assets/scroll2.gif"
          @click="afterRoute()"
          class="w-16 m-auto cursor-pointer"
          alt="Scroll page"
        />
      </div>
    </transition>
  </div>
</template>
<script setup>
import SmallNav from "@/Components/App/SmallNav.vue";
import { useNavStore } from "@/stores/nav";
import { storeToRefs } from "pinia";
import { inject, ref } from "vue";
import { onBeforeMount, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const store = useNavStore();

const { canChange } = storeToRefs(store);
const { canChangeAction } = store;

const show = ref(false);
const isNotLastPage = ref(true);
const animationType = ref("slide");
const currentPath = ref("");

const onWheel = (e) => {
  let isNos = false;

  e.path.forEach((element) => {
    if (element.id == "nos") {
      isNos = true;
      if (element.scrollTop >= element.scrollHeight - element.clientHeight) {
        isNos = false;
      } else {
        isNos = true;
      }
      if (element.scrollTop === 0) {
        if (e.deltaY < 0) isNos = false;
      }
    }
  });

  if (!isNos && canChange.value) {
    if (e.deltaY > 0) afterRoute();
    if (e.deltaY < 0) preRoute();

    canChangeAction();
  }
};

const routes = inject("routesList");

const afterRoute = () => {
  animationType.value = "slide";

  if (routes[routes.indexOf(route.name) + 1]) {
    router.push({ name: routes[routes.indexOf(route.name) + 1] });
  }
};

const preRoute = () => {
  animationType.value = "preSlide";

  if (routes[routes.indexOf(route.name) - 1]) {
    router.push({ name: routes[routes.indexOf(route.name) - 1] });
  }
};

onMounted(() => {
  show.value = true;
});

onBeforeMount(() => {
  document.body.style.overflow = "hidden";
});

watch(
  () => route.path,
  () => {
    currentPath.value = route.path;
    if (currentPath.value == "/@/social") {
      isNotLastPage.value = false;
    } else {
      isNotLastPage.value = true;
    }
    show.value = false;
    setTimeout(() => (show.value = true), 100);
  }
);
</script>

<style lang="scss">
body {
  background: rgb(255, 247, 241);
  background: -moz-linear-gradient(
    left,
    rgba(255, 247, 241, 1) 0%,
    rgba(239, 239, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 247, 241, 1) 0%,
    rgba(239, 239, 255, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 247, 241, 1) 0%,
    rgba(239, 239, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff7f1', endColorstr='#efefff',GradientType=1 ); /* IE6-9 */
}
.mainBg {
  background-color: #82828217;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: #888;
}

body::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-out;
}

.slide-enter-to {
  position: absolute;
  bottom: 0;
  opacity: 1;
}

.slide-enter-from {
  position: absolute;
  bottom: -100%;
  opacity: 0.3;
}

.slide-leave-to {
  position: absolute;
  top: -100%;
  opacity: 0.3;
}

.slide-leave-from {
  position: absolute;
  top: 0;
  opacity: 1;
}

.preSlide-enter-active,
.preSlide-leave-active {
  transition: all 1s ease-out;
}

.preSlide-enter-to {
  position: absolute;
  top: 0;
  opacity: 1;
}

.preSlide-enter-from {
  position: absolute;
  top: -100%;
  opacity: 0.3;
}

.preSlide-leave-to {
  position: absolute;
  bottom: -100%;
  opacity: 0.3;
}

.preSlide-leave-from {
  position: absolute;
  bottom: 0;
  opacity: 1;
}
</style>
