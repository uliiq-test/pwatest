<template>
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
</template>