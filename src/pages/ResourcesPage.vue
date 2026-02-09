<template>
  <div class="min-w-20 px-5 mt-6">
    <ul class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
      <li
        v-for="item in resources"
        :key="item.title"
        class="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
      >
        <a
          :href="item.link"
          target="_blank"
          class="block px-4 py-3 text-gray-800 font-medium hover:text-blue-600"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineOptions({
  name: "Resources",
});
const resources = [
  {
    title: "Pro git",
    link: "https://git-scm.com/book/en/v2",
  },
  {
    title: "Visualizer",
    link: "https://learngitbranching.js.org/",
  },
  {
    title: "Git notes for professionals",
    link: "./GitNotesForProfessionals.pdf",
  },
  {
    title: "Reddit",
    link: "https://www.reddit.com/r/git/",
  },
];
</script>
