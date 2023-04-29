<script setup lang="ts">
// 第一引数＝キー（任意）
const { data: posts, error } = await useAsyncData('posts', () => $fetch('https://jsonplaceholder.typicode.com/posts/'))
console.log(useNuxtApp().payload.data)

// $fetch
// const data = await $fetch('/api/user', {
//   method: 'POST',
//   body: { name: 'John Doe' }
// })
</script>

<template>
  <div>
    <p v-if="error">{{ error }}</p>
    <ul>
      <li v-for="post in posts" :key="post['id']">{{ post['title'] }}</li>
    </ul>
  </div>
</template>