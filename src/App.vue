<!-- src/App.vue -->
<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// import semua layout
import MainLayout from './layouts/MainLayout.vue'

const layouts = {
  MainLayout,
}

const route = useRoute()

// ambil layout dari komponen aktif
const layoutComponent = computed(() => {
  const matched = route.matched[0]
  const layoutName = matched?.components?.default?.__options?.layout
  return layouts[layoutName] || MainLayout
})
</script>
