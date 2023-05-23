<template>
  <aside class="cb-border-b cb-border-r cb-border-grey-lighter cb-bg-primary">
    <div>
      <h2 class="cb-my-4 cb-select-none cb-px-6 cb-font-medium">
        {{ $t('chat.channels') }}
      </h2>
      <ul class="cb-text-secondary">
        <li
          class="cb-cursor-pointer cb-select-none cb-px-6 cb-py-3 hover:cb-bg-grey-lightest"
        >
          #channel-name
        </li>
        <li
          class="cb-cursor-pointer cb-select-none cb-px-6 cb-py-3 hover:cb-bg-grey-lightest"
        >
          #channel-name
        </li>
        <li
          class="cb-cursor-pointer cb-select-none cb-px-6 cb-py-3 hover:cb-bg-grey-lightest"
        >
          #channel-name
        </li>
      </ul>
    </div>
    <div>
      <h2 class="cb-my-4 cb-select-none cb-px-6 cb-font-medium">
        {{ $t('chat.directMessages') }}
      </h2>
      <ul class="cb-text-secondary">
        <li
          class="cb-cursor-pointer cb-select-none cb-px-6 cb-py-3 hover:cb-bg-grey-lightest"
        >
          @person
        </li>
        <li
          class="cb-cursor-pointer cb-select-none cb-px-6 cb-py-3 hover:cb-bg-grey-lightest"
        >
          @person
        </li>
        <li
          class="cb-cursor-pointer cb-select-none cb-px-6 cb-py-3 hover:cb-bg-grey-lightest"
        >
          @person
        </li>
      </ul>
    </div>
  </aside>
</template>
