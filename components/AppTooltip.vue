<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { createPopper } from '@popperjs/core'

const props = defineProps({
  tip: {
    type: String,
    required: true,
  },
  placement: {
    type: String,
    default: 'top',
  },
})

const containerRef = ref(null)
const tooltipRef = ref(null)
const popperInstance = ref(null)

const showTooltip = ref(false)

onMounted(() => {
  popperInstance.value = createPopper(containerRef.value, tooltipRef.value, {
    placement: props.placement,
    modifiers: [{ name: 'offset', options: { offset: [0, 4] } }],
  })
})

onBeforeUnmount(() => {
  popperInstance.value.destroy()
})
</script>

<template>
  <div
    ref="containerRef"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <slot />
    <div
      ref="tooltipRef"
      class="tooltip-container cb-select-none cb-rounded cb-bg-dark cb-p-2 cb-text-2xs cb-text-grey-lighter"
      :class="showTooltip ? 'cb-visible' : 'cb-invisible'"
    >
      {{ tip }}
    </div>
  </div>
</template>
