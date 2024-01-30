<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sombra">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/GFC logo.png" class="img-logo" alt="">
        Grupo Fotográfico Centro
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>

        <form class="d-flex">
          <button v-for="(btn, i) in botones[storeApp.get_context()][storeApp.ruta_actual.path]" :key="i" 
              type="button" class="btn btn-primary sombra ml-1" @click="btn_click(btn)">{{ btn.label }}</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup >
import { ref } from "vue"
import { AppStore } from "../stores/app"
import { useRouter } from 'vue-router'

const storeApp = AppStore()
const router = useRouter()

const enlaces = ref({
  'logedin': [

  ],
  'logedout': [

  ]
})

const botones = ref({
  'logedin': [

  ],
  'logedout': {
    '/login': [
      { label: "REGISTRARME", "path": "/register" },
    ],
    '/register': [
      { label: "INGRESAR", "path": "/login" },
    ],
    '/home': [
      { label: "INGRESAR", "path": "/login" },
      { label: "REGISTRARME", "path": "/register" },
    ]
  }

})


function btn_click(btn){
  storeApp.ruta_actual = btn
  router.push(btn.path)
}
</script>

<style lang="scss" scoped>
.img-logo{
  width:  3rem;
  height: 3rem;
}
</style>