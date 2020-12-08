<template>
  <div class="content q-px-xl">
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
    <div class="row justify-center">
      <q-btn class="reg q-my-md text-bold" label="확인" flat @click="alert"></q-btn>
    </div>

  </div>
</template>

<style lang="sass">
.reg
  background: #3f9af7
  color: white
  width: 180px

</style>

<script>
export default {
  name: 'ProductSelect',
  data () {
    return {
      cate: '카테고리 선택',
      cates: [
        '의류', '가방', '지갑', '악세서리', '가전제품'
      ],
      brand: '브랜드 선택',
      brands: [
        '삼성', 'LG', '루이비통', '샤넬', '구찌'
      ],
      product: '제품 선택',
      products: [
        '노트북 xzd', '시계 yy7'
      ]
    }
  },
  methods: {
    alert () {
      this.$q.dialog({
        title: '상품 선택',
        message: '상품 선택이 완료되었습니다.',
        ok: true
      }).onOk(() => {
        this.$router.push('/register')
      })
    }
  }
}
</script>
