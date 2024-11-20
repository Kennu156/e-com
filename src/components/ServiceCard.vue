  <script setup>
  defineProps({
    image: String,
    title: String,
    description: String,
  })
  </script>


<template>
    <div class="bg-[#1B1B1B] border-[#DAC5A7] border rounded-lg p-6 md:p-10">
      <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
      <p class="text-base text-opacity-70">{{ description }}</p>
    </div>
  </template>
  

  