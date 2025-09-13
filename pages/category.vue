<template>
  <div>
    <h1>Категории</h1>

    <div v-if="pending">Загрузка категорий...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>

    <ul v-else-if="categories?.data?.length">
      <li v-for="category in categories.data" :key="category.id">
          <NuxtLink :to="`/catalog/${category.slug}`">
      <h3>{{ category.name }}</h3>
    </NuxtLink>
        <p>{{ category.description }}</p>

        <img
          v-if="category.image?.url"
          :src="getImageUrl(category.image.url)"
          :alt="category.name"
          width="200"
        />
      </li>
    </ul>

    <div v-else>Категорий пока нет</div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const { data: categories, pending, error } = await useFetch(
  `${config.public.apiBase}/categories?populate=image`
)

const getImageUrl = (url) => `http://localhost:1337${url}`

watchEffect(() => {
  console.log('categories:', categories.value)
})
</script>
