<script setup>
const navigateTo = (route) => {
  router.push(route);
};

const goToAbout = () => navigateTo('/about');
const goToService = () => navigateTo('/service');
const goToWork = () => navigateTo('/work')

</script>

<template>
    <footer class="text-emerald-400 font-satoshi bg-slate-600">
      <section class="flex justify-evenly pt-32 bg-slate-600">
    <div class="flex flex-col items-center">
      <h3 class="text-2xl">Ken.</h3>
      <a class="flex text-xl items-center gap-2 mt-5 hover:scale-95 transition-transform duration-300" href="https://github.com/Kennu156">
        <img class="h-8 w-9 ml-2 flex items-center" src="../views/img/github-mark-white.svg" alt="">Github
      </a>
    </div>
    <div class="flex flex-col text-center mb-10">
      <h3 class="text-emerald-400 text-2xl mb-4"><strong>Pages</strong></h3>
      <a href="/service"><button @click="goToService" class="mt-5 text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300">SERVICES</button></a>
      <a href="/work"><button @click="goToWork" class="mt-4 text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300">WORK</button></a>
      <a href="/about"><button @click="goToAbout" class="mt-4 text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300">ABOUT</button></a>
      <a href="/contact"><button @click="goToAbout" class="mt-4 text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300">CONTACT</button></a>
    </div>
  </section>
    </footer>
</template>