<template>
    <a href="https://townhub.kwst.net/dashboard-add-listing.html" class="add-list color-bg">RESTRITO <span><i class="fal fa-layer-plus"></i></span></a>
    <div class="cart-btn   show-header-modal" data-microtip-position="bottom" role="tooltip" aria-label="Your Wishlist"><i class="fal fa-heart"></i>
    <span class="cart-counter green-bg">5</span> </div>

    <div class="show-reg-form modal-open avatar-img" data-srcav="../assets/images/avatar.jpg"  @click="showModal" ><i class="fal fa-user"></i>Autenticar
        
    </div>
    <!-- header opt end--> 
    <!-- lang-wrap-->
    <div class="lang-wrap">
        <div class="show-lang"><span><i class="fal fa-globe-europe"></i><strong>Pituba</strong></span><i class="fa fa-caret-down arrlan"></i></div>
        <ul class="lang-tooltip lang-action no-list-style">
            <li><a href="#" class="current-lan" data-lantext="En">Brotas</a></li>
            <li><a href="#" data-lantext="Fr">Pituba</a></li>
            <li><a href="#" data-lantext="Es">Campo Grande</a></li>
            <li><a href="#" data-lantext="De">Cajazeiras</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()

const showModal = () => {    
    
  modalStore.showModal()
}

</script>