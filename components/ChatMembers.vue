<script setup>
import useChatStore from '~/stores/chat'

const chat = useChatStore()
</script>

<template>
  <div
    class="cb-h-full cb-w-80 cb-overflow-y-auto cb-border-l cb-border-grey-lighter cb-bg-primary cb-px-6 cb-py-4"
    :class="chat.showMembersPanel ? 'cb-block' : 'cb-hidden'"
    tabindex="-1"
    aria-labelledby="members-panel"
  >
    <h1>Members panel</h1>
  </div>
</template>
