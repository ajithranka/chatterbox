<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} · Chatterbox` : `Chatterbox`),
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <AppIconSpritesheet />
  </NuxtLayout>
</template>
