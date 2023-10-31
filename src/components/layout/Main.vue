<template>
  <main class="flex flex-col px-6 mt-6 mb-8 space-y-10">
    <BasePadding>
      <BaseGrid>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </BaseGrid>
      <div class="flex flex-col space-y-4 items-center my-10">
        <span class="text-xl">Continue exploring amazing pools</span>
        <button class="bg-black rounded-lg py-2 px-5 text-white">
          Show more
        </button>
      </div>
    </BasePadding>
  </main>
</template>

<script setup>
import PropertyCard from "../PropertyCard.vue";
import BasePadding from "../base/BasePadding.vue";
import BaseGrid from "../base/BaseGrid.vue";
</script>
