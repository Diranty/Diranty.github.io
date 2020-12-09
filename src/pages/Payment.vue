<template>
  <div class="content q-pt-md">
    <q-toolbar class="justify-center text-bold">결제하기
    </q-toolbar>
    <div class="row">
      <router-link :to="'/detail'" style="text-decoration: none; color: black;">
        <q-btn flat label="< Back"/>
      </router-link>
      <q-space/>
      <q-btn flat icon="mdi-magnify"/>
    </div>
    <hr>
    <div class="q-px-lg">
      <div class="row">
        <q-icon class="q-pt-sm" name="mdi-credit-card-check-outline" size="xl" color="primary"/>
        <div class="text-h4 q-py-md">결제하기</div>
      </div>
      <div class="q-py-md">
        <div class="text-h6 q-py-md">결제수단 선택</div>
        <q-radio v-model="pay" val="1" label="카드결제" />
        <q-radio v-model="pay" val="2" label="무통장 입금" />
      </div>
      <div class="q-py-md">
        <div class="text-h6 q-py-md">배송지 입력</div>
        <q-radio v-model="del" val="1" label="신규 배송지 추가" />
        <q-radio v-model="del" val="2" label="회원정보와 동일" />
      </div>
      <div class="q-py-md">
        <div class="text-h6 q-py-md">입금 계좌</div>
        <div class="row">
          <q-select class="col-5" outlined v-model="model" :options="options" label="은행" />
          <input class="col-7" type="text" placeholder="계좌번호를 입력하세요.">
        </div>
      </div>
      <div class="row justify-center q-py-lg">
        <q-btn class="pay__btn text-bold" label="결제하기" @click="chk=true"/>
      </div>
    </div>
    <q-dialog v-model="chk" persistent>
      <q-card style="width: 400px color: #b89130">
        <q-card-section class="row items-center">
          <q-avatar class="q-ml-sm" icon="mdi-credit-card-check-outline" color="primary" text-color="white" />
          <span class="q-ml-md">결제를 정말 완료하시겠습니까 ? </span>
        </q-card-section>
        <q-card-actions align="right" class="q-pr-md">
          <q-btn flat label="아니요" color="primary" v-close-popup />
          <q-btn flat label="네" color="primary" @click="alert" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="sass">
.pay__btn
  width: 110px
  height: 50px
  background: black
  color: #b89130
  border: 4px solid #b89130
</style>

<script>
export default {
  name: 'Payment',
  data () {
    return {
      pay: null,
      del: '1',
      model: null,
      options: [
        '농협은행', '우리은행', '신한은행', '하나은행', '기업은행'
      ],
      chk: false
    }
  },
  methods: {
    alert () {
      this.$q.dialog({
        title: '결제완료',
        message: '결제가 성공적으로 완료되었습니다.',
        ok: true
      }).onOk(() => {
        this.$router.push('/detail')
      })
    }
  }
}
</script>
