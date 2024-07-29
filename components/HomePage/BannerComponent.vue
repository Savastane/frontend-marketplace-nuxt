<template>

    <section class="parallax-section single-par" data-scrollax-parent="true">
            <div class="bg par-elem " data-bg='' data-scrollax="properties: { translateY: &#39;30%&#39; }" style='background-image: url("/image/home/tattoBanner.jpg"); transform: translateZ(0px) translateY(-3.45324%);'></div>
            <div class="overlay op7"></div>
            <div class="container">
                <div class="section-title center-align big-title">
                    <h2><span>Tatuagem</span></h2>
                    <span class="section-separator"></span>
                    <h4>Tatuagem - Service</h4>
                </div>
            </div>
            <div class="header-sec-link">
                <a href="#" class="custom-scroll-link"><i class="fal fa-angle-double-down"></i></a> 
            </div>
    </section>    
</template>

<script lang="ts" setup>
defineProps({
    banner_categoria: {
    type: String,
    default: '/image/home/tattoBanner.jpg',
  },
})
</script>