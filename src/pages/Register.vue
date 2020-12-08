<template>
  <div class="q-px-xl">
    <h4>물품 추가</h4>
    <div class="row">
      <div class="q-pt-sm q-pr-md">상품명 :</div>
      <router-link :to="'/product'" style="text-decoration: none; color: black;">
        <q-btn label="상품 찾으러 가기"/>
      </router-link>
    </div>
    <h6>보증서 사진 등록</h6>
    <q-btn class="pic-reg">
      <h6 class="text-bold">사진 등록 <br> + </h6>
    </q-btn>
    <div class="row q-pt-lg">
      <div class="text-bold q-pt-sm q-pr-lg">중고 마켓 공개</div>
      <q-radio v-model="open" val="1" label="허용" />
      <q-radio v-model="open" val="2" label="비허용" />
    </div>
    <div class="row q-py-md">
      <div class="q-pr-md">특이사항 : </div>
      <input type="text">
    </div>
    <q-btn class="reg q-my-md" label="보증서 등록" flat></q-btn>
  </div>
</template>

<style lang="sass">
.pic-reg
  width: 200px
  height: 150px
  @media (max-width: $breakpoint-xs)
    margin-left: 60px
.reg
  background: #3f9af7
  color: white
  width: 180px
  left: 42%
  @media (max-width: $breakpoint-md)
    left: 40%
  @media (max-width: $breakpoint-sm)
    left: 35%
  @media (max-width: $breakpoint-xs)
    left: 20%
</style>

<script>
export default {
  name: 'Register',
  data () {
    return {
      open: '1'
    }
  }
}
</script>
