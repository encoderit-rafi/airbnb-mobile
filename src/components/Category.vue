<template>
  <button
    class="group border-b text-[#717171] focus:text-black focus:!border-b-black focus:!border-b-[2px]"
  >
    <div
      class="mt-3 mb-[10px] py-1 flex flex-col gap-1 items-center justify-center"
    >
      <slot />
      <span class="text-xs font-semibold">Lakefront</span>
    </div>
  </button>
</template>
