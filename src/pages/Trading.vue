<template>
  <div class="q-pt-md">
    <q-toolbar class="justify-center text-bold">중고거래
    </q-toolbar>
    <div class="row">
      <router-link :to="'/'" style="text-decoration: none; color: black;">
        <q-btn flat label="< Back"/>
      </router-link>
      <q-space/>
      <q-btn flat icon="mdi-magnify"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trading',
  data () {
    return {

    }
  }
}
</script>
