<template>
  <div
    class="rounded-curl dark:bg-gray-800 bg-grayLightMode-200 p-4 fixed top-24 left-1/2 -translate-x-1/2 shadow-md"
  >
    <div class="h3 mb-4 font-bold dark:text-grayLightMode-200 text-gray-900">
      Allow Notifications
    </div>
    <div class="mb-4 dark:text-grayLightMode-200 text-gray-900">
      Please give us the permission to display notifications
    </div>
    <div class="flex justify-end">
      <RegularButton
        text="Okay"
        state="regular"
        classes="mr-3"
        @clicked="$emit('approved')"
      />
      <RegularButton
        text="Deny"
        state="regular"
        classes="red-bg"
        @clicked="$emit('denied')"
      />
    </div>
  </div>
</template>

<script>
import RegularButton from "../buttons/regularButton.vue";

export default {
  name: "NotificationPopupCard",
  components: { RegularButton },
  emits: ["approved", "denied"],

  methods: {
    allowNotifications() {
      console.log("allowd!!");
      this.$emit("approved");
    },
  },
};
</script>

<style>
.red-bg {
  @apply bg-red-500 hover:bg-red-400 transition-colors !important;
}
</style>
