<template>
  <Container>
    <div>
      <HeaderText>Packages</HeaderText>
    </div>
    <div class="w-full flex flex-wrap">
      <Package
        title="More Toast"
        :langs="[{ title: 'Typescript', color: 'bg-blue-100 text-blue-500' }]"
        :description="$t('projects.moreToast')"
        date="May 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/more-toast"
      />
      <Package
        title="FarsiPoem"
        :langs="[{ title: 'PHP', color: 'bg-indigo-100 text-indigo-500' }]"
        :description="$t('projects.farsiPoem')"
        date="April 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/FarsiPoem"
      />
      <Package
        title="YtCheck"
        :langs="[{ title: 'PHP', color: 'bg-indigo-100 text-indigo-500' }]"
        :description="$t('projects.ytCheck')"
        date="July 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/Yt-check"
      />
      <Package
        title="MDB"
        :langs="[{ title: 'PHP', color: 'bg-indigo-100 text-indigo-500' }]"
        :description="$t('projects.mdb')"
        date="August 2021"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/mdb-php-orm"
      />
      <Package
        title="PassGen"
        :langs="[{ title: 'PHP', color: 'bg-indigo-100 text-indigo-500' }]"
        :description="$t('projects.passgen')"
        date="November 2021"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="http://github.com/mohammadrezahq/laravel-password-generator"
      />
      <Package
        title="HandyNum"
        :langs="[{ title: 'PHP', color: 'bg-indigo-100 text-indigo-500' }]"
        :description="$t('projects.handynum')"
        date="January 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/HandyNum"
      />
      <Package
        title="Mor Mini Toast"
        :langs="[
          { title: 'Javascript', color: 'bg-yellow-100 text-yellow-500' },
          { title: 'Outdated', color: 'bg-gray-100 text-gray-500' },
        ]"
        :description="$t('projects.toast')"
        date="January 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/mor-mini-toast"
      />
    </div>
  </Container>
</template>
<script setup>
import Container from "@/Components/App/Container.vue";
import HeaderText from "@/Components/Inc/HeaderText.vue";
import Package from "@/Components/Box.vue";
</script>
