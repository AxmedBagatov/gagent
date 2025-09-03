<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Главная</NuxtLink> |
        <NuxtLink to="/test">Тест</NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>
      <p>© 2025 Мой сайт</p>
    </footer>
  </div>
</template>

<style scoped>
header, footer {
  padding: 1rem;
  background-color: #f0f0f0;
}
main {
  padding: 2rem;
}
nav a {
  margin-right: 1rem;
}
</style>
