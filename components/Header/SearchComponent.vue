<template>    
     
    <!-- header-search_btn-->         
    <div class="header-search_btn show-search-button"><i class="fal fa-search"></i><span>Pesquisar</span></div>
    <!-- header-search_btn end-->
    
    <!-- navigation  end -->
    <!-- header-search_container -->                     
    <div class="header-search_container header-search vis-search">
        <div class="container small-container">
            <div class="header-search-input-wrap fl-wrap">
                <!-- header-search-input --> 
                <div class="header-search-input">
                    <label><i class="fal fa-keyboard"></i></label>
                    <input type="text" placeholder="Onde quero procurar?" value="">  
                </div>
                <!-- header-search-input end -->  
                <!-- header-search-input --> 
                <div class="header-search-input location autocomplete-container">
                    <label><i class="fal fa-map-marker"></i></label>
                    <input type="text" placeholder="Location..." class="autocomplete-input pac-target-input" id="autocompleteid2" value="" autocomplete="off">
                    <a href="https://townhub.kwst.net/listing5.html#"><i class="fal fa-dot-circle"></i></a>
                </div>
                <!-- header-search-input end -->                                        
                <!-- header-search-input --> 
                <div class="header-search-input header-search_selectinpt ">
                    <select data-placeholder="Category" class="chosen-select no-radius" style="display: none;">
                        <option>Todas as Categorias</option>
                        <option>Todas as Categorias</option>
                        <option>Pets</option>
                        <option>Estética</option>
                        <option>Tattoo</option>
                        <option>Terapias</option>
                        <option>Físico</option>
                    </select><div class="nice-select chosen-select no-radius" tabindex="0"><span class="current">All Categories</span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."></div><ul class="list"><li data-value="All Categories" class="option selected">All Categories</li><li data-value="All Categories" class="option">All Categories</li><li data-value="Shops" class="option">Shops</li><li data-value="Hotels" class="option">Hotels</li><li data-value="Restaurants" class="option">Restaurants</li><li data-value="Fitness" class="option">Fitness</li><li data-value="Events" class="option">Events</li></ul></div>
                </div>
                <!-- header-search-input end --> 
                <button class="header-search-button green-bg" onclick="window.location.href=&#39;listing.html&#39;"><i class="far fa-search"></i> Search </button>
            </div>
            <div class="header-search_close color-bg"><i class="fal fa-long-arrow-up"></i></div>
        </div>
    </div>
    <!-- header-search_container  end --> 
    <!-- wishlist-wrap--> 
    <div class="header-modal novis_wishlist">
        <!-- header-modal-container--> 
        <div class="header-modal-container scrollbar-inner fl-wrap" data-simplebar="init"><div class="simplebar-wrapper" style="margin: -10px -20px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content" style="padding: 10px 20px; height: auto; overflow: hidden;">
            <!--widget-posts-->
            <div class="widget-posts  fl-wrap">
                <ul class="no-list-style">
                    <li>
                        <div class="widget-posts-img"><a href="https://townhub.kwst.net/listing-single.html"><img src ="#" data-1="./index1_files/1.png" alt=""></a>  
                        </div>
                        <div class="widget-posts-descr">
                            <h4><a href="https://townhub.kwst.net/listing-single.html">Iconic Cafe</a></h4>
                            <div class="geodir-category-location fl-wrap"><a href="https://townhub.kwst.net/listing5.html#"><i class="fas fa-map-marker-alt"></i> 40 Journal Square Plaza, NJ, USA</a></div>
                            <div class="widget-posts-descr-link"><a href="https://townhub.kwst.net/listing.html">Restaurants </a>   <a href="https://townhub.kwst.net/listing.html">Cafe</a></div>
                            <div class="widget-posts-descr-score">4.1</div>
                            <div class="clear-wishlist"><i class="fal fa-times-circle"></i></div>
                        </div>
                    </li>
                    <li>
                        <div class="widget-posts-img"><a href="https://townhub.kwst.net/listing-single.html"><img src ="#" data-1="./index1_files/2.png" alt=""></a>
                        </div>
                        <div class="widget-posts-descr">
                            <h4><a href="https://townhub.kwst.net/listing-single.html">MontePlaza Hotel</a></h4>
                            <div class="geodir-category-location fl-wrap"><a href="https://townhub.kwst.net/listing5.html#"><i class="fas fa-map-marker-alt"></i> SalvadorUSA </a></div>
                            <div class="widget-posts-descr-link"><a href="https://townhub.kwst.net/listing.html">Hotels </a>  </div>
                            <div class="widget-posts-descr-score">5.0</div>
                            <div class="clear-wishlist"><i class="fal fa-times-circle"></i></div>
                        </div>
                    </li>
                    <li>
                        <div class="widget-posts-img"><a href="https://townhub.kwst.net/listing-single.html"><img src ="#" data-1="./index1_files/3.png" alt=""></a>
                        </div>
                        <div class="widget-posts-descr">
                            <h4><a href="https://townhub.kwst.net/listing-single.html">Rocko Band in Marquee Club</a></h4>
                            <div class="geodir-category-location fl-wrap"><a href="https://townhub.kwst.net/listing5.html#"><i class="fas fa-map-marker-alt"></i>75 Prince St, NY, USA</a></div>
                            <div class="widget-posts-descr-link"><a href="https://townhub.kwst.net/listing.html">Events</a> </div>
                            <div class="widget-posts-descr-score">4.2</div>
                            <div class="clear-wishlist"><i class="fal fa-times-circle"></i></div>
                        </div>
                    </li>
                    <li>
                        <div class="widget-posts-img"><a href="https://townhub.kwst.net/listing-single.html"><img src ="#" data-1="./index1_files/4.png" alt=""></a>
                        </div>
                        <div class="widget-posts-descr">
                            <h4><a href="https://townhub.kwst.net/listing-single.html">Premium Fitness Gym</a></h4>
                            <div class="geodir-category-location fl-wrap"><a href="https://townhub.kwst.net/listing5.html#"><i class="fas fa-map-marker-alt"></i> W 85th St, New York, USA</a></div>
                            <div class="widget-posts-descr-link"><a href="https://townhub.kwst.net/listing.html">Fitness</a> <a href="https://townhub.kwst.net/listing.html">Gym</a> </div>
                            <div class="widget-posts-descr-score">5.0</div>
                            <div class="clear-wishlist"><i class="fal fa-times-circle"></i></div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- widget-posts end-->
        </div></div></div><div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); visibility: hidden;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: hidden;"><div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); visibility: hidden;"></div></div></div>
        <!-- header-modal-container end--> 
        <div class="header-modal-top fl-wrap">
            <h4>Your Wishlist : <span><strong>4</strong> Locations</span></h4>
            <div class="close-header-modal"><i class="far fa-times"></i></div>
        </div>
    </div>
</template>
