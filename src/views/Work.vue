<script setup>
import Footer from '../components/Footer.vue';
import Navigation from '../components/navigation.vue';



</script>


<template>
    <div class="bg-slate-900 pt-7">
    <Navigation/>
    </div>

    <section class="bg-slate-900 text-emerald-400 pt-24 md:pt-48 px-4 md:px-20 font-satoshi pb-20">
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-7xl mb-4">Work</h1>
        <p class="text-base md:text-xl opacity-75">My latest web design projects</p>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="group cursor-pointer relative overflow-hidden bg-slate-900 rounded-lg shadow-xl hover:scale-105 transform transition duration-300">
        <img src="./img/image45.png" alt="Space" class="w-full h-full object-cover group-hover:brightness-75 transition duration-300">
          <div class="fixed inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div class="text-center">
                <a href="https://github.com/robinmihkelson/Ametikooli-projekt-grupp-2-2023"><h2 class="text-2xl text-emerald-500">Saw X</h2>
              <p class="text-emerald-500">WEB DESIGN</p></a>

            </div>
          </div>
        </div>
  
        <div class="group cursor-pointer relative overflow-hidden bg-slate-900 rounded-lg shadow-xl hover:scale-105 transform transition duration-300">
          <a href="https://github.com/mariliis01/disainimajaka-laenutus-rakendus"><img src="./img/image34.png" alt="Nova" class="w-full h-full object-cover group-hover:brightness-75 transition duration-300"></a>
          <div class="fixed inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div class="text-center">
              <h2 class="text-2xl text-black">Rental Application</h2>
              <p class="text-black">WEB DESIGN</p>
            </div>
          </div>
        </div>
  
        <div class="group cursor-pointer relative overflow-hidden bg-slate-900 rounded-lg shadow-xl hover:scale-105 transform transition duration-300">
          <a href="https://github.com/JakobVapper/e-commerce-product-inventory-system"><img src="./img/Grid.png" alt="Sonic" class="w-full h-full object-cover group-hover:brightness-75 transition duration-300"></a>
          <div class="fixed inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div class="text-center">
              <h2 class="text-2xl text-emerald-400">E-com inventory system</h2>
              <p class="text-emerald-400">WEB DESIGN</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </template>
  

<style>
.font-satoshi {
  font-family: 'Satoshi', sans-serif;
}
</style>