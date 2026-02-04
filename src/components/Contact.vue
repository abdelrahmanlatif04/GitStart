<script setup>
import { Icon } from "@iconify/vue";

const url = "https://3bdellatiif.vercel.app/contact";
</script>

<template>
  <a
    class="absolute right-2 bottom-2 bg-white text-black w-14 aspect-square grid place-content-center rounded-full p-1 animate-levitate"
    :href="url"
    target="_blank"
  >
    <Icon icon="mdi:person" width="full"
  /></a>
</template>

<style></style>
