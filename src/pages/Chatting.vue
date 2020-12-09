<template>
  <div class="content q-pt-md">
    <q-toolbar class="justify-center text-bold">채팅하기
    </q-toolbar>
    <div class="row">
      <router-link :to="'/detail'" style="text-decoration: none; color: black;">
        <q-btn flat label="< Back"/>
      </router-link>
      <q-space/>
      <q-btn flat icon="mdi-magnify"/>
    </div>
    <hr>
    <div class="q-pa-md row justify-center" style="height: 450px">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          name="나"
          :text="['안녕하세요~']"
          sent
        />
        <q-chat-message
          name="나"
          :text="['아직 구매 가능한가요??']"
          sent
        />
        <q-chat-message
          name="판매자"
          :text="['네, 가능합니다 !!']"
        />
      </div>
    </div>
    <hr>
    <div class="row justify-center q-pb-lg">
      <q-btn class="chat__btn text-bold" label="예약하기" @click="alert"/>
      <router-link :to="'pay'" style="text-decoration: none">
        <q-btn class="chat__btn text-bold" label="결제하기"/>
      </router-link>
    </div>
  </div>
</template>

<style lang="sass">
.chat__btn
  width: 110px
  height: 50px
  margin: 10px
  background: black
  color: #b89130
  border: 4px solid #b89130
</style>

<script>
export default {
  name: 'Chatting',
  data () {
    return {

    }
  },
  methods: {
    alert () {
      this.$q.dialog({
        title: '예약하기',
        message: '예약이 성공적으로 완료되었습니다.',
        ok: true
      }).onOk(() => {
        this.$router.push('/detail')
      })
    }
  }
}
</script>
