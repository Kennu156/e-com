  <script setup>
  import Footer from '../components/Footer.vue';
import Navigation from '../components/navigation.vue';
  </script>

<template>
    <div class="bg-slate-900 pt-7">
      <Navigation/>        
    </div>

    <section class="bg-slate-900 text-emerald-400 font-satoshi pt-24 md:pt-32 pb-16 text-center">
  <div class="container mx-auto">
    <h1 class="text-4xl md:text-6xl font-bold">
      Web Design <span class="italic text-emerald-200">& Framer</span>
    </h1>
    <p class="text-lg text-emerald-200 mt-4">
      Premium web design and development services to make your business stand out.
    </p>
    
    <div class="mt-32 grid grid-cols-2 md:grid-cols-2 gap-6 text-center">
      <div class="p-8 bg-slate-800 rounded-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
        <h3 class="text-4xl font-bold">4</h3>
        <p class="text-xl text-emerald-200">Projects</p>
      </div>
      <div class="p-8 bg-slate-800 rounded-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
        <h3 class="text-4xl font-bold">100%</h3>
        <p class="text-xl text-emerald-200">Satisfaction</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-slate-900 text-emerald-400 py-20">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
    <div class="bg-slate-800 p-8 rounded-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
      <h3 class="text-2xl font-bold mb-4">Transforming Your Ideas into Reality</h3>
      <p class="text-emerald-200">Description of the service and how it benefits clients.</p>
    </div>
    
    <div class="bg-slate-800 p-8 rounded-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
      <h3 class="text-2xl font-bold mb-4">Developing High-Performance Websites</h3>
      <p class="text-emerald-200">Description of the service and how it benefits clients.</p>
    </div>
  </div>
</section>
    <Footer/>
  </template>
  

  