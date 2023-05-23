<script setup>
import useChatStore from '~/stores/chat'

const chat = useChatStore()
</script>

<template>
  <header
    class="cb-flex cb-items-center cb-justify-between cb-border-b cb-border-grey-lighter cb-bg-primary cb-px-6 cb-py-3"
  >
    <h2 class="cb-font-medium">#channel-name</h2>

    <div class="cb-flex cb-space-x-4">
      <div class="cb-flex cb-items-center">
        <AppIcon
          name="users"
          class="cb-h-8 cb-w-8 cb-cursor-pointer cb-transition cb-duration-150 cb-ease-out hover:cb-ease-in"
          :class="
            chat.showMembersPanel
              ? 'cb-text-grey-darker'
              : 'cb-text-grey-light hover:cb-text-grey-dark'
          "
          @click="chat.toggleMembersPanel()"
        />
        <AppBadge class="cb-ml-0">
          {{ chat.memberCount }}
        </AppBadge>
      </div>
    </div>
  </header>
</template>
