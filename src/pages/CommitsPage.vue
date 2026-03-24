<script setup>
const commitTypes = [
  {
    type: "feat",
    description: "Add a new feature to the project",
    example: "feat: Add user profile picture upload functionality",
  },
  {
    type: "fix",
    description: "Fix an issue in the code",
    example: "fix: Resolve issue with login button not responding",
  },
  {
    type: "docs",
    description: "Add or modify project documentation",
    example: "docs: Update README with installation instructions",
  },
  {
    type: "test",
    description: "Changes related to project testing",
    example: "test: Add unit tests for user authentication",
  },
  {
    type: "chore",
    description: "Add routine changes",
    example: "chore: Update project dependencies",
  },
  {
    type: "perf",
    description: "Improve code performance",
    example: "perf: Optimize database queries for faster user retrieval",
  },
  {
    type: "build",
    description: "Changes affecting the build system",
    example: "build: Update build process to include new dependencies",
  },
  {
    type: "revert",
    description: "Revert previous changes",
    example: "revert: Revert previous commit that caused issues",
  },
  {
    type: "refactor",
    description: "Improve code without changing its behavior",
    example: "refactor: Improve code readability in authentication module",
  },
  {
    type: "style",
    description: "Code formatting changes only",
    example: "style: Format code according to coding guidelines",
  },
  {
    type: "ci",
    description: "Changes related to Continuous Integration",
    example: "ci: Integrate automated testing into CI pipeline",
  },
];
</script>

<template>
  <section class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center">Git Commit Messages</h1>
    <ul class="flex flex-col gap-4">
      <li
        v-for="item in commitTypes"
        :key="item.type"
        class="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
      >
        <div class="flex flex-col md:flex-row md:items-center gap-3">
          <span
            class="bg-[#f05030] text-white font-semibold px-4 py-2 rounded-full w-24 text-center"
          >
            {{ item.type }}
          </span>
          <span class="text-gray-700">{{ item.description }}</span>
        </div>
        <p class="mt-2 font-mono text-gray-800">
          <span class="font-bold text-black"> ~git commit -m </span> "{{
            item.example
          }}"
        </p>
      </li>
    </ul>
  </section>
</template>
