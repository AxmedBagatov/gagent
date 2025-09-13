<template>
  <div>
    <h1 v-if="category">Категория: {{ category.name }}</h1>

    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>

    <div v-else-if="category">
      <h2>Товары категории</h2>

      <ul v-if="category.products?.length">
        <li v-for="product in category.products" :key="product.id">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <strong>{{ product.price }} ₽</strong>

          <img
            v-if="product.images?.[0]?.url"
            :src="getImageUrl(product.images[0].url)"
            :alt="product.title"
            width="150"
          />
        </li>
      </ul>

      <p v-else>Товаров пока нет :)</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const { data: rawCategory, pending, error } = await useFetch(
  `${config.public.apiBase}/categories?filters[slug][$eq]=${route.params.slug}&populate[products][populate]=images&populate=image`
)

// берём первую категорию из массива
const category = computed(() => rawCategory.value?.data?.[0] ?? null)

const getImageUrl = (url) => `http://localhost:1337${url}`

watchEffect(() => {
  console.log("category:", category.value)
})
</script>
