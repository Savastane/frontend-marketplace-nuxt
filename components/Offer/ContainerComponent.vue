<template>
  <section class="gray-bg no-top-padding">
    <div class="container">
      <OfferBreadsCrumsComponent />    
      <div class="row">        
        <OfferPromocionalComponent :ofertaBanner = "ofertaPromocional"/> 
        <OfferDescriptionComponent />    
        
        
      </div>
    </div>
  </section>
  <div class="limit-box fl-wrap"></div>
</template>

<script setup>
defineProps({
  ofertaPromocional: {
    type: Object,
    required: true
  }
});


</script>