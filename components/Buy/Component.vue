<script setup="ts">
let teste ="Compra";
</script>


<template>
      
    <div id="wrapper">
        <!-- content-->
        <div class="content">


            <section class="gray-bg no-top-padding-sec" id="sec1">
                        <div class="container">
                            <div class="breadcrumbs inline-breadcrumbs fl-wrap block-breadcrumbs">
                                <a href="#">Home</a><a href="#">Pages</a> <span>Adquirir Serviço </span> 
                            </div>
                            <div class="list-main-wrap-title single-main-wrap-title fl-wrap">
                                <h2>{{teste}} Adquirir o serviço : <span>Studio Tatto Yellow</span></h2>
                            </div>

                            <div class="fl-wrap ">    
                                <div class="row">
                                    <BuyWizardComponent />
                                </div>
                            </div>
                        </div>

              
            </section>


        </div>
    </div>
    
</template>
