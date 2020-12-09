<template>
  <div class="content q-pt-md">
    <q-toolbar class="justify-center text-bold">A/S 내역 조회
    </q-toolbar>
    <div class="row">
      <router-link :to="'/detail'" style="text-decoration: none; color: black;">
        <q-btn flat label="< Back"/>
      </router-link>
      <q-space/>
      <q-btn flat icon="mdi-magnify"/>
    </div>
    <hr>
    <div>
      <div class="q-py-md">
        <div class="row">
          <q-space/>
          <q-btn flat icon="mdi-heart-outline"/>
          <q-btn flat icon="mdi-forum"/>
        </div>
        <div class="row justify-center">
          <router-link :to="'/detail'">
            <img style="width: 250px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6cCSd_55hIekGdLcyTREGGpP4WdSofVpA6g&usqp=CAU">
          </router-link>
        </div>
        <div class="product__text q-px-lg text-bold">My favorite city :)</div>
        <div class="row q-pt-md q-px-md">
          <div class="q-px-sm">12 LIKES</div>
          <div class="q-px-sm">6 COMMENTS</div>
          <div class="q-px-sm">468 VIEWS</div>
        </div>
      </div>
    </div>
    <hr>
    <div class="q-px-lg">
      <div class="text-h6 q-py-md">1. 마모 수리(손잡이)</div>
      <div class="row">
        <img width="100px" height="80px" src="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDZfMjgg/MDAxNTg2MTc5MDc5MzE1.tZLHkVvrma6ddMEu9EeZ6fMWic0WTqfysNW0OdEAKyEg.hs9_H_Nb1JTM-FFXVB6itNvDkn5HHs1B1t71r8uP2sIg.JPEG.mercyms/output_3045387218.jpg?type=w800">
        <div class="q-pl-lg" style="font-size: 17px">수리일자 : 2020.04.26</div>
      </div>
    </div>
    <hr>
    <div class="q-px-lg">
      <div class="text-h6 q-py-md">2. 가방 하부 기스수리</div>
      <div class="row">
        <img width="100px" height="80px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVmzEPgP7cMQS6Unfz0h9Oacka0ZJndj2Mg&usqp=CAU">
        <div class="q-pl-lg" style="font-size: 17px">수리일자 : 2020.09.11</div>
      </div>
    </div>
    <hr>
    <div class="row justify-center q-py-lg">
      <router-link :to="'chat'" style="text-decoration: none;">
        <q-btn class="as__btn text-bold" label="채팅하기"/>
      </router-link>
      <router-link :to="'pay'" style="text-decoration: none">
        <q-btn class="as__btn text-bold" label="결제하기"/>
      </router-link>
    </div>
  </div>
</template>

<style lang="sass">
.product__text
  font-size: 20px
  color: #b89130
.as__btn
  width: 110px
  height: 50px
  margin: 10px
  background: black
  color: #b89130
  border: 4px solid #b89130

</style>

<script>
export default {
  name: 'Look',
  data () {
    return {

    }
  }
}
</script>
