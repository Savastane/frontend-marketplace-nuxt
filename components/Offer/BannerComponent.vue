<template>

<section class="parallax-section single-par" data-scrollax-parent="true">
      <div
        class="bg par-elem"
        :data-bg="''"
        data-scrollax="properties: { translateY: '30%' }"
        :style="{ backgroundImage: 'url(' + ofertaBanner.banner + ')', transform: 'translateZ(0px) translateY(-3.45324%)' }"
      ></div>
      
        <!-- <div class="bg par-elem " data-bg='' data-scrollax="properties: { translateY: &#39;30%&#39; }" style=`background-image: url(${{ofertaBanner.banner}}); transform: translateZ(0px) translateY(-3.45324%);`></div> -->
        <div class="overlay op7"></div>
        <div class="container">
            <div class="section-title center-align big-title">
                <h2><span>{{ofertaBanner.titulo}}</span></h2>
                <span class="section-separator"></span>
                <h4>{{ofertaBanner.subtitulo}}.</h4>
            </div>
        </div>
        <div class="header-sec-link">
            <a href="#" class="custom-scroll-link"><i class="fal fa-angle-double-down"></i></a> 
        </div>
</section> 


</template>

<script setup>
defineProps({
  ofertaBanner: {
    type: Object,
    required: false
  }
});


</script>