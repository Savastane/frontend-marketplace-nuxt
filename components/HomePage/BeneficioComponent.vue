<template>

<div class="listing-item" style="height: 526px;">
        <article class="geodir-category-listing fl-wrap">
            <div class="geodir-category-img">
                <div class="geodir-js-favorite_btn"><i class="fal fa-heart"></i><span>{{beneficio.save}}</span></div>
                <a href={{beneficio.url_link}} class="geodir-category-img-wrap fl-wrap">
                <img src={{beneficio.promocional_img}} alt=""> 
                </a>
                <div class="listing-avatar"><a href={{beneficio.url_link}}><img src={{beneficio.especialista_img}} alt=""></a>
                    <span class="avatar-tooltip">Adicionado por   <strong>{{beneficio.author}}</strong></span>
                </div>
                <div class="geodir_status_date gsd_open"><i class="fal fa-lock-open"></i>{{beneficio.state}}</div>
                <div class="geodir-category-opt">
                    <div class="listing-rating-count-wrap">
                        <div class="review-score">{{beneficio.reviewsscore}}</div>
                        <div class="listing-rating card-popup-rainingvis" data-starrating2="5"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><div class="card-popup-rainingvis_bg"><span class="card-popup-rainingvis_bg_item"></span><span class="card-popup-rainingvis_bg_item"></span><span class="card-popup-rainingvis_bg_item"></span><span class="card-popup-rainingvis_bg_item"></span><span class="card-popup-rainingvis_bg_item"></span><div></div></div></div>
                        <br>
                        <div class="reviews-count">{{beneficio.reviewscount}} Avaliações</div>
                    </div>
                </div>
            </div>
            <div class="geodir-category-content fl-wrap title-sin_item">
                <div class="geodir-category-content-title fl-wrap">
                    <div class="geodir-category-content-title-item">
                        <h3 class="title-sin_map"><a href={{beneficio.url_link}}>{{beneficio.especialista}}</a><span class="verified-badge"><i class="fal fa-check"></i></span></h3>
                        <div class="geodir-category-location fl-wrap"><a href="https://townhub.kwst.net/listing5.html#"><i class="fas fa-map-marker-alt"></i>{{beneficio.bairro}}</a></div>
                    </div>
                </div>
                <div class="geodir-category-text fl-wrap">
                    <p class="small-text">{{beneficio.promocional_text}}</p>
                    <div class="facilities-list fl-wrap">
                        <div class="facilities-list-title">Regras : </div>
                        <ul class="no-list-style">
                            <li class="tolt" data-microtip-position="top" data-tooltip="WiFi"><i class="fal fa-wifi"></i></li>
                            <li class="tolt" data-microtip-position="top" data-tooltip="Estacionamento"><i class="fal fa-parking"></i></li>
                            <li class="tolt" data-microtip-position="top" data-tooltip="Proibido fumar"><i class="fal fa-smoking-ban"></i></li>
                            <li class="tolt" data-microtip-position="top" data-tooltip="Pets bem vindos "><i class="fal fa-dog-leashed"></i></li>
                        </ul>
                    </div>
                </div>
                <div class="geodir-category-footer fl-wrap">
                    <a class="listing-item-category-wrap">
                        <div class="listing-item-category red-bg"><i class="fal fa-cheeseburger"></i></div>
                        <span>Studio de Tatuagem</span>
                    </a>
                    <div class="geodir-opt-list">
                        <ul class="no-list-style">
                            <li><a href="https://townhub.kwst.net/listing5.html#" class="show_gcc"><i class="fal fa-envelope"></i><span class="geodir-opt-tooltip">Contato</span></a></li>
                            <li><a href="https://townhub.kwst.net/listing5.html#1" class="single-map-item" data-newlatitude="40.72956781" data-newlongitude="-73.99726866"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span> </a></li>
                            <li>
                                <div class="dynamic-gal gdop-list-link" data-dynamicpath="[{&#39;src&#39;: &#39;images/all/1.jpg&#39;},{&#39;src&#39;: &#39;images/all/24.jpg&#39;}, {&#39;src&#39;: &#39;images/all/12.jpg&#39;}]"><i class="fal fa-search-plus"></i><span class="geodir-opt-tooltip">Galeria</span></div>
                            </li>
                        </ul>
                    </div>
                    <div class="price-level geodir-category_price">
                        <span class="price-level-item" data-pricerating="3"><strong>R$</strong><strong>100,</strong><strong>00</strong></span>
                        <span class="price-name-tooltip">Preço</span>
                    </div>
                    <div class="geodir-category_contacts">
                        <div class="close_gcc"><i class="fal fa-times-circle"></i></div>
                        <ul class="no-list-style">
                            <li><span><i class="fal fa-phone"></i> Telefone : </span><a href="https://townhub.kwst.net/listing5.html#"> {{beneficio.phone}} </a></li>
                            <li><span><i class="fal fa-envelope"></i> E-mail : </span><a href="https://townhub.kwst.net/listing5.html#"> {{beneficio.email}} </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    </div>


</template>

<script setup>
defineProps({
  beneficio: {
    type: Object,
    required: true
  }
});
</script>