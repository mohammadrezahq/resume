<template>
  <Container>
    <div class="p-4">
      <HeaderText>{{ $t("about.aboutTitle") }}</HeaderText>
      <p class="text-lg">
        {{ $t("about.about") }}
      </p>
    </div>
    <hr />
    <div class="md:flex">
      <div class="p-4 w-full md:w-1/2">
        <HeaderText>{{ $t("about.hobbiesTitle") }}</HeaderText>
        <div :class="$i18n.locale == 'fa' ? 'pr-8' : 'pl-8'">
          <ul class="list-disc">
            <li>{{ $t("about.learning") }}</li>
            <li>{{ $t("about.gaming") }}</li>
            <li>{{ $t("about.reading") }}</li>
            <li>{{ $t("about.linux") }}</li>
          </ul>
        </div>
      </div>
      <div class="p-4">
        <HeaderText class="mt-2">{{ $t("about.languagesTitle") }} </HeaderText>
        <br />
        <SecondaryItem>{{ $t("about.persian") }}</SecondaryItem>
        <SecondaryItem>{{ $t("about.english") }}</SecondaryItem>
      </div>
    </div>

    <hr />

    <div class="p-4">
      <Education />
    </div>
  </Container>
</template>
<script setup>
import Container from "@/Components/App/Container.vue";
import HeaderText from "@/Components/Inc/HeaderText.vue";
import SecondaryItem from "@/Components/Inc/SecondaryItem.vue";
import Education from "@/Components/Education.vue";
</script>
