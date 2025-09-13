<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Preloader from '@/components/ui/loader/preloader.vue'

const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})
</script>

<template>
  <ClientOnly>
    <SidebarProvider>
      <LayoutAppSidebar />
      <SidebarInset>
        <LayoutHeader />
        <div class="min-w-0 w-full flex-1 overflow-x-auto p-4 lg:p-6">
          <slot />
        </div>
      </SidebarInset>
    </SidebarProvider>
    <template #fallback>
      <Preloader />
    </template>
  </ClientOnly>
</template>
