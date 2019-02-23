<template>
  <div>
      <b v-if="$route.params.id >= 100">C022 作品詳細（プレビュー）(/pages/products/_id.vue)</b>
      <b v-else>C022 作品詳細（立ち読み）(/pages/products/_id.vue)</b><br>
    <nuxt-link to="/artists/1">↑[C012 アーティストー詳細]</nuxt-link><br>
    <!--<nuxt-link v-if="$route.params.id >= 100" to="/account/my">←[M003 マイページ]</nuxt-link>-->
    <!--<nuxt-link v-else to="/products">←[C021 公開作品一覧]</nuxt-link><br>-->
    <nuxt-link to="/products">←[C021 公開作品一覧]</nuxt-link><br>
    <div v-if="$route.params.id < 100">
      <ui>
        <li>M023 カート</li>
        <li>M024 特典交換</li>
      </ui>
    </div>
    <hr>
    <cardtypeb></cardtypeb><br>
    <cardtypea></cardtypea>
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