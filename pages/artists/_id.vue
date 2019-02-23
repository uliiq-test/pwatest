<template>
  <div>
    <b>C012 アーティストー詳細(/pages/artists/_id.vue)</b><br>
    <nuxt-link to="/artists">←[C011 アーティスト一覧]</nuxt-link>
    <hr>
    <ui>
      <li>C012（1）バウンティプロジェクト一覧</li>
      <li>C012（2）公開作品一覧</li>
      <li>C012（3）ファンランキング（フォロワー）一覧</li>
      <li>C012（4）フォロー一覧</li>
      <li>C012（5）アクティビティ一覧</li>
    </ui>
    <hr>
    <cardtypea></cardtypea><br>
    アクティビティ<br>
    <div v-for="n in 3">
      <cardtypeb></cardtypeb><br>
    </div>
    バウンティ<br>
    <div v-for="n in 3">
      <cardtypea></cardtypea><br>
    </div>
    ランキング<br>
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
  components: {
    cardtypea,
    cardtypeb
  }
}
</script>
