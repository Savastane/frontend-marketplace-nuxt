<template>


<div class="bg-parallax-wrap">
    <div class="bg par-elem " data-bg="" 
    data-scrollax="properties: { translateY: &#39;30%&#39; }"     
    :style="{ backgroundImage: 'url(' + ofertaBanner.banner + ')', transform: 'translateZ(0px) translateY(-2.63447%)' }"
    >
    </div>
    
    <div class="overlay"></div>
</div>

<div class="container">
  <div class="list-single-header-item  fl-wrap">
                                <div class="row">
                                    <div class="col-md-9">
                                        <h1>Studio Yellow Tatoo<span class="verified-badge"><i class="fal fa-check"></i></span></h1>
                                        <div class="geodir-category-location fl-wrap"><a href="#"><i class="fas fa-map-marker-alt"></i>Cajazeiras 4, Salvador</a> <a href="#"> <i class="fal fa-phone"></i>+71 98818-3587</a> <a href="#"><i class="fal fa-envelope"></i> studioyellow@gmail.com</a></div>
                                    </div>
                                    <div class="col-md-3">
                                        <a class="fl-wrap list-single-header-column custom-scroll-link " href="#sec5">
                                            <div class="listing-rating-count-wrap single-list-count">
                                                <div class="review-score">4.1</div>
                                                <div class="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                                <br>
                                                <div class="reviews-count">2 Avalições</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
   </div>

  <div class="list-single-header_bottom fl-wrap">
      <a class="listing-item-category-wrap" href="#">
          <div class="listing-item-category  red-bg"><i class="fal fa-cheeseburger"></i></div>
          <span>Tatuagem</span>
      </a>
      <div class="list-single-author"> <a href="https://townhub.kwst.net/author-single.html"><span class="author_avatar"> <img alt="" :src="ofertaBanner.foto">  </span>Savastane</a></div>
      <div class="geodir_status_date gsd_open"><i class="fal fa-lock-open"></i>Aberto</div>
      <div class="list-single-stats">
          <ul class="no-list-style">
              <li><span class="viewed-counter"><i class="fas fa-eye"></i> Visto -  156 </span></li>
              <li><span class="bookmark-counter"><i class="fas fa-heart"></i> Adiquirido -  24 </span></li>
          </ul>
      </div>
  </div>
</div>


</template>

<script setup>
defineProps({
  ofertaBanner: {
    type: Object,
    required: false
  }
});


</script>