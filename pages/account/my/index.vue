<template>
  <div>
    <b>M003 マイページ(/pages/account/my/index.vue)</b>
    <hr>
    <ui>
      <li>M003（1）参加バウンティプロジェクト一覧</li>
        <div style="text-indent:2em"><nuxt-link to="/bounties/102">C032 バウンティ詳細</nuxt-link></div>
        <div style="text-indent:2em"><nuxt-link to="/bounties/103">C032 バウンティ詳細</nuxt-link></div>
        <div style="text-indent:2em"><nuxt-link to="/bounties/104">C032 バウンティ詳細</nuxt-link></div>
      <li>M003（2）所有作品一覧</li>
        <div style="text-indent:2em"><nuxt-link to="/products/102">C022 作品詳細（プレビュー）</nuxt-link></div>
        <div style="text-indent:2em"><nuxt-link to="/products/103">C022 作品詳細（プレビュー）</nuxt-link></div>
        <div style="text-indent:2em"><nuxt-link to="/products/104">C022 作品詳細（プレビュー）</nuxt-link></div>
      <li>M003（3）フォロワー一覧</li>
      <li>M003（4）フォロー一覧</li>
    </ui>
    <hr>
    <cardtypea></cardtypea><br>
    バウンティ<br>
    <div v-for="n in 3">
      <cardtypea></cardtypea><br>
    </div>
    所有作品<br>
    <div v-for="n in 3">
      <cardtypea></cardtypea><br>
    </div>
    フォロワー<br>
    <div v-for="n in 3">
      <cardtypeb></cardtypeb><br>
    </div>
    フォロー<br>
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
  layout: 'my',
  components: {
    cardtypea,
    cardtypeb
  }
}
</script>