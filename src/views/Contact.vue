  <script setup>
  import { ref } from 'vue';
  import navigation from '../components/navigation.vue';
  import Footer1 from '../components/footer1.vue';
  
  const form = ref({
    name: '',
    email: '',
    message: '',
  });
  
  </script>
  


<template>
<div class="bg-slate-900 pt-7">
    <navigation/>
</div>


<section class="min-h-screen bg-slate-900 text-emerald-400 font-satoshi flex items-center justify-center px-6 py-12 pt-20">
  <div class="w-full max-w-xl bg-slate-800 p-8 rounded-lg shadow-lg border border-emerald-400">
    <h1 class="text-4xl font-bold text-center mb-6">Get in Touch</h1>
    <p class="text-center text-emerald-200 mb-8">
      Have a project or collaboration in mind? Fill out the form below, and I'll get back to you as soon as possible.
    </p>
    
    <form action="https://formspree.io/f/xwpkqqnk" method="POST">
      <div class="mb-6">
        <label for="name" class="block text-sm font-medium mb-2">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="w-full p-3 border border-emerald-400 rounded bg-slate-900 text-emerald-100 placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
          placeholder="Enter your name"
          required
        />
      </div>
      
      <div class="mb-6">
        <label for="email" class="block text-sm font-medium mb-2">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full p-3 border border-emerald-400 rounded bg-slate-900 text-emerald-100 placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div class="mb-6">
        <label for="message" class="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          id="message"
          v-model="form.message"
          rows="5"
          class="w-full p-3 border border-emerald-400 rounded bg-slate-900 text-emerald-100 placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300 resize-none"
          placeholder="Write your message"
          required
        >
        </textarea>
      </div>
      
      <button 
        type="submit" 
        class="w-full bg-emerald-400 text-slate-900 py-3 rounded-lg hover:bg-emerald-300 transform hover:scale-[1.02] transition-all duration-300 font-medium"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
    <div class="pt-1 bg-slate-950"></div>
    <Footer1/>

  </template>
  
  <style scoped>
  .font-satoshi {
    font-family: 'Satoshi', sans-serif;
  }
  </style>
  