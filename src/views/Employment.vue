<template>
  <Container>
    <div>
      <HeaderText>{{ $t("employment.employmentTitle") }}</HeaderText>
    </div>
    <Box
      :title="$t('employment.swdTitle')"
      :date="$t('employment.swdDate')"
      :description="$t('employment.swdDesc')"
      :langs="[
        { title: 'Full-Time', color: 'bg-blue-100 text-blue-500' },
        { title: 'Full-Stack', color: 'bg-orange-100 text-orange-500' },
        { title: 'Remote', color: 'bg-gray-100 text-gray-500' },
      ]"
      icon="material-symbols:work-history"
      linkText="Visit Here"
      link="https://github.com/mohammadrezahq"
    />
    <Box
      title="Bazdidban (Balabash)"
      date="April 2022 - present"
      description="Technical development and maintenance (Web and Mobile). (bazdidban.com, balabash.com)"
      :langs="[
        { title: 'Part-Time', color: 'bg-red-100 text-red-500' },
        { title: 'Full-Stack', color: 'bg-orange-100 text-orange-500' },
        { title: 'Remote', color: 'bg-gray-100 text-gray-500' },
      ]"
      icon="material-symbols:work-history"
      linkText="Visit Here"
      link="https://bazdidban.com"
    />
    <Box
      title="ExirAcademy"
      date="April 2018 - 2019"
      description="Technical development and maintenance (Web)"
      :langs="[
        { title: 'Full-Time', color: 'bg-red-100 text-red-500' },
        { title: 'Full-Stack', color: 'bg-orange-100 text-orange-500' },
      ]"
      icon="material-symbols:work-history"
      linkText="Visit Here"
      link="#"
    />
  </Container>
</template>
<script setup>
import Container from "@/Components/App/Container.vue";
import HeaderText from "@/Components/Inc/HeaderText.vue";
import Box from "@/Components/Box.vue";
</script>
