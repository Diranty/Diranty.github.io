<template>
  <div class="content q-px-xl">
    <h4>보증서 정보</h4>
    <h6>상품명 : 시계 yy7</h6>
    <div class="row justify-center">
      <img width="90px" class="q-px-sm" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/Y148E8/aa/a1/98/aaa19862a6ab4288bf5e4e98ad6e43f5/images/%EB%B3%B4%EC%A6%9D%EC%84%9C%EA%B4%80%EB%A6%AC%ED%8E%98%EC%9D%B4%EC%A7%80/image_u189.jpg?token=59d60fdbb6536ee2c8f65a6da884d4d273051bf032d138331e581b00bad98d1c">
      <img width="90px" class="q-px-sm" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/Y148E8/aa/a1/98/aaa19862a6ab4288bf5e4e98ad6e43f5/images/%EB%85%B8%ED%8A%B8%EB%B6%81_%EB%B3%B4%EC%A6%9D%EC%84%9C%EB%A5%BC_%EB%88%84%EB%A5%BC%EA%B2%BD%EC%9A%B0/image_u411.jpg?token=b33c36b9d9a4e6251cf175648a19dcf6c8db710ac99366c95e51d1d4272a657f">
      <img width="90px" class="q-px-sm" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/Y148E8/aa/a1/98/aaa19862a6ab4288bf5e4e98ad6e43f5/images/%EB%85%B8%ED%8A%B8%EB%B6%81_%EB%B3%B4%EC%A6%9D%EC%84%9C%EB%A5%BC_%EB%88%84%EB%A5%BC%EA%B2%BD%EC%9A%B0/image_u417.jpg?token=ffc767dba5975b637b1c4179480e0b4d9999d21b5a3e5d0cfdf5799b239a9d43">
    </div>
    <div class="row q-pt-lg">
      <div class="text-bold q-pt-sm q-pr-lg">중고 마켓 공개</div>
      <q-radio v-model="open" val="1" label="허용" />
      <q-radio v-model="open" val="2" label="비허용" />
    </div>
    <div class="row justify-center"><q-btn label="A/S 센터 사이트 바로가기" class="btn1"/></div>
    <div class="row justify-center"><q-btn label="A/S 센터 전화 바로걸기" class="btn2"/></div>
    <div class="row justify-center">
      <router-link :to="'/manage'" style="text-decoration: none; ">
        <q-btn label="돌아가기" class="btn3 text-bold"/>
      </router-link>
    </div>
  </div>
</template>

<style lang="sass">
.btn1, .btn2
  width: 310px
  height: 40px
  margin: 10px 0

.btn3
  background-color: #3f9af7
  color: white
  width: 280px

.watch__img
  width: 300px
  height: 400px
  padding: 30px
  @media (max-width: $breakpoint-sm)
    width: 200px
    height: 300px
    padding: 30px
  @media (max-width: $breakpoint-xs)
    width: 90px
    height: 150px
    padding: 10px
</style>

<script>
export default {
  name: 'Watch',
  data () {
    return {
      open: '1'
    }
  }
}
</script>
