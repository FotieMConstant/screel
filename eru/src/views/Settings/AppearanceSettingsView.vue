<template>
  <main
    class="rounded-curl dark:bg-[#151A21] bg-grayLightMode-100 p-6 text-gray-400 dark:text-gray-100 text-left mb-6"
  >
    <h1 class="font-bold text-left mb-4">Themes</h1>

    <ul class="mb-10">
      <SettingsItemCard
        name="Dark+ (default dark)"
        description="Caring about your eyes since 2022"
        group="themes"
        @change="setTheme('dark')"
        modelValue="dark"
        :isSelected="isDark === true"
      >
      </SettingsItemCard>
      <SettingsItemCard
        name="Light+ (default light)"
        description="Rethink your life decisions"
        group="themes"
        modelValue="light"
        @change="setTheme('light')"
        :isSelected="isDark === false"
      >
      </SettingsItemCard>
    </ul>
  </main>
</template>

<script>
// @ is an alias to /src
// import SettingsLayout from "@/components/Layout/SettingsLayout";
// import RegularButton from "@/components/modules/buttons/regularButton.vue";
import SettingsItemCard from "@/components/modules/cards/settingsItemCard.vue";

export default {
  name: "AppearanceSettingsView",
  data() {
    return {
      isDark: null,
    };
  },

  methods: {
    setTheme(value = "dark") {
      if (value == "dark" && this.isDark === false) {
        this.$store.dispatch("toggleDarkAction"); // calling toggle action from store
        this.isDark = true;
      } else if (value === "light" && this.isDark === true) {
        this.$store.dispatch("toggleDarkAction"); // calling toggle action from store
        this.isDark = false;
      }
    },
  },

  created() {
    this.isDark = this.$store.getters.getIsDark;
  },

  components: {
    SettingsItemCard,
    // RegularButton,
  },
};
</script>
