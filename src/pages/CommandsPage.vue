<script setup>
import { onMounted, reactive } from "vue";
defineOptions({
  name: "Commands",
});
const gitCommands = reactive([
  {
    title: "Setup",
    description:
      "Commands used to initialize a repository or copy an existing one.",
    open: false,
    list: [
      { command: "git init", description: "Creates a new Git repository" },
      {
        command: "git clone [url]",
        description: "Clone a repo into current directory",
      },
      {
        command: "git clone [url] [dir]",
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
      { command: "git add [file]", description: "Add file to staging area" },
      {
        command: "git add .",
        description: "Add all changed files to staging area",
      },
      {
        command: "git add *.txt",
        description: "Add only text files to staging area",
      },
      { command: "git commit", description: "Create commit and open editor" },
      {
        command: 'git commit -m "message"',
        description: "Commit with message",
      },
      {
        command: 'git commit -a -m "message"',
        description: "Commit all tracked files",
      },
      { command: "git diff", description: "Show unstaged changes" },
      { command: "git diff --staged", description: "Show staged changes" },
    ],
  },
  {
    title: "Undoing Changes",
    description: "Commands to discard, revert, or clean up unwanted changes.",
    open: false,
    list: [
      { command: "git reset HEAD [file]", description: "Unstage file" },
      {
        command: "git reset [commit-id]",
        description: "Reset to specific commit",
      },
      {
        command: "git clean -n",
        description: "Preview untracked files deletion",
      },
      { command: "git clean -f", description: "Delete untracked files" },
      { command: "git revert HEAD", description: "Revert last commit" },
      {
        command: "git revert [commit-id]",
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
      { command: "git commit --amend", description: "Edit last commit" },
      {
        command: "git commit --amend --no-edit",
        description: "Amend without changing message",
      },
      { command: "git rebase -i HEAD~n", description: "Rebase last n commits" },
    ],
  },
  {
    title: "Remote",
    description: "Commands for managing and syncing with remote repositories.",
    open: false,
    list: [
      { command: "git remote", description: "List remote repositories" },
      { command: "git remote -v", description: "Show remote URLs" },
      {
        command: "git remote add origin [url]",
        description: "Add remote repository",
      },
      { command: "git fetch", description: "Fetch changes from remote" },
      { command: "git pull", description: "Fetch and merge changes" },
      { command: "git pull --rebase", description: "Pull using rebase" },
      {
        command: "git push origin master",
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
      { command: "git status", description: "Show repo status" },
      { command: "git log", description: "Show commit history" },
      { command: "git log --oneline", description: "Condensed commit history" },
      { command: "git log --graph", description: "Visual commit graph" },
      { command: "git show", description: "Show last commit details" },
    ],
  },
  {
    title: "Branches",
    description:
      "Commands for creating, switching, merging, and deleting branches.",
    open: false,
    list: [
      { command: "git branch", description: "List branches" },
      { command: "git branch [name]", description: "Create new branch" },
      { command: "git branch -d [name]", description: "Delete branch" },
      { command: "git checkout [branch]", description: "Switch branch" },
      {
        command: "git checkout -b [branch]",
        description: "Create and switch branch",
      },
      {
        command: "git merge [branch]",
        description: "Merge branch into current",
      },
    ],
  },
  {
    title: "Tags",
    description: "Commands for creating and managing version tags.",
    open: false,
    list: [
      { command: "git tag", description: "List tags" },
      { command: "git tag -a [name]", description: "Create annotated tag" },
      { command: "git tag -d [name]", description: "Delete tag" },
    ],
  },
]);

const subArrays = reactive([]);

onMounted(() => {
  var length = Math.ceil(this.data.length / 2);

  const result = new Array(length).fill().map((i) => {
    return this.data.splice(0, length);
  });

  subArrays = result;
});
</script>

<template>
  <div class="max-w-5xl min-w-[400px] mx-auto p-6">
    <ul class="space-y-10 font-sans">
      <li
        v-for="(category, idx) in gitCommands"
        :key="idx"
        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
      >
        <div class="mb-6">
          <h2
            class="text-3xl font-extrabold uppercase tracking-wide text-gray-900"
          >
            {{ category.title }}
          </h2>
          <p class="mt-2 pl-1 text-sm text-gray-600">
            {{ category.description }}
          </p>
        </div>

        <ul class="space-y-5">
          <li
            v-for="item in category.list"
            :key="item.command"
            class="rounded-xl bg-gray-50 p-4 transition hover:bg-gray-100"
          >
            <p class="font-mono text-lg font-semibold text-indigo-600">
              {{ item.command }}
            </p>
            <p class="mt-1 text-sm text-gray-700">
              {{ item.description }}
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
