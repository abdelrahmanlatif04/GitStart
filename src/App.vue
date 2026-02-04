<script setup>
import Contact from "./components/Contact.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="flex flex-col-reverse md:flex-col min-h-screen relative">
    <NavBar />
    <Contact />
    <router-view class="flex-1"></router-view>
  </div>
</template>
