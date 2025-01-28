<script setup>
import Footer from '../components/Footer.vue';
import Navigation from '../components/navigation.vue';
</script>

<template>
  <div class="bg-slate-900 pt-7">
    <Navigation />
  </div>

  <section class="bg-slate-900 text-emerald-400 pt-24 md:pt-48 px-4 md:px-20 font-satoshi pb-20">
    <div class="text-center mb-8">
      <h1 class="text-4xl md:text-7xl mb-4">Work</h1>
      <p class="text-base md:text-xl opacity-75">My latest web design projects</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <a href="https://github.com/robinmihkelson/Ametikooli-projekt-grupp-2-2023" target="_blank" class="group cursor-pointer relative overflow-hidden bg-slate-900 rounded-lg shadow-xl hover:scale-105 transform transition duration-300">
        <img src="./img/image45.png" alt="Space" class="w-full h-full object-cover group-hover:brightness-75 transition duration-300" />
        <div class="fixed inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div class="text-center">
            <h2 class="text-2xl text-emerald-500">Saw X</h2>
            <p class="text-emerald-500">WEB DESIGN</p>
          </div>
        </div>
      </a>
      <div class="bg-slate-800 text-emerald-400 rounded-lg p-4 shadow-xl">
        <h3 class="text-3xl font-bold mb-2">Self-Analysis</h3>
        <p class="text-xl"><strong>Situation:</strong> IT project at Kuressaare Ametikool</p>
        <p class="text-xl"><strong>Task:</strong> We had to create a webpage for a film.</p>
        <p class="text-xl"><strong>Activities:</strong> In the team, I created the Figma design and wrote the HTML and CSS code.</p>
        <p class="text-xl"><strong>Results:</strong> I gained a good understanding of Figma, HTML, and CSS by actually using them.</p>
        <p class="text-xl"><strong>Reflection:</strong> This is a very effective way to learn professional skills. In my opinion, I did very well, considering that my skills at the time were quite limited. If I remember correctly, the teachers graded it positively. I don't think I would do anything differently. I have also applied these same skills in other projects and lessons. I feel like I still have a lot to learn.</p>
      </div>

      <a href="https://github.com/mariliis01/disainimajaka-laenutus-rakendus" target="_blank" class="group cursor-pointer relative overflow-hidden bg-slate-900 rounded-lg shadow-xl hover:scale-105 transform transition duration-300">
        <img src="./img/image34.png" alt="Nova" class="w-full h-full object-cover group-hover:brightness-75 transition duration-300" />
        <div class="fixed inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div class="text-center">
            <h2 class="text-2xl text-black">Rental Application</h2>
            <p class="text-black">WEB DESIGN</p>
          </div>
        </div>
      </a>
      <div class="bg-slate-800 text-emerald-400 rounded-lg p-4 shadow-xl">
        <h3 class="text-3xl font-bold mb-2">Self-Analysis</h3>
        <p class="text-xl"><strong>Situation:</strong> IT project at Kuressaare Ametikool</p>
        <p class="text-xl"><strong>Task:</strong> We had to create a camera rental application.</p>
        <p class="text-xl"><strong>Activities:</strong> In the team, I helped with the Figma design and wrote the HTML, TailwindCSS and javascript code.</p>
        <p class="text-xl"><strong>Results:</strong> As a result, I gained a good understanding of TailwindCSS and javascript by actually using them.</p>
        <p class="text-xl"><strong>Reflection:</strong> This was a very effective way to increase my skills. In my opinion, I did okay, considering my skills were better by that point, but we couldn't finish due to database problems. I think I should've used javascript more. I have also applied these same skills in other projects and lessons.</p>
      </div>

      <a href="https://github.com/JakobVapper/e-commerce-product-inventory-system" target="_blank" class="group cursor-pointer relative overflow-hidden bg-slate-900 rounded-lg shadow-xl hover:scale-105 transform transition duration-300">
        <img src="./img/Grid.png" alt="Sonic" class="w-full h-full object-cover group-hover:brightness-75 transition duration-300" />
        <div class="fixed inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div class="text-center">
            <h2 class="text-2xl text-emerald-400">E-com inventory system</h2>
            <p class="text-emerald-400">WEB DESIGN</p>
          </div>
        </div>
      </a>
      <div class="bg-slate-800 text-emerald-400 rounded-lg p-4 shadow-xl">
        <h3 class="text-3xl font-bold mb-2">Self-Analysis</h3>
        <p class="text-xl"><strong>Situation:</strong> IT project at Kuressaare Ametikool</p>
        <p class="text-xl"><strong>Task:</strong> We had to create an e-com inventory system</p>
        <p class="text-xl"><strong>Activities:</strong> In the team, I created the Figma design and learnt how to use AI with my projects</p>
        <p class="text-xl"><strong>Results:</strong> I gained a good understanding of AI and it's uses by actually reading about it and using it the right way.</p>
        <p class="text-xl"><strong>Reflection:</strong> This is a very effective way to learn professional skills. In my opinion, I could've done more, but my skills on the subject were limited. We finished it but we actually couldn't get the design working. Something I could've done differently was to talk to the team more. I have also applied these same skills in other projects and lessons. I feel like I still have a lot to learn.</p>
      </div>
    </div>
  </section>

  <div class="bg-slate-950 pt-1"></div>
  <Footer/>
</template>

<style>
.font-satoshi {
  font-family: 'Satoshi', sans-serif;
}
</style>
