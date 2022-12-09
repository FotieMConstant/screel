<template>
  <!-- if dropdownShadowColor contains a value it means the dropdown is needed-->
  <span
    v-if="enableDropdownShadow"
    class="dark:bg-gray-700 bg-grayLightMode-200 dark:text-gray-300 text-grayLightMode-400 border border-blue-light shadow-sm shadow-blue-400 px-2 py-0.5 rounded-chip font-bold select-none cursor-pointer"
    style="
       {
        box-shadow: 1px 2px 18px 3px rgb(17 51 153 / 33%);
        -webkit-box-shadow: 1px 2px 18px 3px rgb(17 51 153 / 33%);
        -moz-box-shadow: 1px 2px 18px 3px rgba(17, 51, 153, 0.33);
      }
    "
    >{{ text }}</span
  >
  <span
    v-else
    class="dark:bg-gray-700 bg-grayLightMode-200 dark:text-gray-300 text-grayLightMode-400 px-2 py-0.5 rounded-chip font-bold select-none cursor-pointer"
    >{{ text }}</span
  >
</template>

<script>
export default {
  name: "basicChip",
  props: {
    text: {
      type: String,
      default: "#justachip",
    },
    enableDropdownShadow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
