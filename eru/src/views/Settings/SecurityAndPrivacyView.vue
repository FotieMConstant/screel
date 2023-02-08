<template>
  <main
    class="rounded-curl dark:bg-[#151A21] bg-grayLightMode-100 p-6 text-gray-400 dark:text-gray-100 text-left mb-6"
  >
    <h1 class="font-bold text-left mb-4">Allow DMs From</h1>

    <ul class="mb-10">
      <SettingsItemCard
        name="Everyone"
        description="Allow any user to send you DMs"
        group="allowDM"
        @change="allowDMValue = 'everyone'"
        modelValue="everyone"
        :isSelected="allowDMValue == 'everyone'"
      >
      </SettingsItemCard>
      <SettingsItemCard
        name="People I Follow"
        description="Only users you follow will be able to DM you"
        group="allowDM"
        modelValue="peopleIFollow"
        @change="allowDMValue = 'peopleIFollow'"
        :isSelected="allowDMValue == 'peopleIFollow'"
      >
      </SettingsItemCard>
      <SettingsItemCard
        name="No One"
        description="Prevent any user from sending you a DM"
        group="allowDM"
        @change="allowDMValue = 'noOne'"
        modelValue="noOne"
        :isSelected="allowDMValue == 'noOne'"
      >
      </SettingsItemCard>
    </ul>

    <h1 class="font-bold text-left mb-4">Request All My Data</h1>
    <div class="text-gray-300 mb-3">
      Download all the data screel has about you
    </div>

    <RegularButton
      text="Download my data"
      state="regular"
      classes="dark:bg-[#323D4D] rounded-chip text-sm"
    />

    <h1 class="font-bold text-left my-7">Blocked Users</h1>

    <!-- Blocked Users List-->
    <ul class="">
      <li class="flex justify-between items-center mb-4">
        <div class="flex">
          <div
            class="rounded-full w-14 h-14 flex-shrink-0 relative bg-red-500 mr-3"
          >
            <img
              src="@/assets/dummy_photo.png"
              alt="user profile photo"
              class="w-full h-full rounded-full"
            />
            <span
              class="flex absolute right-0 bottom-[4px] w-3 h-3 rounded-full bg-blue-accent border-gray-900 border-2"
            ></span>
          </div>

          <div class="flex flex-col">
            <span class="font-bold">Jessica Jones</span>
            <span class="text-gray-300">@jjones_</span>
          </div>
        </div>

        <RegularButton
          state="regular"
          text="unblock"
          classes="rounded-chip h-5"
        />
      </li>
      <li class="flex justify-between items-center">
        <div class="flex">
          <div
            class="rounded-full w-14 h-14 flex-shrink-0 relative bg-red-500 mr-3"
          >
            <img
              src="@/assets/dummy_photo.png"
              alt="user profile photo"
              class="w-full h-full rounded-full"
            />
            <span
              class="flex absolute right-0 bottom-[4px] w-3 h-3 rounded-full bg-blue-accent border-gray-900 border-2"
            ></span>
          </div>

          <div class="flex flex-col">
            <span class="font-bold">Chris Jeo</span>
            <span class="text-gray-300">@chris_jeo_</span>
          </div>
        </div>

        <RegularButton
          state="regular"
          text="unblock"
          classes="rounded-chip h-5"
        />
      </li>
    </ul>
  </main>
</template>

<script>
// @ is an alias to /src
// import SettingsLayout from "@/components/Layout/SettingsLayout";
import RegularButton from "@/components/modules/buttons/regularButton.vue";
import SettingsItemCard from "@/components/modules/cards/settingsItemCard.vue";

export default {
  name: "SecurityAndPrivacyView",
  data() {
    return {
      allowDMValue: "everyone",
    };
  },

  components: {
    SettingsItemCard,
    RegularButton,
  },
};
</script>
