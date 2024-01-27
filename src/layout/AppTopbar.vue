<template>
  <div class="row container-topbar align-items-center mb-2">
    <div class="col-auto">
      <Button icon="pi pi-bars" @click="storeApp.toggle_sidebar" />
    </div>
    <div class="col title">
      {{storeApp.ruta_actual.title}}
    </div>
  </div>
</template>

<script setup >
  import { ref }      from "vue"
  import { AppStore } from "../stores/app"

  const storeApp = AppStore()
</script>

<style lang="scss" scoped>
.container-topbar{
  overflow:           hidden;
  height:             3.4rem;
  background-color: #FFF;
}

.container-topbar {
  .title {
    font-size: 1.25rem;
    font-weight: bold;
  }
}

</style>