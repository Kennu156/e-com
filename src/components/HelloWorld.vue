<script setup>
import { ref } from 'vue'


const count = ref(0)
</script>

<template>
    <section class="relative h-screen bg-cover bg-center bg-no-repeat pt-9" style="background-image: url('src/components/img/92193e8494e9f65bb282719c0ddbedbe.png');">
      <div class="flex flex-col sm:flex-row justify-between bg-slate-900 text-[#DAC5A7] p-3 items-center w-full sm:w-1/3 mx-auto rounded-sm border-[#DAC5A7] border-solid border-2">
        <img src="./img/arik..png" alt="Logo" class="w-16 mb-2 sm:mb-0 ml-3">
        <div class="flex flex-wrap justify-center">
          <h2 class="mr-5">SERVICES</h2>
          <h2 class="mr-5">WORK</h2>
          <h2 class="mr-5">ABOUT</h2>
          <h2 class="mr-5">BLOG</h2>
          <h2 class="mr-5">PAGES</h2>
        </div>
        <button class="bg-[#DAC5A7] text-black p-2 font-satoshi rounded-sm mt-2 sm:mt-0">LET'S TALK</button>
      </div>

      <div class="flex justify-center items-center h-full mt-44 flex-col">
        <h1 class="text-[#DAC5A7] text-5xl sm:text-9xl font-satoshi text-center">Web Designer<br><span class="italic">& Developer</span></h1>
        <p class="text-[#DAC5A7] text-opacity-15 font-satoshi text-center pt-3 text-2xl">Premium web design, development, and SEO<br> services to help your business stand out.</p>
      </div>
    </section>

    <section class="bg-black text-[#DAC5A7]">
      <div class="flex flex-row justify-center items-center h-full pt-24 pb-14">
        <img class="mr-20" src="./img/logo (6).svg" alt="">
        <img class="mr-20" src="./img/logo.svg" alt="">
        <img class="mr-20" src="./img/logo (2).svg" alt="">
        <img class="mr-20" src="./img/logo (3).svg" alt="">
        <img class="mr-20" src="./img/logo (4).svg" alt="">
        <img class="mr-20" src="./img/logo (5).svg" alt="">
      </div>
      <div class="flex flex-row">
        <div class="bg-slate-950 p-16 border-solid border-2 border-[#DAC5A7]"><p>01</p>
          <h1 class="text-[#DAC5A7] text-2xl font-satoshi">WEB DESIGN</h1>
          <p class="text-[#DAC5A7] text-lg font-satoshi text-opacity-65">Visually stunning web designs that<br> captivate your audience by blending your<br> brand voice and customer needs.</p>
        </div>
      </div>
      
    </section>



</template>
