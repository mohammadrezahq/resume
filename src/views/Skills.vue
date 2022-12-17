<template>
  <Container>
    <div>
      <HeaderText>{{ $t("skills.skillsTitle") }}</HeaderText>
    </div>
    <div class="flex flex-col justify-between">
      <div class="">
        <b class="block my-1">{{ $t("skills.pl") }}</b>
        <div class="flex flex-wrap">
          <Skill name="PHP" />
          <Skill name="JavaScript" />
          <Skill name="Typescript" />
          <Skill name="Python" />
          <Skill name="Dart" />
          <Til name="GoLang" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">Backend</b>
        <div class="flex flex-wrap">
          <Skill name="Laravel" />
          <Skill name="Lumen" />
          <Til name="Django-rest-framework" />
          <Til name="Nest js" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">Frontend</b>
        <div class="flex flex-wrap">
          <Skill name="Vue Js" />
          <Skill name="Vite Js" />
          <Skill name="React Js" />
          <Skill name="Flutter" />
          <Skill name="Tailwind" />
          <Skill name="Bootstrap" />
          <Skill name="Jquery" />
          <Skill name="HTML" />
          <Skill name="CSS" />
          <Skill name="Scss" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.d") }}</b>
        <div class="flex flex-wrap">
          <Skill name="MySQL" />
          <Skill name="PostgresSQL" />
          <Skill name="MongoDB" />
          <Skill name="Redis" />
          <Skill name="SQlite" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.t") }}</b>
        <div class="flex flex-wrap">
          <Skill name="Electron js" />
          <Skill name="Git" />
          <Skill name="Composer" />
          <Skill name="Npm" />
          <Skill name="Docker" />
        </div>
      </div>
      <div class="my-2">
        <b class="block my-1">{{ $t("skills.o") }}</b>
        <div class="flex flex-wrap">
          <Skill name="Linux" />
          <Skill name="Lamp" />
          <Skill name="Figma" />
          <Skill name="Wordpress" />
        </div>
      </div>
    </div>
    <div>
      <div
        class="inline-flex select-none items-center gap-x-2 text-gray-500 rounded-lg font-bold text-sm bg-black bg-opacity-10 p-4"
      >
        <Icon
          icon="material-symbols:tips-and-updates-rounded"
          class="text-lg"
        />
        {{ $t("skills.fact") }}
      </div>
    </div>
  </Container>
</template>
<script setup>
import Container from "@/Components/App/Container.vue";
import HeaderText from "@/Components/Inc/HeaderText.vue";
import Skill from "@/Components/Inc/PrimaryItem.vue";
import Til from "@/Components/Inc/Til.vue";
import { Icon } from "@iconify/vue";
</script>
