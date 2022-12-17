<template>
  <Container>
    <div>
      <HeaderText>{{ $t("projects.projectsTitle") }}</HeaderText>
    </div>
    <div class="w-full flex flex-wrap">
      <Project
        title="Wisham"
        :langs="[
          { title: 'PHP', color: 'bg-indigo-100 text-indigo-500' },
          { title: 'Vue Js', color: 'bg-green-100 text-green-500' },
          { title: 'MySQL', color: 'bg-blue-100 text-blue-500' },
        ]"
        :images="imLazyForWritingUrls('/img/wisham/', 6)"
        :description="$t('projects.wisham')"
        date="February 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="http://github.com/mohammadrezahq/wisham"
      />
      <Project
        title="Simple Financial Management"
        :langs="[
          { title: 'PHP', color: 'bg-indigo-100 text-indigo-500' },
          { title: 'Vue Js', color: 'bg-green-100 text-green-500' },
          { title: 'MySQL', color: 'bg-blue-100 text-blue-500' },
        ]"
        :images="imLazyForWritingUrls('/img/fm/', 7)"
        :description="$t('projects.sfm')"
        date="December 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/simple-financial-management"
      />
      <Project
        title="Automation"
        :langs="[
          { title: 'PHP', color: 'bg-indigo-100 text-indigo-500' },
          { title: 'Vue Js', color: 'bg-green-100 text-green-500' },
          { title: 'MySQL', color: 'bg-blue-100 text-blue-500' },
        ]"
        :images="imLazyForWritingUrls('/img/automation/', 6)"
        :description="$t('projects.automation')"
        date="July 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="#"
      />
      <Project
        title="Lymedia"
        :langs="[
          { title: 'PHP', color: 'bg-indigo-100 text-indigo-500' },
          { title: 'Vue Js', color: 'bg-green-100 text-green-500' },
          { title: 'MongoDB', color: 'bg-green-200 text-green-600' },
        ]"
        :description="$t('projects.lymedia')"
        date="October 2021"
        :images="imLazyForWritingUrls('/img/ly/', 3, 'jpeg')"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="http://github.com/mohammadrezahq/social-media-laravel-vue"
      />
      <Project
        title="Messenger"
        :langs="[
          { title: 'PHP', color: 'bg-indigo-100 text-indigo-500' },
          { title: 'Vue Js', color: 'bg-green-100 text-green-500' },
          { title: 'MySQL', color: 'bg-blue-100 text-blue-500' },
          { title: 'Pusher', color: 'bg-indigo-100 text-indigo-500' },
        ]"
        :description="$t('projects.messenger')"
        date="March 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/laravel-messenger"
      />
      <Project
        title="Todo App"
        :langs="[
          { title: 'Vue Js', color: 'bg-green-100 text-green-500' },
          { title: 'Electron JS', color: 'bg-gray-900 text-blue-100' },
        ]"
        :description="$t('projects.todoapp')"
        date="February 2022"
        icon="icon-park-twotone:all-application"
        linkText="Source"
        link="https://github.com/mohammadrezahq/todo-vuejs"
      />
    </div>
  </Container>
</template>
<script setup>
import Container from "@/Components/App/Container.vue";
import HeaderText from "@/Components/Inc/HeaderText.vue";
import Project from "@/Components/Box.vue";

const imLazyForWritingUrls = (path, num, ext = "png") => {
  let array = [];

  for (let i = 1; i <= num; i++) {
    array.push(path + i + "." + ext);
  }

  return array;
};
</script>
