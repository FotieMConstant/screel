<template>
  <!-- if the is loading -->
  <cardPostLoading v-if="loading" />
  <div
    v-else
    class="dark:bg-gray-800 dark:text-gray-100 text-grayLightMode-400 bg-grayLightMode-100 p-5 rounded-curl"
  >
    <div class="flex justify-between">
      <div class="flex space-x-2.5">
        <router-link :to="`/u/` + userName">
          <img
            class="h-8 w-8 flex-shrink-0 rounded-full"
            :src="profileImage"
            alt=""
          />
        </router-link>
        <router-link :to="`/u/` + userName">
          <div class="flex space-x-1 my-auto">
            <div class="font-bold my-auto">{{ name }}</div>
            <div class="font-bold my-auto">·</div>
            <div class="text-sm my-auto">@{{ userName }}</div>
          </div>
        </router-link>
      </div>
      <div class="flex space-x-2">
        <svg
          class="my-auto dark:text-gray-600 text-grayLightMode-200"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9.5" cy="10.106" r="9.5" fill="currentColor" />
          <g class="text-blue-light" clip-path="url(#clip0_19529_2698)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8711 9.32955C16.0486 10.7869 15.7212 12.2611 14.9434 13.5064C14.1656 14.7516 12.9845 15.6925 11.5969 16.1723C10.2094 16.6521 8.69928 16.6417 7.31845 16.1429C5.93762 15.6441 4.76951 14.687 4.0089 13.4312C3.92612 13.2947 3.90096 13.1309 3.93896 12.9759C3.97695 12.8208 4.07499 12.6872 4.2115 12.6044C4.34801 12.5216 4.51182 12.4965 4.66688 12.5345C4.82194 12.5725 4.95556 12.6705 5.03834 12.807C5.44806 13.4836 6.0063 14.0581 6.67082 14.4871C7.33534 14.9161 8.08873 15.1883 8.87398 15.2831C9.65924 15.378 10.4558 15.293 11.2033 15.0346C11.9509 14.7762 12.6299 14.3511 13.1889 13.7916C13.748 13.232 14.1724 12.5527 14.4302 11.8049C14.6879 11.0571 14.7722 10.2605 14.6766 9.47531C14.5811 8.69015 14.3082 7.937 13.8786 7.27286C13.449 6.60873 12.874 6.051 12.197 5.64189C12.0604 5.55932 11.9622 5.42586 11.924 5.27088C11.8858 5.11589 11.9107 4.95207 11.9932 4.81545C12.0758 4.67883 12.2093 4.58061 12.3642 4.54239C12.5192 4.50417 12.6831 4.52908 12.8197 4.61165C13.6527 5.1152 14.3604 5.80163 14.889 6.619C15.4176 7.43636 15.7535 8.36326 15.8711 9.32955V9.32955ZM10.3018 4.48889C10.3018 4.70169 10.2173 4.90577 10.0668 5.05625C9.91637 5.20672 9.71229 5.29125 9.49949 5.29125C9.28668 5.29125 9.0826 5.20672 8.93213 5.05625C8.78165 4.90577 8.69712 4.70169 8.69712 4.48889C8.69712 4.27609 8.78165 4.072 8.93213 3.92153C9.0826 3.77106 9.28668 3.68652 9.49949 3.68652C9.71229 3.68652 9.91637 3.77106 10.0668 3.92153C10.2173 4.072 10.3018 4.27609 10.3018 4.48889V4.48889ZM5.3304 7.69835C5.38391 7.60706 5.41884 7.50609 5.43318 7.40125C5.44751 7.29641 5.44097 7.18977 5.41392 7.08747C5.38688 6.98517 5.33986 6.88923 5.27558 6.80517C5.21131 6.72111 5.13104 6.6506 5.0394 6.59769C4.94776 6.54478 4.84656 6.51052 4.74163 6.49688C4.6367 6.48324 4.5301 6.4905 4.42798 6.51822C4.32586 6.54595 4.23024 6.5936 4.14661 6.65843C4.06298 6.72326 3.993 6.80399 3.9407 6.89598C3.83598 7.08017 3.80836 7.29831 3.86388 7.50278C3.91939 7.70726 4.05353 7.88148 4.23702 7.98742C4.42051 8.09336 4.63846 8.12242 4.8433 8.06827C5.04814 8.01411 5.22324 7.88113 5.3304 7.69835V7.69835ZM3.88293 9.30308C4.09573 9.30308 4.29982 9.38761 4.45029 9.53808C4.60076 9.68856 4.6853 9.89264 4.6853 10.1054C4.6853 10.3182 4.60076 10.5223 4.45029 10.6728C4.29982 10.8233 4.09573 10.9078 3.88293 10.9078C3.67013 10.9078 3.46605 10.8233 3.31557 10.6728C3.1651 10.5223 3.08057 10.3182 3.08057 10.1054C3.08057 9.89264 3.1651 9.68856 3.31557 9.53808C3.46605 9.38761 3.67013 9.30308 3.88293 9.30308V9.30308ZM7.09239 5.93635C7.18438 5.88405 7.26511 5.81408 7.32994 5.73045C7.39478 5.64682 7.44243 5.55119 7.47015 5.44907C7.49788 5.34695 7.50513 5.24036 7.49149 5.13542C7.47785 5.03049 7.44359 4.92929 7.39068 4.83765C7.33777 4.74602 7.26726 4.66575 7.1832 4.60147C7.09914 4.53719 7.0032 4.49018 6.9009 4.46313C6.7986 4.43609 6.69196 4.42954 6.58712 4.44388C6.48228 4.45821 6.38131 4.49314 6.29003 4.54666C6.10724 4.65381 5.97426 4.82892 5.92011 5.03376C5.86595 5.2386 5.89501 5.45655 6.00095 5.64004C6.1069 5.82353 6.28111 5.95767 6.48559 6.01318C6.69007 6.06869 6.9082 6.04108 7.09239 5.93635V5.93635Z"
              fill="currentColor"
            />
            <rect
              x="9.27832"
              y="7.6709"
              width="1.32805"
              height="3.98416"
              rx="0.664026"
              fill="currentColor"
            />
            <rect
              width="1.32805"
              height="2.80812"
              rx="0.664026"
              transform="matrix(0.00568134 0.999984 0.999984 -0.00568134 7.79443 10.354)"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_19529_2698">
              <rect
                width="12.8378"
                height="12.8378"
                fill="white"
                transform="translate(3.08057 3.68652)"
              />
            </clipPath>
          </defs>
        </svg>

        <div class="my-auto font-bold text-sm">
          Fades {{ timeLeft(postedDate) }}
        </div>
      </div>
    </div>
    <div class="text-left dark:text-gray-300 px-10">
      <div v-html="addLinksToText(content)"></div>
    </div>
    <div class="mt-4 pl-10 dark:text-gray-300 text-left flex justify-between">
      <div>
        <!-- reactions button -->
        <reactionsButton
          :screelReactions="screelReactions"
          :screelId="screelId"
          @reactOnScreel="reactOnScreel1"
        />
        <!--/ reactions button -->
      </div>

      <div class="text-left flex flex-wrap">
        <basicChip
          class="text-sm m-1"
          v-for="tag in tags"
          :key="tag"
          :text="tag.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import basicChip from "@/components/modules/chips/basicChip.vue";
import cardPostLoading from "@/components/modules/skeleton-loaders/cardPostLoading.vue";
import moment from "moment";
import { formatDate, timeLeft } from "@/utils";
import reactionsButton from "@/components/modules/buttons/reactionsButton.vue";

export default {
  name: "cardPost",
  components: { basicChip, cardPostLoading, reactionsButton },
  props: {
    screelId: {
      type: String,
      default: null,
    },
    profileImage: {
      type: String,
      default: "https://i.pravatar.cc/300",
    },
    name: {
      type: String,
      default: "name",
    },
    userName: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "Null",
    },
    tags: {
      type: Array,
      default() {
        return ["#null"];
      },
    },
    postedDate: {
      type: String,
      default: "Null",
    },
    // if the component is loading or not
    loading: {
      type: Boolean,
      default: true,
    },
    screelReactions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      timeAgo: null,
    };
  },
  mounted() {
    this.timeAgo = moment(this.formatDate(this.postedDate)).fromNow();
    // console.log(this.formatDate(this.postedDate));
  },
  methods: {
    formatDate,
    timeLeft,
    // make any word that starts with `@` redirect to the user's profile
    addLinksToText(str) {
      var words = str.split(" ");
      var output = "";
      for (var i = 0; i < words.length; i++) {
        if (words[i].startsWith("@")) {
          output +=
            '<a class="text-blue-light font-bold" href="/u/' +
            words[i].substring(1) +
            '">' +
            words[i] +
            "</a> ";
        } else {
          output += words[i] + " ";
        }
      }
      return output;
    },
    reactOnScreel1(payload) {
      this.$emit("reactOnScreelFinal", payload);
    },
  },
};
</script>
<style lang="scss" scoped></style>
