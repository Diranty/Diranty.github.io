<template>
  <div class="content q-px-xl">
    <div class="row">
      <div class="text-h4 q-py-md">내 카드</div><q-space/>
      <q-btn flat label="+ 카드추가" class="text-primary"/>
    </div>
    <table style="width: 100%">
      <th colspan="2">카드명</th>
      <th>관리</th>
      <tr align="center">
        <td><img src="image/card.png" width="70px" class="q-pt-sm"></td>
        <td>농협카드 NH20 해봄카드</td>
        <td class="td__1"><q-btn label="삭제" @click="cart_del"/></td>
      </tr>
    </table>
    <div class="row q-pt-xl">
      <div class="text-h4 q-py-md">내 계좌</div><q-space/>
      <q-btn flat label="+ 계좌추가" class="text-primary"/>
    </div>
    <table style="width: 100%">
      <th colspan="2">은행/계좌</th>
      <th>관리</th>
      <tr align="center">
        <td><img src="image/nhlogo.png" width="70px" class="q-pt-sm"></td>
        <td>농협은행 301-0000-0000</td>
        <td class="td__1"><q-btn label="삭제" @click="account_del"/></td>
      </tr>
    </table>
  </div>
</template>

<style lang="sass">
table, th, .td__1
  border: 1px solid black
table
  border-collapse: collapse
th
  height: 50px
  vertical-align: middle
</style>

<script>
export default {
  name: 'Account',
  data () {
    return {

    }
  },
  methods: {
    cart_del () {
      this.$q.dialog({
        title: '카드 삭제하기',
        message: '카드를 정말 삭제하시겠습니까 ?',
        ok: true,
        cancel: true
      })
    },
    account_del () {
      this.$q.dialog({
        title: '계좌 삭제하기',
        message: '계좌를 정말 삭제하시겠습니까 ?',
        ok: true,
        cancel: true
      })
    }
  }
}
</script>
