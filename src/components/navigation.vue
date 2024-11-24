<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const menuVisible = ref(false);
const isScrolled = ref(false);
const lastScrollY = ref(0);
const isVisible = ref(true);
const router = useRouter();

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY.value && currentScrollY > 0) {
    isVisible.value = false;
  } else {
    isVisible.value = true;
  }
  
  isScrolled.value = currentScrollY > 50;
  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const navigateTo = (route) => {
  router.push(route);
  menuVisible.value = false;
};

const goToContact = () => navigateTo('/contact');
const goToHome = () => navigateTo('/');
const goToAbout = () => navigateTo('/about');
const goToService = () => navigateTo('/service');
const goToWork = () => navigateTo('/work');
</script>

<template>
  <div class="fixed w-full top-0 z-50 transition-all duration-300 flex justify-center" :class="{ 'translate-y-0': isVisible, '-translate-y-full': !isVisible }">
    <nav :class="['flex flex-wrap items-center', 'bg-slate-800 text-emerald-400', 'rounded-sm border-emerald-400 border-solid border-2 shadow-2xl', 'transition-all duration-300', 'w-full sm:w-2/5',
        isScrolled ? 'py-1 px-4' : 'p-4',]">
      <button @click="goToHome" :class="['italic break-words hidden sm:block', 'transition-all duration-300',
          isScrolled ? 'text-base' : 'text-lg']">
        <strong>KEN.</strong>
      </button>

      <div class="flex justify-between items-center w-full sm:hidden">
        <button @click="toggleMenu" class="z-20">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <button @click="goToContact" :class="[ 'bg-emerald-400 text-slate-900 font-satoshi rounded-sm', 'hover:bg-emerald-300 transition-colors duration-300', isScrolled ? 'p-1 text-sm' : 'p-2 text-base']">
          LET'S TALK
        </button>
      </div>
      <div
        v-if="menuVisible"
        class="fixed top-full left-0 w-full bg-slate-800 border-t-2 border-emerald-400 sm:hidden">
        <div class="flex flex-col p-4 gap-4">
          <button @click="goToHome" class="text-left cursor-pointer hover:text-emerald-300 transition-colors duration-300">
            HOME
          </button>
          <button @click="goToService" class="text-left cursor-pointer hover:text-emerald-300 transition-colors duration-300">
            SERVICES
          </button>
          <button @click="goToWork" class="text-left cursor-pointer hover:text-emerald-300 transition-colors duration-300">
            WORK
          </button>
          <button @click="goToAbout" class="text-left cursor-pointer hover:text-emerald-300 transition-colors duration-300">
            ABOUT
          </button>
        </div>
      </div>

      <div :class="[ 'hidden sm:flex flex-row items-center justify-center flex-grow gap-4', 'transition-all duration-300', isScrolled ? 'text-sm' : 'text-base' ]">
        <button @click="goToService" class="cursor-pointer hover:text-emerald-300 transition-colors duration-300">
          SERVICES
        </button>
        <button @click="goToWork" class="cursor-pointer hover:text-emerald-300 transition-colors duration-300">
          WORK
        </button>
        <button @click="goToAbout" class="cursor-pointer hover:text-emerald-300 transition-colors duration-300">
          ABOUT
        </button>
      </div>

      <button @click="goToContact" :class="[ 'hidden sm:block bg-emerald-400 text-slate-900 font-satoshi rounded-sm', 'hover:bg-emerald-300 transition-colors duration-300', isScrolled ? 'p-1 text-sm' : 'p-2 text-base' ]">
        LET'S TALK
      </button>
    </nav>
  </div>
</template>