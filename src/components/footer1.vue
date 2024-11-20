<script setup>
const navigateTo = (route) => {
  router.push(route);
};

const goToAbout = () => navigateTo('/about');
const goToService = () => navigateTo('/service');
const goToWork = () => navigateTo('/work')

</script>

<template>
    <footer class="text-emerald-400 font-satoshi bg-slate-800">
        <section class="flex justify-around pt-24 pb-10">
    <div class="flex flex-col items-center">
      <h3 class="text-xl">Ken.</h3>
      <a class="flex items-center gap-2 mt-5 hover:scale-95 transition-transform duration-300" href="https://github.com/Kennu156">
        <img class="h-8 w-9 flex items-center" src="../views/img/github-mark-white.svg" alt="">Github
      </a>
    </div>
    <div class="flex flex-col text-center">
      <h3 class="text-emerald-400 text-xl mb-4"><strong>Pages</strong></h3>
      <button @click="goToService" class="mt-5 cursor-pointer hover:text-emerald-300 transition-colors duration-300">SERVICES</button>
      <button @click="goToWork" class="mt-4 cursor-pointer hover:text-emerald-300 transition-colors duration-300">WORK</button>
      <button @click="goToAbout" class="mt-4 cursor-pointer hover:text-emerald-300 transition-colors duration-300">ABOUT</button>
    </div>
  </section>
    </footer>
</template>