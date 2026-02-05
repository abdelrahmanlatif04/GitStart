<script setup>
import { defineProps } from "vue";
const props = defineProps(["role", "msg"]);
</script>

<template>
  <div class="dialogue">
    <p
      class="w-fit shadow-md pl-3 rounded my-2 relative"
      :class="role === 'bot' ? 'text-[#fa0]' : 'text-white'"
    >
      <span>
        <span class="relative pl-3">
          C:/Users/Gitstart/{{ role }}>
          <span
            :class="role === 'bot' ? 'bg-[#fa0]' : 'bg-white'"
            class="absolute left-0 top-0 w-1 h-full rounded-l-full"
          ></span>
        </span>
        <br v-if="role === 'bot'" />

        <span class="font-bold" v-html="msg"></span
      ></span>
    </p>
  </div>
</template>
