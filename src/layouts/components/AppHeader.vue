<template>
  <q-header class="content bg-white" >
    <q-toolbar class="logo_icon">
      <router-link :to="'/'">
        <img class="logo absolute-center" src="icons/logo.png">
      </router-link>
    </q-toolbar>
    <q-toolbar class="row text-black">
      <q-space/>
      <div>조성택 님</div>
      <q-btn flat icon="mdi-menu">
        <q-menu>
          <q-list style="min-width: 150px">
            <q-item clickable v-close-popup>
              <q-item-section>이전 구매내역</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>거래 내역</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>계좌 조회</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<style lang="sass">
.logo_icon
  height: 150px
</style>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {

    }
  }
}

</script>
