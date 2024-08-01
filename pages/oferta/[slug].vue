<template>
    
    <HeaderBodyComponent/>   
    

    <!-- <h1>{{$route.params.slug}}</h1> -->

    <span v-if="pending">
            Loading...
    </span>
    <span v-else-if="data === null">
            carregando
     </span>
     <span v-else>
         <OfferContentComponent :oferta="data" />        
     </span>
</template>

<script >


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