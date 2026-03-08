<script setup>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="flex flex-col-reverse md:flex-col min-h-screen relative">
    <NavBar />
    <keep-alive>
      <router-view class="flex-1" />
    </keep-alive>
    <!-- <Footer /> -->
  </div>
</template>
