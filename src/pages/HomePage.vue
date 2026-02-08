<script setup>
import { Icon } from "@iconify/vue";
import { reactive, ref } from "vue";
defineOptions({
  name: "Home",
});
const questions = reactive([
  {
    question: "what is Version Control",
    answer:
      "Version control is a system that manages changes to files over time, allowing you to track history, revert changes, and collaborate with others safely.",
    state: false,
  },

  {
    question: "what is Git",
    answer:
      "Git is a distributed version control system used to track changes in source code and help developers collaborate on projects.",
    state: false,
  },

  {
    question: "what is Github",
    answer:
      "GitHub is a web-based platform that hosts Git repositories and provides tools for collaboration like pull requests, issues, and code reviews.",
    state: false,
  },
]);

const openIdx = ref(null);

function toggle(idx) {
  openIdx.value = openIdx.value === idx ? null : idx;
}
</script>
<template>
  <section class="py-10">
    <h1 class="text-center text-6xl font-extrabold tracking-wider my-10">
      GitStart
    </h1>
    <div class="flex flex-col-reverse lg:flex-row gap-12">
      <article class="lg:w-1/2">
        <ul class="flex flex-col gap-2 justify-center h-full pl-3">
          <li
            v-for="(item, idx) in questions"
            :key="item.question"
            class="rounded-l-lg overflow-hidden relative border-b-4 border-l-4 rounded-md"
          >
            <button
              @click="toggle(idx)"
              class="w-full flex justify-between items-center px-6 py-4 text-left text-3xl font-bold hover:bg-white/10 transition"
              :class="item.state ? 'bg-white/10' : ''"
            >
              <span>{{ item.question }}</span>
            </button>

            <transition name="collapse">
              <div
                v-if="openIdx === idx"
                v-text="item.answer"
                class="px-6 pb-6 text-gray-200 relative pl-5 text-2xl transition-all"
              ></div>
            </transition>
          </li>
        </ul>
      </article>

      <article class="flex flex-1 items-center justify-center">
        <div class="space-y-6 text-center">
          <a
            target="_blank"
            href="https://git-scm.com/book/en/v2"
            class="block text-2xl font-semibold text-blue-700 hover:text-blue-500 hover:tracking-wide transition-all underline"
          >
            Official Git Book
          </a>

          <img
            src="../assets/book.jpg"
            class="w-56 sm:w-64 aspect-[0.7] mx-auto rounded-xl shadow-lg"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}

.collapse-enter-to,
.collapse-leave-from {
  max-height: 300px;
  opacity: 1;
}

.collapse-enter-active,
.collapse-leave-active {
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease;
  overflow: hidden;
}
</style>
