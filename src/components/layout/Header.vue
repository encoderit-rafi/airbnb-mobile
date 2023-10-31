<template>
  <header class="sticky top-0 z-10 bg-white">
    <BasePadding class="border">
      <div class="flex items-center justify-between">
        <Logo fill="#ef4444" />
        <BaseElevatedButton>
          <div class="w-full h-full flex space-x-4 pl-3 items-center">
            <span class="font-medium text-sm text-gray-800">Anywhere</span>
            <span class="w-[1px] h-6 bg-gray-300"></span>

            <span class="font-medium text-sm text-gray-800">Any week</span>
            <span class="w-[1px] h-6 bg-gray-300"></span>
            <span class="font-light text-sm text-gray-500">Any guests</span>
            <span class="bg-[#ef4444] rounded-full p-3"><Search /></span>
          </div>
        </BaseElevatedButton>
        <div class="flex space-x-2 items-center">
          <BaseBasicButton class="h-full">
            <span class="font-medium text-sm text-gray-700"
              >Airbnb your home</span
            >
          </BaseBasicButton>
          <v-btn fab flat icon size="small">
            <World />
          </v-btn>
          <BaseElevatedButton>
            <div class="flex space-x-3 pl-1 items-center">
              <Menu />
              <v-icon class="text-gray-600" size="large"
                >mdi-account-circle</v-icon
              >
            </div>
          </BaseElevatedButton>
        </div>
      </div>
    </BasePadding>
    <BasePadding class="pb-0 shadow-md">
      <div class="flex items-center space-x-2">
        <div
          class="flex-1 flex items-center space-x-7 overflow-x-auto flex-nowrap scroll-smooth"
        >
          <Category v-for="category in categories" :key="category.url">
            <img
              :src="category.url"
              alt=""
              width="32"
              height="32"
              class="opacity-50 group-focus:opacity-100"
            />
            <span class="text-xs font-semibold">{{ category.title }}</span>
          </Category>
        </div>
        <button
          type="button"
          class="px-3 py-2 border rounded-md flex items-center space-x-2"
          @click="dialogFilter = true"
        >
          <Filter />
          <span class="text-gray-500">filter</span>
        </button>
      </div>
    </BasePadding>
    <!-- <div class="px-6 pt-3 shadow-sm">
      <div class="flex items-center gap-3">
        <div
          class="flex-1 rounded-full border-[1px] shadow-md px-5 py-2 flex gap-4 items-center cursor-pointer"
          @click="dialogSearch = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style="
              display: block;
              height: 20px;
              width: 20px;
              fill: currentColor;
            "
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
            ></path>
          </svg>

          <div>
            <p class="text-sm font-medium text-gray-800 capitalize">anywhere</p>

            <div class="flex items-center gap-2">
              <p class="text-xs tracking-wide text-gray-400">Any week</p>
              <div
                class="w-[2px] h-[2px] bg-gray-400 mt-[2px] rounded-full"
              ></div>
              <p class="text-xs tracking-wide text-gray-400">Add guests</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="p-3 border rounded-full"
          @click="dialogFilter = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 16px;
              width: 16px;
              stroke: currentcolor;
              stroke-width: 4;
              overflow: visible;
            "
          >
            <path
              fill="none"
              d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="flex items-center gap-4 overflow-x-auto flex-nowrap scroll-smooth"
      >
        <Category>
          <img
            src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
            alt=""
            width="32"
            height="32"
            class="opacity-50 group-focus:opacity-100"
          />
        </Category>
        <Category>
          <img
            src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg"
            alt=""
            width="32"
            height="32"
            class="opacity-50 group-focus:opacity-100"
          />
        </Category>
        <Category>
          <img
            src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
            alt=""
            width="32"
            height="32"
            class="opacity-50 group-focus:opacity-100"
          />
        </Category>
        <Category>
          <img
            src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
            alt=""
            width="32"
            height="32"
            class="opacity-50 group-focus:opacity-100"
          />
        </Category>
        <Category>
          <img
            src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
            alt=""
            width="32"
            height="32"
            class="opacity-50 group-focus:opacity-100"
          />
        </Category>
        <Category>
          <img
            src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
            alt=""
            width="32"
            height="32"
            class="opacity-50 group-focus:opacity-100"
          />
        </Category>
      </div>
    </div> -->
  </header>
  <!-- search -->
  <!-- <v-dialog
    v-model="dialogSearch"
    fullscreen
    scrollable
    transition="dialog-top-transition"
    class="max-w-sm"
  >
    <v-card class="!bg-gray-100">
      <v-card-title class="relative text-center">
        <div
          class="absolute border-2 border-gray-300 rounded-full left-5 w-fit"
        >
          <v-btn
            icon="mdi-close bg-white"
            @click="dialogSearch = false"
            flat
            size="x-small"
          ></v-btn>
        </div>
        <div class="mx-auto w-fit">Filters</div>
      </v-card-title>
      <v-card-text>
        <div class="space-y-4">
          <div
            class="p-5 bg-white shadow-lg rounded-xl one animate__delay-1s animate__animated animate__fadeInDown"
          >
            <h5 class="text-2xl font-bold tracking-tight text-slate-900">
              Where to?
            </h5>
            <div>
              <div class="relative py-2 mt-4 border rounded-md">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="
                      display: block;
                      fill: none;
                      height: 16px;
                      width: 16px;
                      stroke: currentcolor;
                      stroke-width: 4;
                      overflow: visible;
                    "
                  >
                    <path
                      fill="none"
                      d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
                    ></path>
                  </svg>
                </div>
                <input
                  class="pl-10 border-none outline-none"
                  placeholder="Search destinations
"
                />
              </div>
            </div>
            <div class="flex mt-4 space-x-3 overflow-x-auto !flex-nowrap">
              <button
                class="flex flex-col items-start justify-between w-28 text-start"
              >
                <img
                  alt=""
                  src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                  class="w-full rounded-md border overflow-hidden focus:!border-slate-950 hover:!border-slate-950"
                />
                <span class="mt-2 text-sm text-[#717171]">I'm flexible</span>
              </button>
              <button
                class="flex flex-col items-start justify-between w-28 text-start"
              >
                <img
                  alt=""
                  src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                  class="w-full rounded-md border overflow-hidden focus:!border-slate-950 hover:!border-slate-950"
                />
                <span class="mt-2 text-sm text-[#717171]">I'm flexible</span>
              </button>
             
            </div>
          </div>

          <div
            class="flex items-center justify-between p-5 delay-200 bg-white shadow-sm rounded-xl two animate__delay-1s animate__animated animate__fadeInDown"
          >
            <span class="text-[#717171]">When</span>
            <span>Add dates</span>
          </div>
          <div
            class="flex items-center justify-between p-5 delay-200 bg-white shadow-sm rounded-xl three animate__delay-1s animate__animated animate__fadeInDown"
          >
            <span class="text-[#717171]">Who</span>
            <span>Add dates</span>
          </div>
        </div>
      </v-card-text>
      <v-card-action class="border-t">
        <div class="flex items-center justify-between p-6">
          <span class="text-lg font-semibold underline">Clear all</span>
          <div
            class="flex items-center px-6 py-2 space-x-3 text-lg font-bold text-white bg-pink-600 rounded-lg w-fit"
          >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 16px;
                  width: 16px;
                  fill: currentcolor;
                "
              >
                <path
                  d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
                ></path>
              </svg>
            </div>
            <span>Search</span>
          </div>
          
        </div>
      </v-card-action>
    </v-card>
  </v-dialog> -->
  <!-- filter -->
  <!-- <v-dialog
    v-model="dialogFilter"
    fullscreen
    scrollable
    transition="dialog-bottom-transition"
    class="max-w-sm"
  >
    <v-card class="mt-3 rounded-t-xl">
      <v-card-title class="relative text-center border-b-2">
        <div class="absolute left-5">
          <v-icon @click="dialogFilter = false" size="small">mdi-close</v-icon>
        </div>
        <span class="font-bold capitalize">Filters</span>
      </v-card-title>
      <v-card-text>
        <v-list lines="two" subheader class="border-b">
          <h5 class="text-lg font-bold tracking-normal text-gray-600">
            Type of place
          </h5>
          <v-list-item
            title="Notifications"
            subtitle="Notify me about updates to apps or games that I downloaded"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="notifications"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item
            title="Sound"
            subtitle="Auto-update apps at any time. Data charges may apply"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="sound"></v-checkbox>
            </template>
          </v-list-item>
          <v-list-item
            title="Auto-add widgets"
            subtitle="Automatically add home screen widgets"
          >
            <template v-slot:prepend>
              <v-checkbox v-model="widgets"></v-checkbox>
            </template>
          </v-list-item>
        </v-list>

        <v-list lines="two" subheader class="border-b">
          <h5 class="text-lg font-bold tracking-normal text-gray-600">
            Rooms and beds
          </h5>
          <v-list-item class="my-4" title="Bedrooms">
            <div class="flex mt-2 space-x-4 overflow-x-auto flex-nowrap">
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                Any
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                1
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                2
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                3
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                4
              </button>
            </div>
          </v-list-item>
          <v-list-item class="my-4" title="Beds">
            <div class="flex mt-2 space-x-4 overflow-x-auto flex-nowrap">
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                Any
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                1
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                2
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                3
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                4
              </button>
            </div>
          </v-list-item>
          <v-list-item class="my-4" title="Bathrooms">
            <div class="flex mt-2 space-x-4 overflow-x-auto flex-nowrap">
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                Any
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                1
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                2
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                3
              </button>
              <button
                class="px-7 py-2 text-black rounded-full border focus:!text-gray-50 focus:bg-black hover:!border-slate-950"
              >
                4
              </button>
            </div>
          </v-list-item>
        </v-list>
        <v-list lines="two" subheader>
          <h5 class="text-lg font-bold tracking-normal text-gray-600">
            Property type
          </h5>
          <v-list-item class="my-4">
            <div class="grid grid-cols-2 gap-4 mt-2 overflow-x-auto">
              <button
                class="text-start p-4 text-black rounded-xl border focus:!border-slate-950 hover:!border-slate-950 h-40 flex flex-col items-start justify-between focus:!border-4 focus:bg-gray-100"
              >
                <img
                  src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg"
                  class="w-10"
                />
                <span class="font-bold">Home</span>
              </button>
              <button
                class="text-start p-4 text-black rounded-xl border focus:!border-slate-950 hover:!border-slate-950 h-40 flex flex-col items-start justify-between focus:!border-4 focus:bg-gray-100"
              >
                <img
                  src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg"
                  class="w-10"
                />
                <span class="font-bold">Home</span>
              </button>
              <button
                class="text-start p-4 text-black rounded-xl border focus:!border-slate-950 hover:!border-slate-950 h-40 flex flex-col items-start justify-between focus:!border-4 focus:bg-gray-100"
              >
                <img
                  src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg"
                  class="w-10"
                />
                <span class="font-bold">Home</span>
              </button>
              <button
                class="text-start p-4 text-black rounded-xl border focus:!border-slate-950 hover:!border-slate-950 h-40 flex flex-col items-start justify-between focus:!border-4 focus:bg-gray-100"
              >
                <img
                  src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg"
                  class="w-10"
                />
                <span class="font-bold">Home</span>
              </button>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-action class="border-t">
        <div class="flex items-center justify-between p-6">
          <span class="text-lg font-semibold underline">Clear all</span>
          <span
            class="px-6 py-2 text-lg font-bold text-white bg-black rounded-lg"
            >show 413 stays</span
          >
        </div>
      </v-card-action>
    </v-card>
  </v-dialog> -->
</template>

<script setup>
import Logo from "../../assests/icons/Logo.vue";
import Menu from "../../assests/icons/Menu.vue";
import Filter from "../../assests/icons/Filter.vue";
import World from "../../assests/icons/World.vue";
import Search from "../../assests/icons/Search.vue";
import BaseBasicButton from "../base/BaseBasicButton.vue";
import BasePadding from "../base/BasePadding.vue";
import BaseElevatedButton from "../base/BaseElevatedButton.vue";
import { ref } from "vue";
import Category from "../Category.vue";

const dialogFilter = ref(false);
const dialogSearch = ref(false);
const notifications = ref(false);
const sound = ref(true);
const widgets = ref(false);
const categories = ref([
  {
    url: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    title: "Iconic cities",
  },
  {
    url: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    title: "Rooms",
  },
  {
    url: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    title: "Lakefront",
  },
  {
    url: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    title: "Design",
  },
  {
    url: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    title: "Countryside",
  },
  {
    url: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    title: "Luxe",
  },
  {
    url: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    title: "Beachfront",
  },
  {
    url: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    title: "Tropical",
  },
  {
    url: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    title: "Camping",
  },
  {
    url: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    title: "Domes",
  },
  {
    url: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    title: "OMG!",
  },
  {
    url: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    title: "Cabins",
  },
  {
    url: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
    title: "Chef's kitchens",
  },
  {
    url: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    title: "Amazing pools",
  },
  {
    url: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    title: "Castles",
  },
  {
    url: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    title: "Trending",
  },
  {
    url: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    title: "Amazing views",
  },
  {
    url: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    title: "Iconic cities",
  },
  {
    url: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    title: "Rooms",
  },
  {
    url: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    title: "Lakefront",
  },
  {
    url: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    title: "Design",
  },
  {
    url: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    title: "Countryside",
  },
  {
    url: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    title: "Luxe",
  },
  {
    url: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    title: "Beachfront",
  },
  {
    url: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    title: "Tropical",
  },
  {
    url: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    title: "Camping",
  },
  {
    url: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    title: "Domes",
  },
  {
    url: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    title: "OMG!",
  },
  {
    url: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    title: "Cabins",
  },
  {
    url: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
    title: "Chef's kitchens",
  },
  {
    url: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    title: "Amazing pools",
  },
  {
    url: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    title: "Castles",
  },
  {
    url: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    title: "Trending",
  },
  {
    url: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    title: "Amazing views",
  },
]);
</script>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
.dialog-top-transition-enter-active,
.dialog-top-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
.one {
  --animate-delay: 0.2s;
}
.two {
  --animate-delay: 0.4s;
}
.three {
  --animate-delay: 0.6s;
}

.v-list-item {
  padding: 0 !important;
}
</style>
