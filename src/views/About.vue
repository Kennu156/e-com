<script setup>
import Footer from '../components/Footer.vue';
import Navigation from '../components/navigation.vue';

</script>


<template>
    <div class="bg-slate-900 pt-7">
        <Navigation/>
    </div>
    <section class="min-h-screen bg-slate-900 text-emerald-400 font-satoshi px-6 py-12 flex items-center">
  <div class="w-full max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-6xl font-bold text-center mb-8">About Me</h1>
    <p class="text-lg md:text-xl text-center text-emerald-200 mb-8">
      Hi, I'm Ken-Martti Paju. A passionate web designer and developer with a focus on creating
      beautiful and functional websites that make an impact.
    </p>
    
    <div class="flex justify-center mb-12">
      <img 
        src="./img/anne2.jpg" 
        alt="Ken-Martti Paju" 
        class="rounded-lg shadow-lg w-full max-w-md md:max-w-lg hover:shadow-emerald-400/20 transition-shadow duration-300"
      />
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="p-6 bg-slate-800 rounded-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-colors duration-300">
        <h2 class="text-3xl font-semibold mb-4">My Mission</h2>
        <p class="text-base text-emerald-200">
          I strive to help businesses and individuals establish a strong online presence
          through innovative design and user-friendly development. Whether it's a portfolio,
          e-commerce site, or business page, I ensure that every project I work on reflects
          the unique voice and goals of my clients.
        </p>
      </div>
      
      <div class="p-6 bg-slate-800 rounded-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-colors duration-300">
        <h2 class="text-3xl font-semibold mb-4">My Skills</h2>
        <ul class="list-disc pl-5 text-emerald-200">
          <li class="mb-2">Responsive Web Design</li>
          <li class="mb-2">Front-End Development</li>
          <li class="mb-2">Back-End Development</li>
          <li class="mb-2">Content Creation</li>
        </ul>
      </div>
    </div>
    
    <div class="text-center mt-12">
      <a 
        href="/contact" 
        class="bg-emerald-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-300 transform hover:scale-[1.02] transition-all duration-300 inline-block"
      >
        Let's Collaborate
      </a>
    </div>
  </div>
</section>
  <div class="pt-1 bg-slate-950"></div>
  <Footer/>

</template>


<style scoped>
.font-satoshi {
  font-family: 'Satoshi', sans-serif;
}
</style>

