<template>
  <div class="q-px-xl">
    <h4>보증서 정보</h4>
    <h6>상품명 : 노트북 xzd</h6>
    <div class="row justify-center">
      <img class="col-4 q-px-md" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/Y148E8/aa/a1/98/aaa19862a6ab4288bf5e4e98ad6e43f5/images/%EB%B3%B4%EC%A6%9D%EC%84%9C%EA%B4%80%EB%A6%AC%ED%8E%98%EC%9D%B4%EC%A7%80/image_u188.jpg?token=0669da53020f017d2ae58b2bad83390f0f2b03af8e69ddeabcdf1ff665d979e7">
      <img class="col-4 q-px-md" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/Y148E8/aa/a1/98/aaa19862a6ab4288bf5e4e98ad6e43f5/images/%EB%85%B8%ED%8A%B8%EB%B6%81_%EB%B3%B4%EC%A6%9D%EC%84%9C%EB%A5%BC_%EB%88%84%EB%A5%BC%EA%B2%BD%EC%9A%B0/image_u411.jpg?token=b33c36b9d9a4e6251cf175648a19dcf6c8db710ac99366c95e51d1d4272a657f">
      <img class="col-4 q-px-md" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/Y148E8/aa/a1/98/aaa19862a6ab4288bf5e4e98ad6e43f5/images/%EB%85%B8%ED%8A%B8%EB%B6%81_%EB%B3%B4%EC%A6%9D%EC%84%9C%EB%A5%BC_%EB%88%84%EB%A5%BC%EA%B2%BD%EC%9A%B0/image_u417.jpg?token=ffc767dba5975b637b1c4179480e0b4d9999d21b5a3e5d0cfdf5799b239a9d43">
    </div>
    <div class="row q-pt-lg">
      <div class="text-bold q-pt-sm q-pr-lg">중고 마켓 공개</div>
      <q-radio v-model="open" val="1" label="허용" />
      <q-radio v-model="open" val="2" label="비허용" />
    </div>
    <q-btn label="A/S 센터 사이트 바로가기" class="btn1"/>
    <q-btn label="A/S 센터 전화 바로걸기" class="btn2"/>
    <q-btn label="돌아가기" class="btn3"/>
  </div>
</template>

<style lang="sass">
.btn1, .btn2, .btn3
  width: 310px
  height: 40px
  margin: 10px 0

.btn3
  background-color: #3f9af7
  color: white
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
