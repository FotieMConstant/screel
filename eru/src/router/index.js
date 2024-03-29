import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/authentication/LoginView.vue";
import GrantAccessView from "../views/authentication/GrantAccessView.vue";
import ProfileSettingsView from "../views/Settings/ProfileSettingsView.vue";
import AccountSettingsView from "../views/Settings/AccountSettingsView.vue";
import SettingsView from "../views/Settings/SettingsView.vue";
import ProfileView from "../views/User/ProfileView.vue"; // normal user profile view
import UserEventsView from "../views/User/UserEventsView.vue"; // normal user profile view
import SecurityAndPrivacyView from "../views/Settings/SecurityAndPrivacyView.vue";
import AppearanceSettingsView from "../views/Settings/AppearanceSettingsView.vue";
import NotificationsSettingsView from "../views/Settings/NotificationsSettingsView.vue";
import AdditionalResourcesView from "../views/Settings/AdditionalResourcesView.vue";
import DefaultProfileView from "../views/User/DefaultProfileView.vue"; // normal user profile view
import FollowersView from "../views/User/FollowersView.vue"; //  users follwing a user view
import FollowingView from "../views/User/FollowingView.vue"; // users a user is following view

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/access",
    name: "GrantAccessView",
    component: GrantAccessView,
  },
  {
    path: "/",
    name: "DefaultProfileView",
    redirect: { name: "ProfileView" }, // redirect to profile view
    component: DefaultProfileView,
    meta: {
      auth: true,
    },
    children: [
      {
        path: "/u/:username",
        name: "ProfileView",
        component: ProfileView,
        children: [
          {
            // UserEventsView will be rendered inside ProfileView's <router-view>
            // when /u/:username/events is matched
            // so will be the rest of the this route children
            path: "events",
            name: "UserEventsView",
            component: UserEventsView,
          },
        ],
      },
      {
        path: "/u/:username/followers",
        name: "FollowersView",
        component: FollowersView,
      },
      {
        path: "/u/:username/following",
        name: "FollowingView",
        component: FollowingView,
      },
    ],
  },
  {
    path: "/settings",
    redirect: { name: "ProfileSettingsView" }, // redirect to first child
    name: "SettingsView",
    component: SettingsView,
    meta: {
      auth: true,
    },
    children: [
      {
        // ProfileSettingsView will be rendered inside SettingsView's <router-view>
        // when /settings/profile is matched
        // so will be the rest of the this route children
        path: "profile",
        name: "ProfileSettingsView",
        component: ProfileSettingsView,
      },
      {
        path: "account",
        name: "AccountSettingsView",
        component: AccountSettingsView,
      },
      {
        path: "privacy_and_safety",
        name: "SecurityAndPrivacyView",
        component: SecurityAndPrivacyView,
      },
      {
        path: "accessibility",
        name: "AppearanceSettingsView",
        component: AppearanceSettingsView,
      },
      {
        path: "notifications",
        name: "NotificationsSettingsView",
        component: NotificationsSettingsView,
      },
      {
        path: "about",
        name: "AdditionalResourcesView",
        component: AdditionalResourcesView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// TODO: remove this when app is stable
store.state.API_DOMAIN = "https://screel-v1-api.youpi.cm"; // we manually update the api domain here to override the value in the localstorage

store.dispatch("authentication/getCurrentUser");
const currentUser = store.getters["authentication/getCurrentUser"]; // getting current user
// console.log(currentUser);

// navigation guard
router.beforeEach((to, from, next) => {
  // route guard. if user is not connected prevent them from going anywhere

  if (to.name === "LoginView" && currentUser) {
    next({
      path: "/",
    });
  } else if (to.meta.auth && !currentUser) {
    // keeping the redirect to local sessionStorage
    sessionStorage.setItem("redirect", to.fullPath); //mainly doing this because after user auths with social account the redirect url is lost
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
