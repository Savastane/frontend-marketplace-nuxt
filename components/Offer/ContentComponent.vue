

<template>
    <div class="content">
        <section class="listing-hero-section hidden-section" data-scrollax-parent="true" id="sec1">
            <OfferBannerComponent :ofertaBanner ="oferta"/>
            <OfferMenuComponent />           
            <OfferContainerComponent :ofertaPromocional ="oferta"/>                          
        </section>
    </div>
</template>

<script setup>
defineProps({
  oferta: {
    type: Object,
    required: false
  }
});
</script>