<template>
  <div>
    <label class="switch">
      <input type="checkbox" v-model="value" @change="onToggle()" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ToggleSwitchButton",

  data() {
    return {
      value: false,
    };
  },

  methods: {
    onToggle() {
      this.$emit("onToggle", this.value);
    },
  },
};
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  align-self: center;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  @apply border-2 border-gray-100;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translate(20px, -50%);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
