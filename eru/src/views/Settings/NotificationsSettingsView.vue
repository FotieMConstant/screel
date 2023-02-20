<template>
  <main
    class="rounded-curl dark:bg-[#151A21] bg-grayLightMode-100 p-6 text-gray-400 dark:text-gray-100 text-left mb-6"
  >
    <h1 class="font-bold text-left mb-4">Desktop Notifications</h1>

    <ul class="mb-10">
      <SettingsItemCard
        name="Enable Desktop Notifications"
        description="Notifications include posts and mentions"
        group="desktopnotifs"
        classes="items-center"
        :isSelected="receiveDesktopNotifications"
      >
        <template #trailing>
          <SwitchButton
            :default-value="
              isNotificationPermissionGranted && receiveDesktopNotifications
            "
            @onToggle="(val) => setDesktopNotifications(val)"
          />
        </template>
      </SettingsItemCard>
    </ul>

    <h1 class="font-bold text-left mb-4">By Email</h1>

    <SettingsItemCard
      name="Marketing"
      description="Marketing messages from screel"
      group="byemal"
      classes="items-center"
      :isSelected="receiveMarketingNotifications"
    >
      <template #trailing>
        <SwitchButton @onToggle="(val) => setMarketingNotifications(val)" />
      </template>
    </SettingsItemCard>
  </main>
</template>

<script>
// @ is an alias to /src
// import SettingsLayout from "@/components/Layout/SettingsLayout";
// import RegularButton from "@/components/modules/buttons/regularButton.vue";
import SwitchButton from "@/components/modules/buttons/switchButton.vue";
import SettingsItemCard from "@/components/modules/cards/settingsItemCard.vue";

export default {
  name: "NotificationsSettingsView",
  data() {
    return {
      receiveDesktopNotifications: false,
      receiveMarketingNotifications: false,
    };
  },

  computed: {
    isNotificationPermissionGranted() {
      return "Notification" in window && Notification.permission == "granted";
    },
  },

  methods: {
    setMarketingNotifications(val) {
      console.log(val);
      this.receiveMarketingNotifications = val;
    },
    setDesktopNotifications(val) {
      console.log(Notification.permission);
      //if we switch on notifications request for notifications permission
      if (
        "Notification" in window &&
        Notification.permission == "default" &&
        val
      ) {
        Notification.requestPermission((permission) => {
          console.log("permission ==>> ", permission);

          if (permission == "granted") this.receiveDesktopNotifications = true;
          else this.receiveDesktopNotifications = false;
        });
      } else {
        this.receiveDesktopNotifications = val;
      }
    },
  },

  components: {
    SettingsItemCard,
    SwitchButton,
  },
};
</script>
