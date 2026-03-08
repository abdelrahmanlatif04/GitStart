<script setup>
import { ref } from "vue";

defineOptions({ name: "Commands" });
const active = ref(0);

const gitCommands = [
  {
    title: "Setup",
    description:
      "Commands used to initialize a repository or copy an existing one.",
    open: false,
    list: [
      { command: "init", description: "Creates a new Git repository" },
      {
        command: "clone [url]",
        description: "Clone a repo into current directory",
      },
      {
        command: "clone [url] [dir]",
        description: "Clone a repo into a new directory",
      },
    ],
  },
  {
    title: "Saving Changes",
    description:
      "Commands for staging, committing, and reviewing local changes.",
    open: false,
    list: [
      { command: "add [file]", description: "Add file to staging area" },
      {
        command: "add .",
        description: "Add all changed files to staging area",
      },
      {
        command: "add *.txt",
        description: "Add only text files to staging area",
      },
      { command: "commit", description: "Create commit and open editor" },
      {
        command: 'commit -m "message"',
        description: "Commit with message",
      },
      {
        command: 'commit -a -m "message"',
        description: "Commit all tracked files",
      },
      { command: "diff", description: "Show unstaged changes" },
      { command: "diff --staged", description: "Show staged changes" },
    ],
  },
  {
    title: "Undoing Changes",
    description: "Commands to discard, revert, or clean up unwanted changes.",
    open: false,
    list: [
      { command: "reset HEAD [file]", description: "Unstage file" },
      {
        command: "reset [commit-id]",
        description: "Reset to specific commit",
      },
      {
        command: "clean -n",
        description: "Preview untracked files deletion",
      },
      { command: "clean -f", description: "Delete untracked files" },
      { command: "revert HEAD", description: "Revert last commit" },
      {
        command: "revert [commit-id]",
        description: "Revert specific commit",
      },
    ],
  },
  {
    title: "Rewriting History",
    description:
      "Commands that modify existing commits and rewrite commit history.",
    open: false,
    list: [
      { command: "commit --amend", description: "Edit last commit" },
      {
        command: "commit --amend --no-edit",
        description: "Amend without changing message",
      },
      { command: "rebase -i HEAD~n", description: "Rebase last n commits" },
    ],
  },
  {
    title: "Remote",
    description: "Commands for managing and syncing with remote repositories.",
    open: false,
    list: [
      { command: "remote", description: "List remote repositories" },
      { command: "remote -v", description: "Show remote URLs" },
      {
        command: "remote add origin [url]",
        description: "Add remote repository",
      },
      { command: "fetch", description: "Fetch changes from remote" },
      { command: "pull", description: "Fetch and merge changes" },
      { command: "pull --rebase", description: "Pull using rebase" },
      {
        command: "push origin master",
        description: "Push commits to remote",
      },
    ],
  },
  {
    title: "Inspecting",
    description:
      "Commands to view repository status, history, and commit details.",
    open: false,
    list: [
      { command: "status", description: "Show repo status" },
      { command: "log", description: "Show commit history" },
      { command: "log --oneline", description: "Condensed commit history" },
      { command: "log --graph", description: "Visual commit graph" },
      { command: "show", description: "Show last commit details" },
    ],
  },
  {
    title: "Branches",
    description:
      "Commands for creating, switching, merging, and deleting branches.",
    open: false,
    list: [
      { command: "branch", description: "List branches" },
      { command: "branch [name]", description: "Create new branch" },
      { command: "branch -d [name]", description: "Delete branch" },
      { command: "checkout [branch]", description: "Switch branch" },
      {
        command: "checkout -b [branch]",
        description: "Create and switch branch",
      },
      {
        command: "merge [branch]",
        description: "Merge branch into current",
      },
    ],
  },
  {
    title: "Tags",
    description: "Commands for creating and managing version tags.",
    open: false,
    list: [
      { command: "tag", description: "List tags" },
      { command: "tag -a [name]", description: "Create annotated tag" },
      { command: "tag -d [name]", description: "Delete tag" },
    ],
  },
];
function scrollToSection(i) {
  active.value = i;
  document.getElementById("section-" + i)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full">
    <!-- Sidebar -->
    <aside
      class="lg:w-52 lg:h-screen fixed bg-[#010409] lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r overflow-x-auto"
    >
      <ul class="flex lg:flex-col gap-2 p-3 text-sm whitespace-nowrap">
        <li v-for="(cat, i) in gitCommands" :key="cat.title">
          <button
            @click="scrollToSection(i)"
            class="px-3 py-2 rounded-lg transition text-left"
            :class="
              active === i
                ? 'bg-gray-200 text-black font-semibold'
                : 'hover:bg-gray-100/20'
            "
          >
            {{ cat.title }}
          </button>
        </li>
      </ul>
    </aside>

    <!-- Content -->
    <main class="flex-1 p-4 pt-20 sm:p-6 lg:p-10 space-y-12">
      <section
        v-for="(category, i) in gitCommands"
        :key="category.title"
        :id="'section-' + i"
        class="space-y-4"
      >
        <div>
          <h2 class="text-3xl sm:text-2xl font-bold">
            {{ category.title }}
          </h2>

          <p class="text-base text-gray-500 max-w-xl">
            {{ category.description }}
          </p>
        </div>

        <ul class="space-y-3">
          <li
            v-for="cmd in category.list"
            :key="cmd.command"
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-l px-4 py-3 rounded-bl-md text-sm max-w-2xl"
          >
            <span class="font-mono text-base sm:text-lg font-semibold">
              ~git {{ cmd.command }}
            </span>

            <span class="text-gray-600 text-sm">
              {{ cmd.description }}
            </span>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
