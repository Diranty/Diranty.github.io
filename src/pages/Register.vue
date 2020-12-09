<template>
  <div class="content q-px-xl">
    <h4>물품 추가</h4>
    <div class="row">
      <div class="q-pt-sm q-pr-md">상품명 :</div>
      <router-link :to="'/product'" style="text-decoration: none; color: black;">
        <q-btn label="상품 찾으러 가기"/>
      </router-link>
    </div>
    <div class="text-h6 q-py-lg">보증서 사진 등록</div>
    <div class="row justify-center">
      <q-file outlined v-model="model" label="사진 업로드">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="mdi-file-upload-outline" size="md"/>
          </q-avatar>
        </template>
      </q-file>
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
.reg
  background: black
  color: #b89130
  border: 4px solid #b89130
  width: 180px

</style>

<script>
export default {
  name: 'Register',
  data () {
    return {
      open: '1',
      model: null
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
