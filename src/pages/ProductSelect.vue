<template>
  <div class="q-px-xl">
    <h4>상품명 선택</h4>
    <div class="row">
      <h5>카테고리 선택</h5>
      <q-space/>
      <q-select v-model="cate" :options="cates" />
    </div>
    <div class="row">
      <h5>브랜드 선택</h5>
      <q-space/>
      <q-select v-model="brand" :options="brands" />
    </div>
    <div class="row">
      <h5>제품 선택</h5>
      <q-space/>
      <q-select v-model="product" :options="products" />
    </div>
    <q-btn class="reg q-my-md" label="확인" flat></q-btn>
  </div>
</template>

<style lang="sass">
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
  name: 'ProductSelect',
  data () {
    return {
      cate: '카테고리',
      cates: [
        '의류', '가방', '지갑', '악세서리', '가전제품'
      ],
      brand: '브랜드',
      brands: [
        '삼성', 'LG', '루이비통', '샤넬', '구찌'
      ],
      product: '제품',
      products: [
        '노트북 xzd', '시계 yy7'
      ]
    }
  }
}
</script>
