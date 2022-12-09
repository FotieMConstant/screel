<template>
  <select
    class="w-full dark:bg-gray-700 focus:outline-none px-5 py-1.5 rounded-curl"
    v-model="$i18n.locale"
  >
    <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang.code">
      {{ lang.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectLocale",
  data() {
    return {
      langs: [
        { name: "English", code: "en" },
        { name: "Français", code: "fr" },
        { name: "Türkçe", code: "tr" },
      ],
    };
  },
};
</script>
