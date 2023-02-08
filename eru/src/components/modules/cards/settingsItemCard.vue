<template>
  <!-- Component for radio button-based settings item -->
  <li
    class="bg-grayLightMode-200 dark:bg-gray-900 rounded-curl p-5 flex items-start mb-3 text-sm"
    :class="{ ' text-gray-300': !isSelected }"
  >
    <slot name="leading"></slot>
    <div>
      <div class="font-bold text-left leading-3 mb-2">{{ name }}</div>
      <div>{{ description }}</div>
    </div>
    <span class="flex-grow"></span>
    <label class="self-center">
      <input
        class="t-radio"
        type="radio"
        :name="`_${group}`"
        :value="modelValue"
        :checked="isSelected"
        @change="$emit('change', $event.target.value)"
      />
    </label>
  </li>
</template>

<script>
export default {
  name: "SettingsItemCard",
  props: ["name", "description", "group", "isSelected", "modelValue"],
  emits: ["change"],
};
</script>

<style>
.t-radio {
  @apply w-6 h-6 appearance-none bg-transparent m-0 border-2 border-grayLightMode-300 dark:border-gray-100 rounded-full;
  @apply relative place-content-center cursor-pointer;
}
.t-radio::before {
  content: "";
  @apply absolute w-3 h-3 block rounded-full bg-blue-light;
  @apply left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform;
}

.t-radio:checked {
  @apply border-blue-accent;
}
.t-radio:checked::before {
  @apply left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100;
}
</style>
