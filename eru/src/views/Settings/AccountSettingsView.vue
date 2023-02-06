<template>
  <main
    class="rounded-curl dark:bg-[#151A21] bg-grayLightMode-100 p-6 text-gray-400 dark:text-gray-100"
  >
    <h1 class="font-bold text-left mb-4">Status</h1>

    <ul class="mb-10">
      <SettingsItemCard
        name="Online"
        description="When you're online, it will be visible to everyone"
        group="status"
        @change="statusValue = 'online'"
        modelValue="online"
        :isSelected="statusValue == 'online'"
      >
        <template #leading>
          <div
            class="rounded-full w-2 h-2 flex-shrink-0 bg-blue-light mr-2"
          ></div>
        </template>
      </SettingsItemCard>
      <SettingsItemCard
        name="Do not Disturb"
        description="Let your followers know that you're away"
        group="status"
        modelValue="doNotDisturb"
        @change="statusValue = 'doNotDisturb'"
        :isSelected="statusValue == 'doNotDisturb'"
      >
        <template #leading>
          <div class="mr-2">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_19358_3571)">
                <path
                  d="M3.51309 1.80689C3.51309 1.16571 3.64231 0.55622 3.87635 0.000366211C1.65294 0.539154 0.00244141 2.54071 0.00244141 4.92747C0.00244141 7.72624 2.27461 9.99841 5.07338 9.99841C7.46014 9.99841 9.4617 8.34792 10.0005 6.12451C9.44463 6.35855 8.83271 6.48776 8.19396 6.48776C5.60973 6.48776 3.51309 4.39112 3.51309 1.80689Z"
                  fill="#FFA928"
                />
              </g>
              <defs>
                <clipPath id="clip0_19358_3571">
                  <rect width="10" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </template>
      </SettingsItemCard>
      <SettingsItemCard
        name="Offline"
        description="Wear Harry Potter's invisibility cloak"
        group="status"
        @change="statusValue = 'offline'"
        modelValue="offline"
        :isSelected="statusValue == 'offline'"
      >
        <template #leading>
          <div
            class="rounded-full w-2 h-2 flex-shrink-0 bg-gray-300 mr-2"
          ></div>
        </template>
      </SettingsItemCard>
    </ul>

    <h1 class="font-bold text-left mb-4">Delete Account</h1>
    <div
      class="bg-grayLightMode-200 dark:bg-gray-900 rounded-curl p-5 items-start mb-3 flex flex-col"
    >
      <p class="mb-4 text-left">
        This is a one way operation, once you delete your account there is no
        going back. Please be certain.
      </p>
      <RegularButton
        state="regular"
        classes="bg-red-500 dark:bg-red-500 hover:bg-red-400 dark:hover:bg-red-400 transition-colors rounded-chip"
        text="Delete your account"
      ></RegularButton>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import SettingsLayout from "@/components/Layout/SettingsLayout";

import RegularButton from "@/components/modules/buttons/regularButton.vue";
import SettingsItemCard from "@/components/modules/cards/settingsItemCard.vue";

export default {
  name: "AccountSettingsView",

  data() {
    return {
      statusValue: "online",
    };
  },

  watch: {
    statusValue(newVal) {
      console.log(newVal);
    },
  },

  components: {
    SettingsItemCard,
    RegularButton,
  },
};
</script>

<style></style>
