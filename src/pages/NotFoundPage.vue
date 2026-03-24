<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goHome() {
  router.push("/");
}
</script>
<template>
  <section class="min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-8xl font-bold text-gray-100 mb-4">404</h1>
    <p class="text-3xl text-gray-200 mb-6">Page Not Found</p>
    <button
      @click="goHome"
      class="text-xl bg-[#f05030] text-white hover:text-[#f05030] px-6 py-3 rounded-lg hover:bg-transparent border-[#f05030] border-[3px] hover:tracking-wide hover:font-bold hover:-translate-x-1 hover:translate-y-1 transition-all duration-300"
    >
      Go to Home
    </button>
  </section>
</template>
