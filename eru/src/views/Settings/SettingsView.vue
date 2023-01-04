<template>
  <!-- settings layout for user account settings -->
  <SettingsLayout>
    <router-view />
  </SettingsLayout>
  <!-- settings layout for user account settings -->
</template>

<script>
// @ is an alias to /src
import SettingsLayout from "@/components/Layout/SettingsLayout";

export default {
  name: "SettingsView",
  components: {
    SettingsLayout,
  },
};
</script>
