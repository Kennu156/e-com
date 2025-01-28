<script setup>
import { ref } from 'vue';
import Footer from '../components/Footer.vue';
import Navigation from '../components/navigation.vue';

const isDropdownOpen = ref(false);
const isSecondDropdownOpen = ref(false);
</script>

<template>
    <div class="bg-slate-900 pt-7">
        <Navigation/>
    </div>
    <section class="min-h-screen bg-slate-900 text-emerald-400 font-satoshi px-6 py-12 flex items-center pt-24">
        <div class="w-full max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold text-center mb-8">About Me</h1>
            <p class="text-lg md:text-xl text-center text-emerald-200 mb-8">
                Hi, I'm Ken-Martti Paju. A passionate web designer and developer with a focus on creating
                beautiful and functional websites that make an impact.
            </p>
            
            <div class="flex justify-center mb-12">
                <img src="./img/anne2.jpg" alt="" class="rounded-lg shadow-lg w-full max-w-md md:max-w-lg hover:shadow-emerald-400/20 transition-shadow duration-300"/>
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
                    class="bg-emerald-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-300 transform hover:scale-[1.02] transition-all duration-300 inline-block">
                    Let's Collaborate
                </a>
            </div>

            <div class="mt-16 bg-slate-800 p-6 rounded-lg shadow-lg border border-emerald-400/20">
                <div 
                    class="flex items-center justify-between cursor-pointer"
                    @click="isDropdownOpen = !isDropdownOpen">
                    <h2 class="text-3xl font-semibold mb-6">More About Me</h2>
                    <svg 
                        :class="isDropdownOpen ? 'transform rotate-180' : ''"
                        class="w-6 h-6 text-emerald-400 transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>

                <div v-if="isDropdownOpen">
                    <p class="text-lg text-emerald-200 mb-4">
                        Outside of coding, I enjoy playing volleyball, which helps me improve my teamwork skills and stay physically active. I also love spending time in the sauna, a perfect way to relax and recharge.
                    </p>
                    <p class="text-lg text-emerald-200 mb-4">
                        In my downtime, I indulge in computer games, a hobby that sharpens my logical thinking and reaction speed. Additionally, I enjoy social events and parties, creating unforgettable memories with friends.
                    </p>
                    <p class="text-lg text-emerald-200">
                        A good sense of humor is one of my defining traits. I believe positivity and laughter are essential in overcoming challenges and making everyday life more enjoyable.
                    </p>
                </div>
            </div>

            <div class="mt-8 bg-slate-800 p-6 rounded-lg shadow-lg border border-emerald-400/20">
                <div 
                    class="flex items-center justify-between cursor-pointer"
                    @click="isSecondDropdownOpen = !isSecondDropdownOpen">
                    <h2 class="text-3xl font-semibold mb-6">CV</h2>
                    <svg 
                        :class="isSecondDropdownOpen ? 'transform rotate-180' : ''"
                        class="w-6 h-6 text-emerald-400 transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>

                <div v-if="isSecondDropdownOpen">
                    <div class="mb-4">
                        <p class="text-lg text-emerald-200">
                            <strong>Name:</strong>  KEN-MARTTI PAJU <br>
                            <strong>Date of Birth:</strong>  18.01.2007 <br>
                            <strong>Address:</strong> Kuressaare <br>
                            <strong>Phone:</strong> +372 5191 9398 <br>
                            <strong>Email:</strong> kenmarttipaju@gmail.com <br>
                        </p>
                    </div>
                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-emerald-200">Education</h3>
                        <p class="text-lg text-emerald-200 mt-1">
                            2023 – Present: Kuressaare Ametikool, Junior Software Developer
                        </p>
                        <p class="text-lg text-emerald-200">
                            2014 – 2023: Kuressaare Nooruse School
                        </p>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-emerald-200">Additional</h3>
                        <p class="text-lg text-emerald-200 mt-1">
                            February 2024: Sillamäe Business Camp
                        </p>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-emerald-200">Work Experience</h3>
                        <p class="text-lg text-emerald-200 mt-2">
                            May 2024 – June 2024: FuncSys OÜ (Intern)
                        </p>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-emerald-200">Language Skills</h3>
                        <p class="text-lg text-emerald-200 mt-1">
                            Estonian - Native <br>
                            English - Good understanding, good speaking skills, good writing skills
                        </p>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-emerald-200">Skills</h3>
                        <ul class="list-disc pl-5 text-emerald-200 mt-2">
                            <li class="mb-2">Windows 10, XP, MS Office, Office365</li>
                            <li class="mb-2">VSCode, Ubuntu</li>
                        </ul>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-emerald-200">Hobbies</h3>
                        <p class="text-lg text-emerald-200 mt-1">
                            Volleyball, chess, gym, and disc-golf
                        </p>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-emerald-200">Personal Traits</h3>
                        <p class="text-lg text-emerald-200 mt-2">
                          Humorous, adaptable, responsible, friendly, collaborative, calm, logical
                        </p>
                    </div>

                    <div class="mb-4">
                        <h3 class="text-2xl font-semibold text-emerald-200">References</h3>
                        <ul class="list-disc pl-5 text-emerald-200 mt-1">
                            <li class="mb-2"><strong>Annes Lõbus</strong>, CEO of FuncSys OÜ</li>
                            <p>Phone: +372 5333 2895</p>
                            <li class="mb-2 mt-3"><strong>Robby Saukštelis</strong>, classmate</li>
                            <p>Phone: +372 583 7564</p>
                        </ul>
                    </div>
                </div>
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
