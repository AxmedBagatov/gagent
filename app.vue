<template>
  <div class="p-4">
    <p class="text-xl text-gray-700">test test привет</p>
    <p class="vibrate text-2xl text-blue-500">CI/CD</p>
    <hr class="my-4">
    <p class="vibrate text-2xl text-blue-500">CI/CD</p>
    <hr class="my-4">
    <p class="vibrate text-2xl text-blue-500">CI/CD</p>
    <section>
  <div v-gsap.whenVisible.to="{ x: -300, start: 'top bottom', end: 'bottom top', scrub: 3.5 }">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
  <div v-gsap.whenVisible.to="{ x: 300, start: 'top bottom', end: 'bottom top', scrub: 3.5 }">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
</section>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<style scoped>
.vibrate {
  display: inline-block;
  animation: vibrate 0.5s linear infinite;
}

@keyframes vibrate {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
</style>
