<template>
  <div>
    <p>test test привет</p>
    <p class="vibrate">CI/CD</p>
    <p class="vibrate">CI/CD</p>
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
