<script setup>
const resources = [
  {
    title: "Pro Git",
    link: "https://git-scm.com/book/en/v2",
    description:
      "One of the most comprehensive Git books. Covers everything from basic commands to advanced Git internals and workflows.",
  },
  {
    title: "Learn Git Branching",
    link: "https://learngitbranching.js.org/",
    description:
      "An interactive visual tool that helps you understand Git branching, merging, rebasing, and other concepts by practicing them directly.",
  },
  {
    title: "Git Notes for Professionals",
    link: "./GitNotesForProfessionals.pdf",
    description:
      "A structured collection of Git explanations and examples compiled from Stack Overflow documentation. Great as a quick reference.",
  },
  {
    title: "Git Official Documentation",
    link: "https://git-scm.com/docs",
    description:
      "The official Git documentation containing detailed explanations of every Git command and configuration option.",
  },
  {
    title: "Oh My Git!",
    link: "https://ohmygit.org/",
    description:
      "A fun open-source game that teaches Git concepts like commits, branches, and merges through interactive puzzles.",
  },
  {
    title: "Git Cheat Sheet (GitHub)",
    link: "https://education.github.com/git-cheat-sheet-education.pdf",
    description:
      "A quick reference sheet with the most commonly used Git commands, useful for beginners and daily workflows.",
  },
];
</script>

<template>
  <section class="my-10 mx-5">
    <h2 class="mb-5 text-3xl">Useful Git Resources</h2>
    <ul class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
      <li v-for="resource in resources" :key="resource.title">
        <a
          :href="resource.link"
          target="_blank"
          class="h-full bg-[#1f2937] rounded-xl p-4 block duration-200 hover:bg-[#111827] hover:translate-y-1 hover:-translate-x-0.5"
        >
          <h3 class="mb-2.5 text-xl">{{ resource.title }}</h3>
          <p class="text-[#d1d5db] leading-6 text-sm">
            {{ resource.description }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>
