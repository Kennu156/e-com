<script setup>
import { ref, onMounted } from 'vue'
import { Transition } from 'vue'

const count = ref(0)
const isVisible = ref(false)
const cardsVisible = ref(false)
const logosVisible = ref(false)
const workVisible = ref(false)

onMounted(() => {
  isVisible.value = true
  
  const observerOptions = {
    threshold: 0.2
  }
  
  const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cardsVisible.value = true
      }
    })
  }, observerOptions)
  
  const logosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        logosVisible.value = true
      }
    })
  }, observerOptions)
  
  const workObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        workVisible.value = true
      }
    })
  }, observerOptions)
  
  const cardsSection = document.querySelector('#services-cards')
  const logosSection = document.querySelector('#logos-section')
  const workSection = document.querySelector('#work-section')
  
  if (cardsSection) cardsObserver.observe(cardsSection)
  if (logosSection) logosObserver.observe(logosSection)
  if (workSection) workObserver.observe(workSection)
})
</script>

<template>
  <section 
    class="relative min-h-screen bg-cover bg-center bg-no-repeat pt-4 md:pt-9" 
    style="background-image: url('src/components/img/92193e8494e9f65bb282719c0ddbedbe.png');"
  >
    <Transition
      enter-active-class="transition duration-1000 ease-out"
      enter-from-class="transform -translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
    >

   
      <nav 
        v-if="isVisible"
        class="flex flex-col sm:flex-row justify-between bg-slate-900 text-[#DAC5A7] p-3 items-center w-11/12 md:w-2/3 lg:w-1/3 mx-auto rounded-sm border-[#DAC5A7] border-solid border-2"
      >
        <p class="w-12 md:w-24 mb-2 sm:mb-0 ml-3 italic">KEN-MARTTI.</p>
        
        <button class="sm:hidden mb-2" @click="count = !count">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
        
        <div 
          class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0"
          :class="{ 'hidden sm:flex': !count, 'flex': count }"
        >
          <h2 class="mx-3 hover:text-white transition-colors duration-300">SERVICES</h2>
          <h2 class="mx-3 hover:text-white transition-colors duration-300">WORK</h2>
          <h2 class="mx-3 hover:text-white transition-colors duration-300">ABOUT</h2>
          <h2 class="mx-3 hover:text-white transition-colors duration-300">BLOG</h2>
          <h2 class="mx-3 hover:text-white transition-colors duration-300">PAGES</h2>
        </div>
        
        <button class="bg-[#DAC5A7] text-black p-2 font-satoshi rounded-sm mt-2 sm:mt-0 hover:bg-white transition-colors duration-300">
          LET'S TALK
        </button>
      </nav>
    </Transition>

    <Transition
      enter-active-class="transition duration-1000 delay-500 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
    >
      <div v-if="isVisible" class="flex justify-center items-center h-full mt-20 md:mt-44 flex-col px-4">
        <h1 class="text-[#DAC5A7] text-4xl md:text-7xl lg:text-9xl font-satoshi text-center">
          Web Designer<br><span class="italic">& Developer</span>
        </h1>
        <p class="text-[#DAC5A7] text-opacity-15 font-satoshi text-center pt-3 text-lg md:text-2xl">
          Premium web design, development, and SEO<br> services to help your business stand out.
        </p>
      </div>
    </Transition>
  </section>

  <section id="logos-section" class="bg-black text-[#DAC5A7] overflow-hidden">
    <Transition
      enter-active-class="transition duration-1000 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
    >
      <div v-if="logosVisible" class="flex flex-wrap justify-center items-center h-full pt-12 md:pt-24 pb-7 md:pb-14 gap-8 md:gap-20 px-4">
        <img class="w-24 md:w-auto" src="./img/logo (6).svg" alt="">
        <img class="w-24 md:w-auto" src="./img/logo.svg" alt="">
        <img class="w-24 md:w-auto" src="./img/logo (2).svg" alt="">
        <img class="w-24 md:w-auto" src="./img/logo (3).svg" alt="">
        <img class="w-24 md:w-auto" src="./img/logo (4).svg" alt="">
        <img class="w-24 md:w-auto" src="./img/logo (5).svg" alt="">
      </div>
    </Transition>

    <div id="services-cards" class="px-4 pb-12">
      <Transition
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="transform translate-y-10 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
      >
        <div v-if="cardsVisible" class="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
          <div class="bg-slate-950 p-8 md:p-14 border-solid border-2 border-[#DAC5A7] hover:transform hover:scale-105 transition-transform duration-300">
            <p>01</p>
            <h1 class="text-[#DAC5A7] text-xl md:text-2xl font-satoshi">WEB DESIGN</h1>
            <p class="text-[#DAC5A7] text-base md:text-lg font-satoshi text-opacity-65">
              Visually stunning web designs that<br> captivate your audience by blending your<br> brand voice and customer needs.
            </p>
            <div class="flex flex-row mt-10 items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <img src="./img/Button Text Icon.svg" alt=""> 
              <p>ABOUT WEBDESIGN</p>
            </div>
          </div>

          <div class="bg-slate-950 p-8 md:p-14 border-solid border-2 border-[#DAC5A7] hover:transform hover:scale-105 transition-transform duration-300">
            <p>02</p>
            <h1 class="text-[#DAC5A7] text-xl md:text-2xl font-satoshi">DEVELOPMENT</h1>
            <p class="text-[#DAC5A7] text-base md:text-lg font-satoshi text-opacity-65">
              Get custom web development solutions that<br> are tailored to your specifications, designed<br> to deliver a flawless user experience.
            </p>
            <div class="flex flex-row mt-10 items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <img src="./img/Button Text Icon.svg" alt=""> 
              <p>ABOUT WEBFLOW</p>
            </div>
          </div>

          <div class="bg-slate-950 p-8 md:p-14 border-solid border-2 border-[#DAC5A7] hover:transform hover:scale-105 transition-transform duration-300">
            <p>03</p>
            <h1 class="text-[#DAC5A7] text-xl md:text-2xl font-satoshi">CONTENT & SEO</h1>
            <p class="text-[#DAC5A7] text-base md:text-lg font-satoshi text-opacity-65">
              Proven SEO strategies that enhance your<br> online performance, bringing you to the<br> forefront of organic search results.
            </p>
            <div class="flex flex-row mt-10 items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              <img src="./img/Button Text Icon.svg" alt=""> 
              <p>ABOUT SEO</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>

  <section id="work-section" class="bg-black text-[#DAC5A7] pt-24 md:pt-48 font-satoshi px-4 md:px-20">
    <Transition
      enter-active-class="transition duration-1000 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
    >
      <div v-if="workVisible">
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 class="text-4xl md:text-7xl mb-4 md:mb-0">Selected <span class="italic">Work</span></h1>
          <p class="flex flex-row items-center cursor-pointer hover:text-white transition-colors duration-300">
            <img src="./img/Button Text Icon.svg" alt="" class="mr-2">SEE ALL
          </p>
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

  <section class="text-[#DAC5A7] font-satoshi bg-black pt-44">        
      <div class="justify-center items-center grid grid-cols-1">
        <p class="mb-5 flex flex-col text-center">THE PROCESS</p>
        <h1 class="text-8xl flex flex-col text-center">Your Website <span class="italic">in 5 steps</span></h1>
        <p class="text-center mt-6 opacity-35">Our process ensures that we create a Website<br> tailored to your business needs</p>
            
        
          <div class="justify-center flex felx-col">
              <img class="mt-12" src="./img/Badge.svg" alt="">
              <img class="" src="./img/Line.svg" alt="">
            </div>
            <div class="justify-center flex felx-col">
              <img class="col-start-" src="./img/Grid.svg" alt="">
              <div class="">
                
              </div>
            </div>
            <div class="justify-center flex felx-col">
              <img class="col-start-" src="./img/Grid (1).svg" alt="">
              <div class="">
                
              </div>
            </div>
            <div class="justify-center flex felx-col">
              <img class="col-start-" src="./img/Grid (2).svg" alt="">
              <div class="">
                
              </div>
            </div>
            <div class="justify-center flex felx-col">
              <img class="col-start-" src="./img/Grid (3).svg" alt="">
              <div class="">
                
              </div>
            </div>
            <div class="justify-center flex felx-col">
              <img class="col-start-" src="./img/Grid (4).svg" alt="">
              <div class="">
                
              </div>
            </div>
        </div>
  </section>

  <section class="text-[#DAC5A7] font-satoshi bg-black pt-44">
    <h1 class="text-9xl italic flex-row flex justify-around">Ken-Martti <img src="" alt="">Paju</h1>
    <p class="text-xl pt-44 flex text-center justify-center">Hi, I'm Ken-Martti Paju - a student studying web design and programming.<br> I'm passionate about creating unique and effective solutions using the computer, and I love my speciality.<br> Let's work together to bring your vision to life! </p>
    <img class="mx-auto mt-6 pb-20 " src="./img/instagram.svg" alt="">

  </section>

  <div class="pt-12 bg-neutral-800"></div>

  <footer class="text-[#DAC5A7] font-satoshi bg-neutral-900 pt-44">
    <h2></h2>
  </footer>
</template>

<style>
.font-satoshi {
  font-family: 'Satoshi', sans-serif;
}
</style>