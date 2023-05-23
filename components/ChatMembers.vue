<script setup>
import useChatStore from '~/stores/chat'

const chat = useChatStore()
</script>

<template>
  <div
    class="cb-scrollbar cb-h-full cb-w-80 cb-overflow-y-auto cb-border-l cb-border-grey-lighter cb-bg-primary"
    :class="chat.showMembersPanel ? 'cb-block' : 'cb-hidden'"
    tabindex="-1"
    aria-labelledby="members-panel"
  >
    <div v-for="role in chat.memberRoles" :key="`role-${role}`" class="cb-my-4">
      <h4 class="cb-py-2 cb-text-center cb-text-xs cb-text-grey-darker">
        {{ role }}
        <AppBadge class="cb-ml-2">
          {{ chat.memberCountByRole(role) }}
        </AppBadge>
      </h4>
      <ChatMember
        v-for="member in chat.membersByRole(role)"
        :key="member.id"
        :member="member"
      />
    </div>
  </div>
</template>
