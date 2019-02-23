<template>
  <div>
    <b>C032 バウンティプロジェクト詳細(/pages/bounties/_id.vue)</b><br>
    <nuxt-link v-if="$route.params.id >= 100" to="/account/my/bounties"><!--←[M031 バウンティプロジェクト一覧]--></nuxt-link>
    <nuxt-link v-else to="/bounties">←[C031 バウンティプロジェクト一覧]</nuxt-link>
    <hr>
    <ui>
      <li>C032（1）バウンティ一覧</li>
      <div v-if="$route.params.id >= 100">
        <div style="text-indent:2em"><nuxt-link to="/bounties/102">C032（2）バウンティ詳細</nuxt-link></div>
        <div style="text-indent:2em"><nuxt-link to="/bounties/103">C032（2）バウンティ詳細</nuxt-link></div>
        <div style="text-indent:2em"><nuxt-link to="/bounties/104">C032（2）バウンティ詳細</nuxt-link></div>
      </div>
      <div v-else>
        <div style="text-indent:2em"><nuxt-link to="/bounties/2">C032（2）バウンティ詳細</nuxt-link></div>
        <div style="text-indent:2em"><nuxt-link to="/bounties/3">C032（2）バウンティ詳細</nuxt-link></div>
        <div style="text-indent:2em"><nuxt-link to="/bounties/4">C032（2）バウンティ詳細</nuxt-link></div>
      </div>
      <li>C032（3）バウンティプロジェクト参加者</li>
      <li>C032（5）コメント一覧</li>
    </ui>
    <ui v-if="$route.params.id >= 100">
      <li>M033 バウンティ プロジェクト完了</li>
    </ui>
    <hr>
    <cardtypeb></cardtypeb><br>
    アクション
    <div v-for="n in 3">
      <cardtypea></cardtypea><br>
    </div>
    参加者
    <div v-for="n in 3">
      <cardtypeb></cardtypeb><br>
    </div>
    コメント
    <div v-for="n in 3">
      <cardtypeb></cardtypeb><br>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import cardtypea from '~/components/card-type-a.vue'
import cardtypeb from '~/components/card-type-b.vue'
export default {
  components: {
    cardtypea,
    cardtypeb
  }
}
</script>
