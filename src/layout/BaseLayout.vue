<template>
  <AppTopbar></AppTopbar>
  <router-view></router-view>
  <ModalsManager></ModalsManager>
  <Spinner :loading="storeApp.loading"></Spinner>
</template>

<script setup>
  import Spinner   from './Spinner.vue'
  import { AppStore } from "../stores/app"
  import ModalsManager   from './ModalsManager.vue'
  import AppTopbar from './AppTopbar.vue';
  
  const storeApp = AppStore()
</script>