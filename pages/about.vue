<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<script setup>
definePageMeta ({
  // このページだけレイアウトを非適用
  // layout: false,
  // layout: 'custom'

  middleware: 'auth',
})

function enableCustomLayout() {
  setPageLayout('custom')
}
</script>