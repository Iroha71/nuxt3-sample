<template>
  <div>
    <ContentList v-slot="{ list }" :query="{ path: '/posts', sort: { date: -1 } }">
      <article v-for="page in list" :key="page._path">
        <NuxtLink :to="page._path">{{ page.title }}</NuxtLink>
      </article>
    </ContentList>
    <h1>Post</h1>
    <button @click="refresh()">再取得</button>
    <p v-if="error">{{ error }}</p>
    <ul>
      <li v-for="post in posts" :key="post['id']">
        {{ post['title'] }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// postsという別名を付ける
const { data: posts, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts/')
console.log(posts)
</script>