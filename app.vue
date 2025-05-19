<template>
  <div class="main">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="person-card rounded-xl shadow-md overflow-hidden bg-white flex flex-col"
      >
        <!-- Фото/фон-заглушка с динамичным цветом -->
        <div
          class="aspect-[16/9] w-full"
          :style="{ backgroundColor: color }"
        ></div>

        <div class="p-4 flex flex-col justify-between flex-1">
          <h3 class="text-lg font-semibold text-gray-800">Новый Орлеан</h3>
          <p class="text-sm text-gray-500 mb-2">город суеты</p>
          <p class="text-xs text-gray-600 flex-1">
            Один из самых влиятельных городов XX века, теория относительности.
          </p>
          <div class="mt-3">
            <button class="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      colors: [
        '#f87171', '#fb923c', '#facc15', '#4ade80', '#60a5fa',
        '#a78bfa', '#f472b6', '#34d399', '#fcd34d', '#818cf8',
        '#fda4af', '#5eead4', '#f97316', '#10b981', '#3b82f6',
        '#8b5cf6', '#ec4899', '#eab308', '#9333ea', '#14b8a6'
      ]
    }
  },
  mounted() {
    gsap.utils.toArray('.person-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: index * 0.03,
        ease: 'power2.out',
      })
    })
  }
}
</script>





<style>
:root {
  --green: #28a745;
  --light: #ffffff;
}

.vibrate {
  display: inline-block;
  animation: vibrate 0.5s linear infinite;
}

.main {
  background-color: black;
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
}


body, html {
  display: flex;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  overflow: visible; /* временно убрать hidden */
  background-color: black;
}

.box {
  display: block;
   width: 75px;
  height: 75px;
  border-radius: 12px;
  display: flex;
    opacity: 1;
  visibility: visible;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--green);
  font-weight: 600;
  color: var(--light);
}
.green {
  background-color: var(--green);
}
@keyframes vibrate {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
</style>
