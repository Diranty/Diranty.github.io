<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass">
.content
  font-family: "BMHANNA_11yrs_ttf", Arial, Helvetica, sans-serif
</style>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'MainLayout',
  components: {
    AppHeader
  },
  data () {
    return {

    }
  }
}
</script>
