<template>
  <div class="cb-flex cb-flex-grow cb-flex-wrap">
    <ChatSidebar class="cb-flex-grow cb-basis-64" />
    <main
      class="cb-flex cb-min-w-[50%] cb-flex-grow-[999] cb-basis-0 cb-flex-col"
    >
      <ChatHeader />
      <ChatContents class="cb-flex-grow" />
    </main>
  </div>
</template>
