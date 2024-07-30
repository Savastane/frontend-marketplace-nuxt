<template>
    
    <HeaderBodyComponent/>   

    <!-- <h1>{{$route.params.slug}}</h1> -->

    <div v-if="pending">
            Loading...
    </div>
    <div v-else-if="data === null">
            carregando
     </div>
     <div v-else>
         <OfferContentComponent :oferta="data" />        
     </div>
</template>

<script>


export default {

  data() {
    return {
      data: null,
    };
  },

  async mounted() {
    const url = useRequestURL()
    let url_json =  `${url.protocol}//${url.host}/data/Oferta/tatto/${this.$route.params.slug}/dados.json`;    
    const response = await fetch(url_json);
    this.data = await response.json();

  },
};

</script>