<template>
  <div>
    <h1>Main page</h1>
    <button @click="enableCustomLayout">UpdateLayout</button>
    <div>
      count: {{ count }}
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
    <div>
      <h2>{{ $hello('World,') }}</h2>
    </div>
    <div>
      <img src="~/assets/7171dbc21a9c2e0e7f32c6b83eaa1f4b.jpg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
const { count, inc, dec } = useCounter(100)
// const route = useRoute()
// const enableCustomLayout = () => {
//   route.meta.layout = 'custom'
// }
</script>