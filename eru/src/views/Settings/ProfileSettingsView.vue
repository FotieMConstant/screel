<template>
  <div
    class="rounded-curl dark:bg-gray-800 bg-grayLightMode-100 px-5 pb-14 mb-10"
  >
    <div class="text-left py-4">
      <p
        class="whitespace-nowrap text-gray-400 px-8 dark:text-grayLightMode-100 font-bold sm:text-lg lg:text-xl"
      >
        {{ $t("appBar.ProfileSettingsView.heading") }}
      </p>
    </div>
    <div
      class="bg-cover bg-center w-full h-40 rounded-t-curl relative"
      :style="{
        'background-image': 'url(' + currentCoverPic + ')',
      }"
    >
      <div class="absolute -bottom-12 left-7">
        <div class="relative w-20 mx-auto">
          <div
            class="h-20 w-full rounded-full absolute bottom-0 overflow-hidden"
          >
            <img
              class="overflow-hidden h-20 rounded-full border-4 dark:border-gray-800 border-grayLightMode-100"
              :src="currentProfilePic"
              alt="user profile picture"
            />
            <input
              type="file"
              id="profile_pic"
              accept="image/*"
              @change="selectProfilePic"
              class="hidden cursor-pointer"
            />
            <label
              for="profile_pic"
              class="absolute bottom-0 cursor-pointer bg-black/70 text-xs leading-5 h-5 w-full -translate-x-2/4 text-center left-1/2 text-grayLightMode-100"
              >Edit</label
            >
          </div>

          <!-- user is online -->
          <div
            v-if="isOnline === 'online'"
            class="w-4 h-4 bg-blue-accent rounded-full my-auto border-2 absolute right-1 bottom-2 dark:border-gray-800 border-grayLightMode-100"
          ></div>
          <!-- offline mode -->
          <div
            v-else-if="isOnline === 'offline'"
            class="w-4 h-4 bg-gray-300 rounded-full my-auto border-2 absolute right-2 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          ></div>
          <!-- DND mode -->
          <div
            v-else-if="isOnline === 'dnd'"
            class="w-4 h-4 dark:bg-gray-800 bg-grayLightMode-100 rounded-full my-auto border-2 absolute right-2 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          >
            <svg
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_19358_3571)">
                <path
                  d="M3.51309 1.80689C3.51309 1.16571 3.64231 0.55622 3.87635 0.000366211C1.65294 0.539154 0.00244141 2.54071 0.00244141 4.92747C0.00244141 7.72624 2.27461 9.99841 5.07338 9.99841C7.46014 9.99841 9.4617 8.34792 10.0005 6.12451C9.44463 6.35855 8.83271 6.48776 8.19396 6.48776C5.60973 6.48776 3.51309 4.39112 3.51309 1.80689Z"
                  class="dark:border-gray-800 border-grayLightMode-100"
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
        </div>

        <div
          class="text-white absolute text-left left-full w-full ml-6 -bottom-3"
        >
          <div class="flex justify-between items-end w-40 h-8">
            <span
              class="mr-2 dark:text-gray-100 text-2xl font whitespace-nowrap text-grayLightMode-400 font-bold"
              >{{ currentUser.name }}</span
            >

            <svg
              class="my-auto"
              width="13"
              height="13"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_19620_1092)">
                <path
                  d="M0 3C0 1.34315 1.34315 0 3 0H8C9.65685 0 11 1.34315 11 3V8C11 9.65685 9.65685 11 8 11H3C1.34315 11 0 9.65685 0 8V3Z"
                  fill="#F7DF1E"
                ></path>
                <path
                  d="M2.89238 9.19241L3.73413 8.68297C3.89656 8.9709 4.04428 9.21454 4.39865 9.21454C4.73831 9.21454 4.95251 9.08168 4.95251 8.56485V5.05009H5.98621V8.57946C5.98621 9.65011 5.35861 10.1375 4.44295 10.1375C3.61601 10.1375 3.13605 9.70928 2.89238 9.19241ZM6.54769 9.08163L7.38936 8.59433C7.61095 8.95617 7.89892 9.22197 8.40836 9.22197C8.83672 9.22197 9.10983 9.00781 9.10983 8.71245C9.10983 8.35804 8.82924 8.23249 8.35667 8.02581L8.0983 7.91495C7.35249 7.59754 6.85779 7.19879 6.85779 6.35703C6.85779 5.5817 7.44848 4.99097 8.37149 4.99097C9.02866 4.99097 9.50123 5.2199 9.84085 5.81799L9.03596 6.3349C8.85872 6.0174 8.66682 5.89189 8.37145 5.89189C8.06869 5.89189 7.87671 6.08388 7.87671 6.3349C7.87671 6.64501 8.06869 6.7706 8.5117 6.96259L8.77011 7.07332C9.64883 7.44994 10.1435 7.83387 10.1435 8.69771C10.1435 9.62815 9.41254 10.1376 8.43049 10.1376C7.47061 10.1376 6.8504 9.67976 6.54769 9.08163Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_19620_1092">
                  <rect width="11" height="11" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="text-gray-300 text-sm font">
            @{{ currentUser.username }}
          </div>
        </div>
      </div>
      <!-- edit cover -->
      <div
        class="flex justify-end items-end h-full w-full absolute -top-3 right-5"
      >
        <div class="">
          <input
            type="file"
            id="cover_pic"
            accept="image/*"
            @change="selectCoverPic"
            class="hidden"
          />

          <label
            for="cover_pic"
            class="edit cursor-pointer bg-black/30 text-xs leading-5 text-center left-1/2 text-grayLightMode-100 flex justify-center items-center"
            ><svg
              class="svg"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47933 20.904 3.288 20.712C3.096 20.5207 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9127 3.075 16.788C3.125 16.6627 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.33767 20.875 7.213 20.925C7.08767 20.975 6.95833 21 6.825 21H4Z"
                fill="white"
              />
            </svg>
            <span class="ml-1 text-xs pr-2 whitespace-nowrap">{{
              $t("appBar.ProfileSettingsView.edit")
            }}</span>
          </label>
        </div>
      </div>
    </div>

    <!-- the form -->
    <div
      class="w-full px-8 mt-24 text-left dark:text-grayLightMode-100 text-gray-800"
    >
      <!-- <div class="text-left dark:text-grayLightMode-100 text-gray-800"> -->
      <p
        class="text-xl ml-1 font-bold mb-5 dark:text-grayLightMode-100 text-gray-400"
      >
        {{ $t("appBar.ProfileSettingsView.publicProfile") }}
      </p>
      <form class="w-full dark:text-gray-300 text-gray-400">
        <div
          class="w-full mb-8 flex justify-between items-center lg:flex-nowrap sm:flex-wrap"
        >
          <span class="lg:w-1/2 mr-3 sm:w-full">
            <label for="name" class="ml-1">{{
              $t("appBar.ProfileSettingsView.displayName")
            }}</label
            ><br />
            <input
              id="name"
              required
              type="text"
              v-model="profile.name"
              :placeholder="$t('appBar.ProfileSettingsView.displayname')"
              class="w-full text-gray-300 dark:text-white focus:outline-0 dark:placeholder-gray-500 placeholder-gray-200 px-6 py-2 mt-4 rounded-curl bg-grayLightMode-50 dark:bg-gray-700"
            />
          </span>
          <span class="lg:w-1/2 sm:w-full">
            <label for="username" class="ml-1">{{
              $t("appBar.ProfileSettingsView.userName")
            }}</label
            ><br />
            <input
              type="username"
              required
              v-model="profile.username"
              :placeholder="
                $t('appBar.ProfileSettingsView.placeholderUserName')
              "
              class="w-full text-gray-300 dark:text-white dark:placeholder-gray-500 placeholder-gray-200 px-6 focus:outline-0 py-2 mt-4 rounded-curl bg-grayLightMode-50 dark:bg-gray-700"
            />
          </span>
        </div>
        <label class="ml-1">Bio <br /></label>
        <div class="relative mt-3 mb-4">
          <textarea
            cols="10"
            rows="4"
            v-model="profile.biography"
            placeholder="Tell us more about yourself"
            maxlength="255"
            class="outline-none dark:text-gray-100 text-gray-300 w-full rounded-curl bg-grayLightMode-50 dark:bg-gray-700 px-4 py-1 align-top"
          ></textarea>

          <div
            class="text-xs font-bold absolute right-3 bottom-3 text-green-500"
            :class="{ 'text-yellow-500': profile.biography.length > 239 }"
          >
            {{ 255 - profile.biography.length }}
          </div>
        </div>
        <div
          class="w-full mb-6 flex justify-between items-center lg:flex-nowrap sm:flex-wrap"
        >
          <span class="lg:w-1/2 sm:w-full">
            <label for="name" class="ml-1">{{
              $t("appBar.ProfileSettingsView.website")
            }}</label
            ><br />
            <input
              class="w-full text-gray-300 dark:text-white focus:outline-0 dark:placeholder-gray-500 placeholder-gray-200 px-6 py-2 mt-4 rounded-curl bg-grayLightMode-50 dark:bg-gray-700"
              id="website"
              v-model="profile.website"
              type="url"
              :placeholder="$t('appBar.ProfileSettingsView.link')"
            />
          </span>
          <span class="relative lg:w-1/2 sm:w-full sm:mt-2 ml-3 flex flex-col">
            <div class="flex items-center ml-1 sm:ml-0">
              <label class="w-16 h-7 flex justify-center items-center">
                <span class="mb-9">Flair :</span>
                <svg
                  class="mb-9"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_19620_1092)">
                    <path
                      d="M0 3C0 1.34315 1.34315 0 3 0H8C9.65685 0 11 1.34315 11 3V8C11 9.65685 9.65685 11 8 11H3C1.34315 11 0 9.65685 0 8V3Z"
                      fill="#F7DF1E"
                    ></path>
                    <path
                      d="M2.89238 9.19241L3.73413 8.68297C3.89656 8.9709 4.04428 9.21454 4.39865 9.21454C4.73831 9.21454 4.95251 9.08168 4.95251 8.56485V5.05009H5.98621V8.57946C5.98621 9.65011 5.35861 10.1375 4.44295 10.1375C3.61601 10.1375 3.13605 9.70928 2.89238 9.19241ZM6.54769 9.08163L7.38936 8.59433C7.61095 8.95617 7.89892 9.22197 8.40836 9.22197C8.83672 9.22197 9.10983 9.00781 9.10983 8.71245C9.10983 8.35804 8.82924 8.23249 8.35667 8.02581L8.0983 7.91495C7.35249 7.59754 6.85779 7.19879 6.85779 6.35703C6.85779 5.5817 7.44848 4.99097 8.37149 4.99097C9.02866 4.99097 9.50123 5.2199 9.84085 5.81799L9.03596 6.3349C8.85872 6.0174 8.66682 5.89189 8.37145 5.89189C8.06869 5.89189 7.87671 6.08388 7.87671 6.3349C7.87671 6.64501 8.06869 6.7706 8.5117 6.96259L8.77011 7.07332C9.64883 7.44994 10.1435 7.83387 10.1435 8.69771C10.1435 9.62815 9.41254 10.1376 8.43049 10.1376C7.47061 10.1376 6.8504 9.67976 6.54769 9.08163Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_19620_1092">
                      <rect width="11" height="11" fill="white"></rect>
                    </clipPath>
                  </defs></svg
              ></label>
            </div>
            <br />
            <!-- the select box -->
            <div class="flex flex-col w-full absolute mt-6">
              <div
                class="relative scro order-1 max-h-0 opacity-0 bg-grayLightMode-50 dark:bg-gray-700 text-gray-300 dark:text-gray-300 w-full transition-all rounded-curl overflow-hidden"
              >
                <div
                  class="option text-sm transition-all py-2 px-6 cursor-pointer"
                >
                  <input
                    type="radio"
                    id="javascript"
                    name="langauges"
                    class="hidden"
                  />
                  <label class="cursor-pointer" for="javascript"
                    >Javascript</label
                  >
                </div>
                <div
                  class="option text-sm transition-all py-2 px-6 cursor-pointer"
                >
                  <input
                    type="radio"
                    id="python"
                    name="langauges"
                    class="hidden"
                  />
                  <label class="cursor-pointer" for="python">Python</label>
                </div>
                <div
                  class="option text-sm transition-all py-2 px-6 cursor-pointer"
                >
                  <input
                    type="radio"
                    id="java"
                    name="langauges"
                    class="hidden"
                  />
                  <label class="cursor-pointer" for="java">Java</label>
                </div>
                <div
                  class="option text-sm transition-all py-2 px-6 cursor-pointer"
                >
                  <input type="radio" id="c#" name="langauges" class="hidden" />
                  <label class="cursor-pointer" for="C#">C#</label>
                </div>
                <div class="option transition-all py-2 px-6 cursor-pointer">
                  <input type="radio" id="c++" name="c++" class="hidden" />
                  <label class="cursor-pointer" for="c++">C++</label>
                </div>
                <div
                  class="option text-sm transition-all py-2 px-6 cursor-pointer"
                >
                  <input
                    type="radio"
                    id="haskell"
                    name="haskell"
                    class="hidden"
                  />
                  <label class="cursor-pointer" for="haskell">Haskell</label>
                </div>
              </div>
              <div
                @click="activateDropdown"
                class="text-gray-300 cursor-pointer dark:text-gray-300 px-4 py-2 selected rounded-curl mb-2 relative bg-white dark:bg-gray-700"
              >
                {{ profile.flair ?? "Javascript" }}
              </div>
            </div>
          </span>
        </div>
        <div class="mb-8">
          <!--Location input-->
          <span class="lg:w-1/2 sm:w-full">
            <label for="location" class="ml-1">{{
              $t("appBar.ProfileSettingsView.location")
            }}</label
            ><br />
            <input
              type="text"
              v-model="profile.location"
              :placeholder="
                $t('appBar.ProfileSettingsView.placeholderLocation')
              "
              class="w-full text-gray-300 dark:text-white dark:placeholder-gray-500 placeholder-gray-200 px-6 focus:outline-0 py-2 mt-4 rounded-curl bg-grayLightMode-50 dark:bg-gray-700"
            />
          </span>
        </div>
        <div class="mb-4">
          <regular-button
            :text="$t('appBar.ProfileSettingsView.save')"
            :state="isLoading ? 'disabled' : 'regular'"
            @clicked="saveProfile"
          ></regular-button>
          <router-link
            class="cancel dark:text-grayLightMode-200 text-gray-800 text-sm underline ml-10 transition ease-out duration-300"
            :to="`/u/${currentUser.username}`"
            replace
          >
            {{ $t("appBar.ProfileSettingsView.cancel") }}</router-link
          >
        </div>
      </form>
      <!-- linked accounts -->
      <div class="mt-10">
        <h2
          class="text-xl font-bold dark:text-grayLightMode-100 text-gray-700 mb-2"
        >
          {{ $t("appBar.ProfileSettingsView.linkedAccounts") }}
        </h2>
        <p>{{ $t("appBar.ProfileSettingsView.linkText") }}</p>
        <!-- social media buttons -->
        <div
          class="flex xl:justify-start sm:justify-center align-center xl:flex-nowrap flex-wrap my-3"
        >
          <button
            class="mt-2 flex align-center py-2 px-6 mr-4 text-center bg-slate-300 rounded-curl text-gray-800 font-bold text-sm"
          >
            <svg
              aria-hidden="true"
              class="octicon octicon-mark-github"
              height="20"
              version="1.1"
              viewBox="0 0 16 16"
              width="24"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <span class="ml-2">GitHub</span>
          </button>
          <button
            class="btn mt-2 flex align-center py-2 px-6 mr-4 text-center dark:bg-gray-700 bg-gray-200 rounded-curl dark:text-gray-300 text-sm font-bold"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.29 18.0014C13.837 18.0014 17.965 11.8453 17.965 6.50628C17.965 6.33128 17.965 6.15731 17.953 5.98431C18.7544 5.41401 19.4477 4.70545 20 3.89153C19.2505 4.21918 18.4565 4.43356 17.644 4.52825C18.497 4.02724 19.1383 3.23287 19.448 2.29339C18.6407 2.76441 17.7596 3.09571 16.842 3.27337C16.0892 2.49106 15.0599 2.0346 13.9747 2.00189C12.8895 1.96918 11.8346 2.36302 11.036 3.09857C10.514 3.5792 10.1291 4.18989 9.92052 4.8681C9.71196 5.5463 9.68728 6.26755 9.849 6.95843C8.22359 6.88084 6.63217 6.46526 5.17612 5.7387C3.72008 5.01214 2.43133 3.99031 1.392 2.73821C0.868251 3.62758 0.708074 4.68479 0.944877 5.68939C1.18168 6.69398 1.79718 7.56849 2.663 8.1303C2.01078 8.11179 1.37228 7.93883 0.8 7.62542V7.6762C0.801 9.5992 2.178 11.2552 4.092 11.6362C3.48779 11.7987 2.85463 11.8226 2.24 11.7055C2.777 13.3515 4.318 14.4782 6.073 14.5112C4.34672 15.8444 2.16567 16.4463 0 16.1865C1.88279 17.3739 4.06405 18.0022 6.29 17.9985"
                fill="currentColor"
              />
            </svg>
            <span class="ml-2">Twitter</span>
          </button>
          <button
            class="btn mt-2 flex align-center py-2 px-6 mr-4 text-center dark:bg-gray-700 bg-gray-200 rounded-curl dark:text-gray-300 text-sm font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              fill="currentColor"
              class="bi bi-discord"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
              />
            </svg>
            <span class="ml-2">Discord</span>
          </button>
          <button
            class="btn mt-2 flex align-center py-2 px-6 mr-4 text-center dark:bg-gray-700 bg-gray-200 rounded-curl dark:text-gray-300 text-sm font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              fill="currentColor"
              class="bi bi-twitch"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"
              />
              <path
                d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"
              />
            </svg>
            <span class="ml-2">Twitch</span>
          </button>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import SettingsLayout from "@/components/Layout/SettingsLayout";
import regularButton from "@/components/modules/buttons/regularButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProfileSettingsView",

  data() {
    return {
      profile: {
        name: "",

        username: "",

        biography: "",

        website: "",
        flair: "",
        location: "",
        profile_pic: null,
        cover_pic: null,
      },

      isLoading: false,
    };
  },
  components: {
    // SettingsLayout,
    regularButton,
  },
  props: {
    coverImage: {
      type: String,
      default: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    },

    isOnline: {
      type: String,
      default: "online",
    },
  },
  computed: {
    // mapping to get current logged in user from store auth module
    ...mapGetters({ currentUser: ["authentication/getCurrentUser"] }),

    // If no new image has been selected return current profile image, else return selected image
    currentCoverPic() {
      console.log(typeof this.profile.cover_pic);
      if (
        !this.profile.cover_pic ||
        typeof this.profile.cover_pic == "string"
      ) {
        return this.profile.cover_pic ?? this.coverImage;
      } else {
        // if picture is file create an object url and use it as image source
        return URL.createObjectURL(this.profile.cover_pic);
      }
    },

    // If no new image has been selected return current profile image, else return selected image
    currentProfilePic() {
      if (
        !this.profile.profile_pic ||
        typeof this.profile.profile_pic == "string"
      ) {
        return this.profile.profile_pic ?? this.currentUser.avatar;
      } else {
        // if picture is file create an object url and use it as image source
        return URL.createObjectURL(this.profile.profile_pic);
      }
    },
  },

  created() {
    this.profile.username = this.currentUser.username;
    this.profile.biography = this.currentUser.biography ?? "";
    this.profile.name = this.currentUser.name;
    this.profile.website = this.currentUser.website ?? "";
    this.profile.flair = this.currentUser.flair ?? "";
    this.profile.location = this.currentUser.location ?? "";
    this.profile.profile_pic = this.currentUser.profile_pic ?? null;
    this.profile.cover_pic = this.currentUser.cover_pic ?? null;
  },
  methods: {
    activateDropdown() {
      const optionContainer = this.$el.querySelector(".scro");
      const option = this.$el.querySelectorAll(".option");
      const selected = this.$el.querySelector(".selected");

      optionContainer.classList.toggle("active");
      option.forEach((element) => {
        element.addEventListener("click", () => {
          selected.innerHTML = element.querySelector("label").innerHTML;
          this.profile.flair = selected.innerText;
          optionContainer.classList.remove("active");
        });
      });
    },

    selectProfilePic(e) {
      this.profile.profile_pic = e.target.files[0];
    },

    selectCoverPic(e) {
      console.log(e.target.files[0]);
      this.profile.cover_pic = e.target.files[0];
    },

    //This method saves fields which have been changed in the profile
    async saveProfile() {
      this.isLoading = true;

      const profile = {
        name: this.profile.name,
        username: this.profile.username,
        biography: this.profile.biography,
        website: this.profile.website,
        flair: this.profile.flair,
        location: this.profile.location,
        profile_pic: this.profile.profile_pic,
        cover_pic: this.profile.cover_pic,
      };

      //Allow only fields which have been modified
      if (profile.username === this.currentUser.username) {
        delete profile.username;
      }

      if (profile.name === this.currentUser.name || !profile.name) {
        delete profile.name;
      }

      if (
        profile.biography === this.currentUser.biography ||
        !profile.biography
      ) {
        delete profile.biography;
      }

      if (profile.website === this.currentUser.website || !profile.website) {
        delete profile.website;
      }

      if (profile.flair === this.currentUser.flair || !profile.flair) {
        delete profile.flair;
      }

      if (profile.location === this.currentUser.location || !profile.location) {
        delete profile.location;
      }

      if (
        profile.profile_pic === this.currentUser.profile_pic ||
        !profile.profile_pic
      ) {
        delete profile.profile_pic;
      }

      if (
        profile.cover_pic === this.currentUser.cover_pic ||
        !profile.cover_pic
      ) {
        delete profile.cover_pic;
      }

      //if there is any field which is different, we update the field

      if (Object.keys(profile).length > 0) {
        const formData = new FormData();

        console.log(profile);

        //append each changed key and corresponding value to the form data
        Object.keys(profile).forEach((key) => {
          formData.append(key, profile[key]);
        });

        await this.$store.dispatch("user/updateUserProfileAction", {
          _vm: this,
          profile: formData,
        });
      } else {
        this.$toast.info("No fields were changed", {
          position: "bottom",
        });
      }

      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.option:hover {
  background: #aaabac;
  color: #36383a;
}
.scro.active {
  max-height: 150px;
  opacity: 1;
  overflow-y: scroll;
}
.scro::-webkit-scrollbar {
  width: 6px;
  background: #474747;
  border-radius: 0 8px 8px 0;
}
.scro::-webkit-scrollbar-thumb {
  background: #767777;
  border-radius: 8px 8px 8px 8px;
}
.selected::after {
  content: "";
  background: url(../../../public/img/icons/arrow-drop.svg);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 32px;
  right: 10px;
  top: 5px;
  transition: all 0.4s;
}
.scro.active + .selected::after {
  transform: rotateX(180deg);
  top: -6px;
}
.btn {
  transition: 0.5s;
}
.btn:hover {
  color: rgba(255, 255, 255);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.edit {
  width: auto;
  height: 28px;
  border-radius: 7px;
  padding-left: 6px;
  padding-right: 6px;
}
.svg {
  height: 13px;
}
.cancel:hover {
  color: rgb(85, 85, 248);
}
</style>
