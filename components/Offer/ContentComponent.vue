

<template>
    <div class="content">
        {{oferta.banner}}
        
        <section class="listing-hero-section hidden-section" data-scrollax-parent="true" id="sec1">
            <OfferBannerComponent :ofertaBanner ="oferta"/>
            <OfferContainerComponent :ofertaPromocional ="oferta"/> 
            <OfferMenuContent />
            <OfferBreadsCrumsComponent/>
            
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