<template>
  <div
    class="circle-box cursor-pointer"
    @mouseover="show = true"
    @mouseleave="show = false"
  >
    <svg viewBox="0 0 36 36" class="circular-chart">
      <path
        class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="circle"
        :stroke-dasharray="percent + ', 100'"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <ToBottom>
        <text v-if="show" x="18" y="20.35" class="percentage">
          {{ percent }}%
        </text>
      </ToBottom>
    </svg>
  </div>
</template>
<script setup>
import ToBottom from "@/Components/Transitions/ToBottom.vue";
import { onMounted, ref } from "vue";

const show = ref(false);

onMounted(() => {
  show.value = true;
});

defineProps(["percent"]);
</script>
<style lang="scss" scoped>
.circle-box {
  display: inline-block;
  width: 45px;
}
.circular-chart {
  display: block;
  margin: 0 5px;
  max-width: 40px;
  max-height: 40px;
  stroke: black;
}

.circle-bg {
  fill: none;
  stroke: rgb(150, 150, 150);
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>
