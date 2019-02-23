<template>
  <div>
    <header class="header-global">
      <!-- CHG: index.html -> ./ -->
      <!-- CHG: ./assets   -> ~/assets -> ./ -->
      <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
        <div class="container">
          <a class="navbar-brand mr-lg-5" href="./">
            <img src="~/assets/img/brand/logo.png">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbar_global">
            <div class="navbar-collapse-header">
              <div class="row">
                <div class="col-6 collapse-brand">
                  <nuxt-link to="/">
                    <img src="~/assets/img/brand/logo.png">
                  </nuxt-link>
                </div>
                <div class="col-6 collapse-close">
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
              <li class="nav-item dropdown">
                <!-- DEL:href="#" -->
                <nuxt-link to="/artists" class="nav-link" data-toggle="dropdown" role="button">
                  <span class="nav-link-inner--text"><i class="fas fa-user-circle"></i> アイドル・アーティスト</span>
                </nuxt-link>
                <div class="dropdown-menu dropdown-menu-xl">
                  <div class="dropdown-menu-inner">
                    <nuxt-link to="/artists/1" class="media d-flex align-items-center">
                      <div class="media-body ml-3">
                        <h6 class="heading text-primary mb-md-1">アイドル</h6>
                      </div>
                    </nuxt-link>
                     <nuxt-link to="/artists/1"  class="media d-flex align-items-center">
                      <div class="media-body ml-3">
                        <h6 class="heading text-primary mb-md-1">モデル</h6>
                      </div>
                    </nuxt-link>
                     <nuxt-link to="/artists/1"  class="media d-flex align-items-center">
                      <div class="media-body ml-3">
                        <h5 class="heading text-primary mb-md-1">コスプレーヤー</h5>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown">
                <!-- DEL:href="wish" -->
                <nuxt-link to="/bounties"  class="nav-link" data-toggle="dropdown" role="button">
                  <span class="nav-link-inner--text"><i class="fas fa-star"></i> Wish（ウィッシュ）</span>
                </nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <!-- DEL:href="photobook" -->
                <nuxt-link to="/products"  class="nav-link" data-toggle="dropdown" role="button">
                  <span class="nav-link-inner--text"><i class="fas fa-store"></i> ショップ</span>
                </nuxt-link>
              </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="https://www.facebook.com/propie" target="_blank" data-toggle="tooltip" title="Like us on Facebook">
                  <i class="fa fa-facebook-square"></i>
                  <span class="nav-link-inner--text d-lg-none">Facebook</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="https://www.instagram.com/propie" target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                  <i class="fa fa-instagram"></i>
                  <span class="nav-link-inner--text d-lg-none">Instagram</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="https://twitter.com/propie" target="_blank" data-toggle="tooltip" title="Follow us on Twitter">
                  <i class="fa fa-twitter-square"></i>
                  <span class="nav-link-inner--text d-lg-none">Twitter</span>
                </a>
              </li>
              <li class="nav-item d-none d-lg-block ml-lg-4">
                <nuxt-link to="/account/signup" target="_blank" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon">
                    <i class="fas fa-sign-in-alt"></i>
                  </span>
                  <span class="nav-link-inner--text"> ログイン</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <nuxt/>
    <footer class="footer has-cards">
    <div class="container">
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-3">
          <div class="copyright">
            &copy; 2004-2019
            <a href="https://www.contentsworks.co.jp" target="_blank">Contents Works Inc.</a>
          </div>
        </div>
        <div class="col-md-9">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <nuxt-link to="/about" class="nav-link">WishHubについて</nuxt-link>
            </li>
            <li class="nav-item">
              <a href="contact" class="nav-link">お問い合わせ</a>
            </li>
            <li class="nav-item">
              <nuxt-link to="/rules" class="nav-link">利用規約</nuxt-link>
            </li>
            <li class="nav-item">
              <a href="https://www.contentsworks.co.jp/" class="nav-link">プライバシーポリシー</a>
            </li>
            <li class="nav-item">
              <nuxt-link to="/tradelaw" class="nav-link">特定商取引法に関する表示</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>
