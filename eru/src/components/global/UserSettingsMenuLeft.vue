<template>
  <div class="pl-4 py-8">
    <!-- setting section -->
    <div class="text-left">
      <div class="dark:text-gray-400 font-bold px-4">USER SETTINGS</div>
      <div class="space-y-1 mt-3">
        <router-link :to="{ name: 'ProfileSettingsView' }">
          <div
            :class="
              whichRouteWeOn() === 'ProfileSettingsView'
                ? '__active dark:bg-gray-800 bg-grayLightMode-200 dark:text-grayLightMode-100 font-bold'
                : null
            "
            class="dark:text-gray-200 font-medium cursor-pointer select-none dark:hover:bg-gray-800 hover:bg-grayLightMode-200 rounded-norm px-4 py-2"
          >
            Profile
          </div>
        </router-link>
        <router-link :to="{ name: 'AccountSettingsView' }">
          <div
            :class="
              whichRouteWeOn() === 'AccountSettingsView'
                ? '__active dark:bg-gray-800 bg-grayLightMode-200 dark:text-grayLightMode-100 font-bold'
                : null
            "
            class="dark:text-gray-200 font-medium cursor-pointer select-none dark:hover:bg-gray-800 hover:bg-grayLightMode-200 rounded-norm px-4 py-2"
          >
            Account
          </div>
        </router-link>
        <router-link :to="{ name: 'SecurityAndPrivacyView' }">
          <div
            :class="
              whichRouteWeOn() === 'SecurityAndPrivacyView'
                ? '__active dark:bg-gray-800 bg-grayLightMode-200 dark:text-grayLightMode-100 font-bold'
                : null
            "
            class="dark:text-gray-200 font-medium cursor-pointer select-none dark:hover:bg-gray-800 hover:bg-grayLightMode-200 rounded-norm px-4 py-2"
          >
            Security & Privacy
          </div>
        </router-link>
      </div>
    </div>
    <!-- setting section -->
    <div class="border-t my-5 dark:border-gray-600 mx-4" />
    <!-- setting section -->
    <div class="text-left">
      <div class="dark:text-gray-400 font-bold px-4">APP SETTINGS</div>
      <div class="space-y-1 mt-3">
        <router-link :to="{ name: 'AppearanceSettingsView' }">
          <div
            :class="
              whichRouteWeOn() === 'AppearanceSettingsView'
                ? '__active dark:bg-gray-800 bg-grayLightMode-200 dark:text-grayLightMode-100 font-bold'
                : null
            "
            class="dark:text-gray-200 font-medium cursor-pointer select-none dark:hover:bg-gray-800 hover:bg-grayLightMode-200 rounded-norm px-4 py-2"
          >
            Appearance
          </div>
        </router-link>
        <router-link :to="{ name: 'NotificationsSettingsView' }">
          <div
            :class="
              whichRouteWeOn() === 'NotificationsSettingsView'
                ? '__active dark:bg-gray-800 bg-grayLightMode-200 dark:text-grayLightMode-100 font-bold'
                : null
            "
            class="dark:text-gray-200 font-medium cursor-pointer select-none dark:hover:bg-gray-800 hover:bg-grayLightMode-200 rounded-norm px-4 py-2"
          >
            Notifications
          </div>
        </router-link>
        <router-link :to="{ name: 'AdditionalResourcesView' }">
          <div
            :class="
              whichRouteWeOn() === 'AdditionalResourcesView'
                ? '__active dark:bg-gray-800 bg-grayLightMode-200 dark:text-grayLightMode-100 font-bold'
                : null
            "
            class="dark:text-gray-200 font-medium cursor-pointer select-none dark:hover:bg-gray-800 hover:bg-grayLightMode-200 rounded-norm px-4 py-2"
          >
            Additional resources
          </div>
        </router-link>
      </div>
    </div>
    <!-- setting section -->
  </div>
</template>

<script>
export default {
  name: "UserSettingsMenuLeft",
  props: {},
  data() {
    return {};
  },
  methods: {
    // returns information about the route
    whichRouteWeOn() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.__active::before {
  content: "";
  width: 4px; /*dimension of the shape*/
  height: 25px;
  left: 26px;
  @apply bg-blue-accent absolute rounded-curl;
}
</style>
