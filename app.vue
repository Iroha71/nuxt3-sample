<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
/* 遷移時の値 */
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem)
}
</style>