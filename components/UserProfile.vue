<script setup>
import useUserStore from '~/stores/user'

const user = useUserStore()

const initials = computed(() => extractInitials(user.name), [user])
</script>

<template>
  <span
    class="cb-flex cb-h-9 cb-w-9 cb-select-none cb-items-center cb-justify-center cb-rounded-full cb-bg-grey-lighter cb-text-grey-dark"
  >
    {{ initials }}
  </span>
</template>
