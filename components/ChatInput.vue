<template>
  <div class="cb-relative">
    <div
      class="cb-pointer-events-none cb-absolute cb-bottom-0 cb-right-0 cb-top-0 cb-flex cb-items-center cb-pr-4"
    >
      <AppIcon name="send" class="cb-h-6 cb-w-6 cb-text-grey" />
    </div>
    <input
      type="text"
      class="cb-block cb-w-full cb-rounded-lg cb-border cb-border-grey-light cb-bg-grey-lightest cb-px-6 cb-py-4 cb-pr-12 cb-text-sm cb-text-primary focus:cb-border-blue-dark focus:cb-ring-blue-dark"
      placeholder="Send message to #channel-name"
    />
  </div>
</template>
