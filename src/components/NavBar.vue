<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
const routes = useRouter().options.routes;
routes.pop();
</script>
<template>
  <nav class="py-3 text-lg bg-white text-[#010409] w-full">
    <ul class="flex justify-around items-center font-semibold">
      <li v-for="route in routes" :key="route.name">
        <router-link
          :to="route"
          class="flex gap-1.5 justify-center items-center hover:scale-110 hover:tracking-widest transition-all"
        >
          <Icon :icon="route.meta.icon" class="text-2xl" />
          <span class="hidden md:block">
            {{ route.name }}
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style>

</style>
