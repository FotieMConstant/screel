<template>
  <div
    style="background-size: cover"
    :style="{
      'background-image':
        'linear-gradient( to right, rgba(0,0,0, 0.55), #161B22 ), url(' +
        bgImage +
        ')',
    }"
    class="dark:bg-gray-800 dark:text-gray-50 text-sky-white bg-grayLightMode-100 p-5 rounded-curl cursor-pointer"
  >
    <div class="text-left">
      <div class="font-bold text-lg mb-1 leading-6">
        The Ultimate Software Platform for developers
      </div>
      <div class="text-sm">
        Deploy faster & scale easier with an application server that saves your
        team time & money.
      </div>
    </div>
    <div class="flex flex-row-reverse">
      <basicChip class="text-xs" text="AD" />
    </div>
  </div>
</template>

<script>
import basicChip from "@/components/modules/chips/basicChip.vue";

export default {
  name: "smallAdsCard",
  components: { basicChip },
  props: {
    bgImage: {
      type: String,
      default:
        "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-ar21.png",
    },
  },
};
</script>
<style lang="scss" scoped></style>
