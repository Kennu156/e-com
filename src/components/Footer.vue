<script setup>
const navigateTo = (route) => {
  router.push(route);
};

const goToContact = () => navigateTo('/contact');
const goToAbout = () => navigateTo('/about');
const goToService = () => navigateTo('/service');
const goToWork = () => navigateTo('/work')


</script>


<template>
<footer class="text-emerald-400 font-satoshi bg-slate-800">

  <section class=" pt-14 pb-20">
  <h2 class="text-lg text-center pb-6">PROJECT IN MIND?</h2>
  <h1 class="text-7xl text-center">Let's make your<br><span class="italic">Website shine</span></h1>
  <p class="text-center pt-4 text-emerald-200">Premium web design to <br>help your business stand out</p>
  <div class="flex justify-center mt-8">
    <a href="/contact">
      <button 
        @click="goToContact" 
        class="flex justify-around bg-emerald-400 text-slate-900 p-2 font-satoshi rounded-sm mt-2 sm:mt-0 hover:bg-emerald-300 transition-colors duration-300">
        GET IN TOUCH
      </button>
    </a>
  </div>
</section>

<section class="flex justify-evenly pt-32 bg-gradient-to-b from-slate-800 to-slate-700">
  <div class="flex flex-col items-center">
    <h3 class="text-2xl">Ken.</h3>
    <a class="flex text-xl items-center gap-2 mt-5 hover:scale-95 transition-transform duration-300" href="https://github.com/Kennu156">
      <img class="h-8 w-9 ml-2 flex items-center" src="../views/img/github-mark-white.svg" alt="">Github
    </a>
  </div>
  <div class="flex flex-col text-center mb-10">
    <h3 class="text-emerald-400 text-2xl mb-4"><strong>Pages</strong></h3>
    <a href="/service">
      <button @click="goToService" class="mt-5 text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300">
        SERVICES
      </button>
    </a>
    <a href="/work">
      <button @click="goToWork" class="mt-4 text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300">
        WORK
      </button></a>
    <a href="/about">
      <button @click="goToAbout" class="mt-4 text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300">
        ABOUT
      </button></a>
    <a href="/contact">
      <button @click="goToAbout" class="mt-4 text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300">
        CONTACT
      </button></a>
  </div>
</section>

</footer>
</template>