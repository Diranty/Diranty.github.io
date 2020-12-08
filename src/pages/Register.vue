<template>
  <div class="content q-px-xl">
    <h4>물품 추가</h4>
    <div class="row">
      <div class="q-pt-sm q-pr-md">상품명 :</div>
      <router-link :to="'/product'" style="text-decoration: none; color: black;">
        <q-btn label="상품 찾으러 가기"/>
      </router-link>
    </div>
    <h6>보증서 사진 등록</h6>
    <div class="row justify-center">
      <q-btn class="pic-reg">
        <h6 class="text-bold">+<br>사진 등록</h6>
      </q-btn>
    </div>
    <div class="row q-pt-lg">
      <div class="text-bold q-pt-sm q-pr-lg">중고 마켓 공개</div>
      <q-radio v-model="open" val="1" label="허용" />
      <q-radio v-model="open" val="2" label="비허용" />
    </div>
    <div class="row q-py-md">
      <div class="q-pr-md">특이사항 : </div>
      <input type="text">
    </div>
    <div class="row justify-center">
      <q-btn class="reg q-my-md text-bold" label="보증서 등록" flat @click="alert"></q-btn>
    </div>
  </div>
</template>

<style lang="sass">
.pic-reg
  width: 200px
  height: 150px

.reg
  background: #3f9af7
  color: white
  width: 180px

</style>

<script>
export default {
  name: 'Register',
  data () {
    return {
      open: '1'
    }
  },
  methods: {
    alert () {
      this.$q.dialog({
        title: '보증서 등록',
        message: '등록이 성공적으로 완료되었습니다.',
        ok: true
      }).onOk(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
