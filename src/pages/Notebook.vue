<template>
  <div class="content q-px-xl">
    <h4>보증서 정보</h4>
    <h6>상품명 : 노트북 xzd</h6>
    <div class="row justify-center">
      <img width="90px" height="100px" class="q-px-sm" src="image/notebook.jpg">
      <img width="90px" height="100px" class="q-px-sm" src="image/1.jpg">
      <img width="90px" height="100px" class="q-px-sm" src="image/2.jpg">
    </div>
    <div class="row q-py-md">
      <div class="text-bold q-pt-sm q-pr-lg">중고 마켓 공개</div>
      <q-radio v-model="open" val="1" label="허용" />
      <q-radio v-model="open" val="2" label="비허용" />
    </div>
    <div class="row justify-center"><q-btn label="A/S 센터 사이트 바로가기" class="btn1"/></div>
    <div class="row justify-center"><q-btn label="A/S 센터 전화 바로걸기" class="btn2"/></div>
    <div class="row justify-center q-pb-lg">
      <router-link :to="'/manage'" style="text-decoration: none; ">
        <q-btn label="돌아가기" class="btn3 text-bold"/>
      </router-link>
    </div>

  </div>
</template>

<style lang="sass">
.btn1, .btn2, .btn3
  width: 270px
  height: 40px
  margin: 10px 0

.btn3
  background: black
  color: #b89130
  border: 4px solid #b89130

</style>

<script>
export default {
  name: 'Notebook',
  data () {
    return {
      open: '1'
    }
  }
}
</script>
