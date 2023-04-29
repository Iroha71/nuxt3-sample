<template>
  <h1>ユーザID: {{ $route.params.id }}, {{ id }}</h1>
</template>

<script setup lang="ts">
const router = useRoute()
const id: string | string[] = router.params.id
</script>