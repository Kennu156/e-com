<script setup>
import { ref, onMounted } from 'vue';
import { Transition } from 'vue';
import Footer from '../components/Footer.vue';
import navigation from '../components/navigation.vue';

const isVisible = ref(false);
const animatedText = ref("");
const fullText = "Web Designer\n& Developer"; 
const typingSpeed = 150;

const cardsVisible = ref(false);
const logosVisible = ref(false);
const workVisible = ref(false);

const typeText = async () => {
  for (let i = 0; i <= fullText.length; i++) {
    animatedText.value = fullText.slice(0, i);
    await new Promise((resolve) => setTimeout(resolve, typingSpeed));
  }
};

onMounted(() => {
  isVisible.value = true;

  typeText();

  const observerOptions = {
    threshold: 0.2,
  };

  const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cardsVisible.value = true;
      }
    });
  }, observerOptions);

  const logosObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        logosVisible.value = true;
      }
    });
  }, observerOptions);

  const workObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        workVisible.value = true;
      }
    });
  }, observerOptions);

  const cardsSection = document.querySelector('#services-cards');
  const logosSection = document.querySelector('#logos-section');
  const workSection = document.querySelector('#work-section');

  if (cardsSection) cardsObserver.observe(cardsSection);
  if (logosSection) logosObserver.observe(logosSection);
  if (workSection) workObserver.observe(workSection);
});
</script>

<template>
  <section 
    class="relative min-h-screen bg-cover bg-center bg-no-repeat pt-4 md:pt-9 bg-slate-900" 
    style="background-image: url('src/views/img/');"
  >
    <Transition enter-active-class="transition duration-1000 ease-out" enter-from-class="transform -translate-y-10 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
      <navigation />
    </Transition>

    <Transition
      enter-active-class="transition duration-1000 delay-500 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100">

      <div v-if="isVisible" class="flex justify-center items-center h-full mt-20 md:mt-44 flex-col px-4">
        <h1 class="text-emerald-400 text-4xl md:text-7xl lg:text-9xl font-satoshi text-center whitespace-pre-line">
          {{ animatedText }}
        </h1>
      </div>
    </Transition>
  </section>

  <section id="logos-section" class="bg-slate-900 text-emerald-400 overflow-hidden pt-44">
    <div id="services-cards" class="px-4 pb-12">
      <Transition
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform translate-y-10 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100">

        <div v-if="cardsVisible" class="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
          <div class="bg-slate-800 p-8 md:p-14 border-solid border-2 border-emerald-400 hover:transform hover:scale-105 transition-transform duration-300">
            <p>01</p>
            <h1 class="text-emerald-400 text-xl md:text-2xl font-satoshi">WEB DESIGN</h1>
            <p class="text-emerald-200 text-base md:text-lg font-satoshi text-opacity-85">
              Visually stunning web designs that<br> captivate your audience by blending your<br> brand voice and customer needs.
            </p>
          </div>

          <div class="bg-slate-800 p-8 md:p-14 border-solid border-2 border-emerald-400 hover:transform hover:scale-105 transition-transform duration-300">
            <p>02</p>
            <h1 class="text-emerald-400 text-xl md:text-2xl font-satoshi">DEVELOPMENT</h1>
            <p class="text-emerald-200 text-base md:text-lg font-satoshi text-opacity-85">
              Get custom web development solutions that<br> are tailored to your specifications, designed<br> to deliver a flawless user experience.
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </section>

  <section id="work-section" class="bg-slate-900 text-emerald-400 pt-24 md:pt-48 font-satoshi px-4 md:px-20">
    <Transition
      enter-active-class="transition duration-1000 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100">
      
      <div v-if="workVisible">
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 class="text-4xl md:text-7xl mb-4 md:mb-0">Selected <span class="italic">Work</span></h1>
          <a href="/work" class="flex flex-row items-center cursor-pointer hover:text-emerald-300 transition-colors duration-300">
            <img src="./img/Button Text Icon.svg" alt="" class="mr-2">SEE ALL
          </a>
        </div>
        <div class="w-full grid grid-cols-2 gap-6">
          <img src="./img/Grid.png" alt="" class="">
          <img src="./img/Grid (1).png" alt="" class="">
          <img src="./img/Grid (3).png" alt="" class="">
          <img src="./img/Grid (2).png" alt="" class="">
        </div>
      </div>
    </Transition>
  </section>

  <section class="text-emerald-400 font-satoshi bg-slate-900 pt-44">
    <h1 class="text-9xl italic flex-row flex justify-around">Ken-Martti Paju</h1>
    <p class="text-xl pt-44 flex text-center justify-center text-emerald-200">Hi, I'm Ken-Martti Paju - a student studying web design and programming.<br> I'm passionate about creating unique and effective web sites , and I love my speciality.<br> Let's work together to bring your vision to life! </p>
    <a href="https://github.com/Kennu156"><img class="mx-auto mt-10 pb-20" src="./img/github-mark-white.svg" alt=""></a>
  </section>

  <div class="pt-12 bg-slate-800"></div>
  <Footer/>
</template>

<style>
.font-satoshi {
  font-family: 'Satoshi', sans-serif;
}
</style>