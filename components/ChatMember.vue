<script setup>
defineProps({
  member: {
    type: Object,
    required: true,
  },
})

const thumbnailClasses = [
  'cb-bg-blue-light cb-text-blue-dark',
  'cb-bg-pink-light cb-text-pink-dark',
  'cb-bg-orange-light cb-text-orange-dark',
  'cb-bg-green-light cb-text-green-dark',
]

const getRandomThumbnailClass = () => {
  const index = Math.floor(Math.random() * thumbnailClasses.length)
  return thumbnailClasses[index]
}
</script>

<template>
  <div
    class="cb-flex cb-cursor-pointer cb-space-x-6 cb-px-6 cb-py-4 hover:cb-bg-grey-lightest"
  >
    <div class="cb-relative">
      <img
        v-if="member.profile"
        class="cb-h-16 cb-w-16 cb-rounded-2xl cb-border cb-border-grey-lighter"
        :src="member.profile"
      />
      <div
        v-else
        class="cb-flex cb-h-16 cb-w-16 cb-items-center cb-justify-center cb-rounded-2xl cb-border cb-border-grey-lighter cb-bg-opacity-40 cb-text-lg cb-font-medium"
        :class="getRandomThumbnailClass()"
      >
        {{ extractInitials(member.name) }}
      </div>
      <span
        v-if="member.active"
        class="cb-absolute -cb-right-1 -cb-top-1 cb-h-3 cb-w-3 cb-rounded-full cb-bg-green-dark"
      />
    </div>

    <div>
      <div class="cb-flex cb-items-center cb-space-x-1">
        <h5 class="cb-font-medium cb-text-primary">
          {{ member.name }}
        </h5>
        <AppTooltip v-if="member.status" :tip="member.status">
          <AppIcon name="note" class="cb-h-4 cb-w-4 cb-text-grey-dark" />
        </AppTooltip>
      </div>
      <p class="cb-text-sm cb-text-secondary">{{ member.department }}</p>
      <p class="cb-text-sm cb-text-secondary">{{ member.location }}</p>
    </div>
  </div>
</template>
