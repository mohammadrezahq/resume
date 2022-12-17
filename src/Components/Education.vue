<template>
  <div class="flex w-full flex-col">
    <div>
      <HeaderText>{{ $t("education.educationTitle") }}</HeaderText>
    </div>
    <Box
      :title="$t('education.csTitle')"
      :date="$t('education.csDate')"
      icon="cil:education"
      linkText="Linkedin"
      link="https://www.linkedin.com/school/srbiau/"
    />
  </div>
</template>
<script setup>
import HeaderText from "@/Components/Inc/HeaderText.vue";
import Box from "@/Components/Box.vue";
</script>
