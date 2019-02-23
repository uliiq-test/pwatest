<template>
  <div>
    <nuxt-link to="/">[TOP]</nuxt-link>　ログイン済レイアウト(/layouts/my.vue)<br>
    ■メニュー<br>
    <ui>
      <li><nuxt-link to="/account/my">M003 マイページ</nuxt-link></li>
      <li><nuxt-link to="/account/my/profile">M011 プロフィール設定</nuxt-link></li>
      <!--<li>M012 アーティスト申請</li>-->
      <li><nuxt-link to="/account/my/artist_profile">M013 アーティストプロフィール設定</nuxt-link></li>
      <li><nuxt-link to="/account/my/bounties">M031 バウンティプロジェクト一覧</nuxt-link></li>
      <li><nuxt-link to="/account/my/products/create">M032 バウンティ プロジェクト作成</nuxt-link></li>
      <li><nuxt-link to="/account/my/products">M021 作品一覧</nuxt-link></li>
      <li><nuxt-link to="/account/my/books/create">M022 デジタル写真集作成</nuxt-link></li>
    </ui>
    <hr>
    ※ログインユーザの状態によって表示を切り替える
    <menuartist></menuartist>
    <br>
    <menufun></menufun>
    <br>
    △header△
    <hr color=black>
    <nuxt/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import menufun from '~/components/menu-fun.vue'
import menuartist from '~/components/menu-artist.vue'
export default {
  components: {
    menufun,
    menuartist
  }
}
</script>