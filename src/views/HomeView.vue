<template>
  <div class="home">
    <LocalLang />
    {{ $t("appBar.morning") }}, Fotie!
    <demo />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import demo from "@/components/modules/card/demo.vue";
import LocalLang from "@/components/modules/LocalLang.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    LocalLang,
    demo,
  },
};
</script>
