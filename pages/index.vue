<template>
  <main>
    <div class="position-relative">
      <section class="section section-lg section-hero section-shaped section-main">
        <!-- Background circles
        <div class="shape shape-style-1 shape-primary">
          <span class="span-150"></span>
          <span class="span-50"></span>
          <span class="span-50"></span>
          <span class="span-75"></span>
          <span class="span-100"></span>
          <span class="span-75"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
        </div> -->
        <div class="container shape-container d-flex align-items-center py-lg wish">
          <div class="col px-0">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-12 text-center">
                <h2 style="color:white"><img src="~/assets/img/brand/logo.png" class="img-fluid"></h2>
                <p class="lead text-white">アイドル・アーティストの「お願い」を<br>ファンの行動で「叶える」。</p>
                <p class="lead text-white"><small>ブロックチェーンにより行動支援を見える化する、まったく新しいサービスです。</small></p>
                <div class="btn-wrapper mt-5">
                  <a href="#" class="btn btn-lg btn-info btn-icon mb-3 mb-sm-0">
                    <span class="btn-inner--icon"><i class="fas fa-info"></i></span>
                    <span class="btn-inner--text">WishHubって何？</span>
                  </a>
                  <nuxt-link to="/account/signup" class="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
                    <span class="btn-inner--icon"><i class="fas fa-pen"></i></span>
                    <span class="btn-inner--text">WishHubに参加</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SVG separator -->
        <div class="separator separator-bottom separator-skew zindex-100">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
    </div>
    <section class="section section-components">
      <div class="container">
      
        <!-- アーティスト -->
        <h2 class="mt-lg mb-5 text-center">
          <span><i class="fas fa-user-circle"></i> アイドル・アーティスト</span>
        </h2>
        
        <div class="slick">
        
					<div v-for="idol_artist in idol_artists" :key="idol_artist.name">
						<nuxt-link to="/artists/1">
							<div class="card card-lift--hover shadow border-0">
								<div class="card-body">
									<div class="d-block text-uppercase font-weight-bold mb-4 text-center">{{idol_artist.name}}</div>
										<p class="text-center"><small><i class="fas fa-book-open"></i> {{idol_artist.item}}冊　<i class="fas fa-heart"></i> {{idol_artist.like}}人</small></p>
										<p class="text-center"><img :src="idol_artist.image_url" alt="Circle image" class="img-fluid rounded-circle shadow" style="width: 150px;"></p>
										<p class="text-center"><a href="#" target="_blank"><i class="fa fa-twitter-square"></i></a> <a href="#" target="_blank"><i class="fa fa-instagram"></i></a> <a href="#" target="_blank"><i class="fa fa-facebook-square"></i></a></p>
									<div><small>{{idol_artist.introduction}}</small></div>
							  </div>
							</div>
						</nuxt-link>
					</div>
				</div>
        <nuxt-link to="/artists">
        <div class="text-center"><div class="btn btn-primary mt-4"><i class="fas fa-user-circle"></i> アイドル・アーティスト一覧</div></div>
        </nuxt-link>
        <!-- //アーティスト -->
        
        <!-- Wish -->
        <h2 class="mt-lg mb-5 text-center">
          <span><i class="fas fa-star"></i> Wish（ウィッシュ）</span>
        </h2>
        
        <div class="slick">
        
					<div v-for="wish in wishes" :key="wish.name">
						<nuxt-link to="/bounties/1">
              <div class="card card-lift--hover shadow border-0">
                <div class="card-body">
                  <div class="d-block text-uppercase font-weight-bold mb-4 text-center">{{wish.name}}</div>
                  <p class="text-center"><small><i class="fas fa-coins"></i> {{wish.coin}}枚　<i class="fas fa-running"></i> {{wish.remaining}}人</small></p>
                  <p class="text-center"><img class="img-fluid rounded shadow" :src="wish.image_url1" alt=""></p>
                  <p class="text-center"><img :src="wish.image_url2" alt="Circle image" class="img-fluid rounded-circle shadow" style="width: 60px;"> <a href="#" target="_blank"><i class="fa fa-twitter-square"></i></a> <a href="#" target="_blank"><i class="fa fa-instagram"></i></a> <a href="#" target="_blank"><i class="fa fa-facebook-square"></i></a></p>
                  <div><small>{{wish.requested_content}}</small></div>
                </div>
              </div>
						</nuxt-link>
					</div>
				</div>
        <nuxt-link to="/bounties">
        <div class="text-center"><div class="btn btn-primary mt-4"><i class="fas fa-star"></i> Wish（ウィッシュ）一覧</div></div>
        </nuxt-link>
        <!-- //Wish -->
		
				<!-- ショップ -->
        <h2 class="mt-lg mb-5 text-center">
          <span><i class="fas fa-store"></i> ショップ</span>
        </h2>
        
        <div class="slick">
					<div v-for="shop in shops" :key="shop.name">
						<nuxt-link to="/products/1">
              <div class="card card-lift--hover shadow border-0">
                <div class="card-body">
                  <div class="d-block text-uppercase font-weight-bold mb-4 text-center">{{shop.name}}</div>
                  <p class="text-center"><small><i class="fas fa-book-open"></i> {{shop.remaining}}</small></p>
                  <p class="text-center"><img class="img-fluid rounded shadow" :src="shop.image_url1" alt=""></p>
                  <p class="text-center"><img :src="shop.image_url2" alt="Circle image" class="img-fluid rounded-circle shadow" style="width: 60px;"> <a href="#" target="_blank"><i class="fa fa-twitter-square"></i></a> <a href="#" target="_blank"><i class="fa fa-instagram"></i></a> <a href="#" target="_blank"><i class="fa fa-facebook-square"></i></a></p>
                  <div><small>{{shop.introduction}}</small></div>
                  <div class="btn-wrapper">
                    <a href="#" class="btn btn-1 btn-outline-info">
                      <span class="btn-inner--icon"><i class="fas fa-book-reader"></i></span>
                      <span class="btn-inner--text">立ち読み</span>
                    </a>
                    <a href="#" class="btn btn-1 btn-outline-primary">
                      <span class="btn-inner--icon"><i class="fas fa-cart-arrow-down"></i></span>
                      <span class="btn-inner--text">カートへ</span>
                    </a>
                  </div>
                </div>
              </div>
						</nuxt-link>
					</div>
				</div>
        <nuxt-link to="/products">
        <div class="text-center"><div class="btn btn-primary mt-4"><i class="fas fa-store"></i> ショップ</div></div>
        </nuxt-link>
        <!-- //ショップ -->
		
	</div>
    </section>
    <section class="section section-shaped section-pick">
      <!-- <div class="shape shape-style-1 shape-default">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> -->
      <div class="container py-md">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5 mb-5 mb-lg-0">
            <h1 class="text-white font-weight-light">PICK UP</h1>
            <p class="lead text-white mt-4">アーティストや写真集のピックアップなどなどあれば</p>
            <a href="#" class="btn btn-white mt-4">もっと見る</a>
          </div>
          <div class="col-lg-6 mb-lg-auto">
            <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
              <div id="carousel_example" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carousel_example" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel_example" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="img-fluid" src="/test/img/theme/img-1-1200x1000.jpg" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="img-fluid" src="/test/img/theme/img-2-1200x1000.jpg" alt="Second slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carousel_example" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel_example" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- SVG separator -->
    </section>
  </main>
</template>

<script lang="ts">
export default {
  layout: 'top',
  async asyncData ({ app }) {
    const idol_artists = await app.$axios.$get("/test/stub_Idol_artist.json");
    const wishes = await app.$axios.$get("/test/stub_wish.json");
    const shops = await app.$axios.$get("/test/stub_shop.json");
     return {
       idol_artists,
       wishes,
       shops
     }
	 }
 }
</script>