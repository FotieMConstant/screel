import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileSettingsView from "../views/Settings/ProfileSettingsView.vue";
import AccountSettingsView from "../views/Settings/AccountSettingsView.vue";
import SettingsView from "../views/Settings/SettingsView.vue";
import ProfileView from "../views/ProfileView.vue"; // normal user profile view
import SecurityAndPrivacyView from "../views/Settings/SecurityAndPrivacyView.vue";
import AppearanceSettingsView from "../views/Settings/AppearanceSettingsView.vue";
import NotificationsSettingsView from "../views/Settings/NotificationsSettingsView.vue";
import AdditionalResourcesView from "../views/Settings/AdditionalResourcesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/user/:id", // we pass in the username here and it returns the usr profile
    name: "ProfileView",
    component: ProfileView,
  },
  {
    path: "/settings",
    redirect: { name: "ProfileSettingsView" }, // redirect to first child
    name: "SettingsView",
    component: SettingsView,
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

export default router;
