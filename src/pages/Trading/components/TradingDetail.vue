<template>
  <div class="content q-pt-md">
    <q-toolbar class="justify-center text-bold">중고거래
    </q-toolbar>
    <div class="row">
      <router-link :to="'/trading'" style="text-decoration: none; color: black;">
        <q-btn flat label="< Back"/>
      </router-link>
      <q-space/>
      <q-btn flat icon="mdi-magnify"/>
    </div>
    <div class="product__box">
      <div class="q-py-md">
        <div class="row">
          <q-btn flat icon="mdi-account-outline"/>
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
    <h5 class="text-center text-bold">구찌 가방 팔아요</h5>
    <div class="q-px-md q-pb-lg">
      작년 여행갔을때 구매했습니다. <br>
      눈에 띄지는 않지만 약간의 생활기스 있으며, 구김 살짝 있어요! <br>
      교환/환불 불가하며 충분히 고민하시고 연락주세요~
    </div>
    <hr>
    <div class="q-pl-lg text-h6">- 보증서 : 유</div>
    <div class="row">
      <div class="q-pl-lg text-h6 q-mr-lg">- A/S 횟수 : 2회</div>
      <router-link :to="'/look'" style="text-decoration: none; color: black;">
        <q-btn label="조회"/>
      </router-link>
    </div>
    <div class="q-pl-lg text-h6">- 구매일자 : 2019.12.17</div>
    <hr>
    <div class="row items-center q-pb-lg">
      <h4 class="q-pl-xl">800,000원</h4>
      <q-space/>
      <router-link :to="'/chat'" style="text-decoration: none;">
        <q-btn class="chat q-mr-lg text-bold" label="채팅하기"/>
      </router-link>
    </div>
  </div>
</template>

<style lang="sass">
.product__text
  font-size: 20px
  color: #3f9af7
.product__box
  border: 1px solid black
.chat
  background-color: #3f9af7
  color: white
  height: 60px
  width: 120px
</style>

<script>
export default {
  name: 'TradingDetail',
  data () {
    return {

    }
  }
}
</script>
