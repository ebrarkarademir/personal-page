<template>
  <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
    <About />
    <Experience />
    <Projects />
  </main>
</template>


<script setup>
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Experience from "../components/Experience.vue";
import { onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['sectionChange']);

const setActiveSection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      emit('sectionChange', entry.target.id);
    }
  });
};

onMounted(() => {
  const sections = document.querySelectorAll('main > section');
  const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5, // adjust as needed for sensitivity
  };

  const observer = new IntersectionObserver(setActiveSection, options);

  sections.forEach((section) => observer.observe(section));

  // Cleanup observer on unmount
  onUnmounted(() => {
    sections.forEach((section) => observer.unobserve(section));
  });
});
</script>
