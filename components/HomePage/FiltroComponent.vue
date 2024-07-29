<template>
     <div class="col-md-4">
        <div class=" fl-wrap lws_mobile   tabs-act block_box">
            <div class="filter-sidebar-header fl-wrap" id="filters-column">
                <ul class="tabs-menu fl-wrap no-list-style">
                    <li class="current"><a href="https://townhub.kwst.net/listing5.html#filters-search"> <i class="fal fa-sliders-h"></i> Filtros </a></li>
                    <li><a href="https://townhub.kwst.net/listing5.html#category-search"> <i class="fal fa-image"></i>Categorias </a></li>
                </ul>
            </div>
            <div class="scrl-content filter-sidebar    fs-viscon">
                <!--tabs -->                       
                <div class="tabs-container fl-wrap">
                    <!--tab -->
                    <div class="tab">
                        <div id="filters-search" class="tab-content  first-tab ">
                            <!-- listsearch-input-item-->
                            <div class="listsearch-input-item">
                                <span class="iconn-dec"><i class="far fa-bookmark"></i></span>
                                <input type="text" placeholder="Onde encontrar ?" value="">
                            </div>
                            <!-- listsearch-input-item end-->
                            <!-- listsearch-input-item-->
                            <div class="listsearch-input-item">
                                <select data-placeholder="Categories" class="chosen-select no-search-select" style="display: none;">
                                    <option>Todas as Categorias</option>
                                    <option>Tatuagem</option>
                                    <option>Pets</option>
                                    <option>Terapias</option>
                                    <option>Est�tica</option>
                                    <option>Fisioterapua</option>
                                </select>
                                <div class="nice-select chosen-select no-search-select" tabindex="0"><span class="current">Todas as Categorias</span><div class="nice-select-search-box">
                                 <input type="text" class="nice-select-search" placeholder="Search...">
                                </div><ul class="list"><li data-value="All Categories" class="option selected">All Categories</li><li data-value="Shops" class="option">Shops</li><li data-value="Hotels" class="option">Hotels</li><li data-value="Restaurants" class="option">Restaurants</li><li data-value="Fitness" class="option">Fitness</li><li data-value="Events" class="option">Events</li></ul></div>
                            </div>
                            <!-- listsearch-input-item end-->
                            <!-- listsearch-input-item-->
                            <div class="listsearch-input-item">
                                <select data-placeholder="City/Location" class="chosen-select no-search-select" style="display: none;">
                                    <option>Todas as Cidades</option>
                                    <option>Salvador</option>
                                    <option>Chicago</option>
                                    <option>Los Angeles</option>
                                    <option>Washington</option>
                                    <option>Boston</option>
                                </select><div class="nice-select chosen-select no-search-select" tabindex="0"><span class="current">Todas as Cidades</span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."></div><ul class="list"><li data-value="All Cities" class="option selected">All Cities</li><li data-value="New York" class="option">Salvador</li><li data-value="Chicago" class="option">Chicago</li><li data-value="Los Angeles" class="option">Los Angeles</li><li data-value="Washington" class="option">Washington</li><li data-value="Boston" class="option">Boston</li></ul></div>
                            </div>
                            <!-- listsearch-input-item end-->                                                     
                            <!-- listsearch-input-item-->
                            
                            <!-- listsearch-input-item end-->                                                       
                            <!-- listsearch-input-item-->
                            <div class="listsearch-input-item">
                                <button class="toggle-filter-btn tsb_act "><i class="fal fa-clock"></i> <span>Pesquisar</span></button>
                            </div>
                            <!-- listsearch-input-item end-->  
                            <!-- listsearch-input-item-->
                            <div class="listsearch-input-item clact date-container">
                                <span class="iconn-dec"><i class="fal fa-calendar"></i></span>
                                <input type="text" placeholder="Event Date" name="datepicker-here" value="">
                                <span class="clear-singleinput"><i class="fal fa-times"></i></span>
                            <div class="daterangepicker ltr single auto-apply opensright"><div class="ranges"></div><div class="drp-calendar left single" style="display: block;"><div class="calendar-table"></div><div class="calendar-time" style="display: none;"></div></div><div class="drp-calendar right" style="display: none;"><div class="calendar-table"></div><div class="calendar-time" style="display: none;"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn btn btn-sm btn-default" type="button">Clear</button><button class="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button> </div></div></div>
                            <!-- listsearch-input-item end--> 
                            <!-- listsearch-input-item-->
                            <div class="listsearch-input-item">
                                <div class="price-rage-wrap fl-wrap">
                                    <div class="price-rage-wrap-title"><i class="fal fa-hand-holding-usd"></i> Pre�o :</div>
                                    <div class="price-rage-item fl-wrap">
                                        <span class="irs js-irs-0"><span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: visible;">$</span><span class="irs-max" style="visibility: visible;">$$$$</span><span class="irs-from" style="visibility: hidden;">0</span><span class="irs-to" style="visibility: hidden;">0</span><span class="irs-single" style="left: 29.2683%;">$$</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 3.65854%; width: 30.8943%;"></span><span class="irs-bar-edge"></span><span class="irs-shadow shadow-single" style="display: none;"></span><span class="irs-slider single" style="left: 30.8943%;"></span></span><input type="text" class="price-range irs-hidden-input" data-min="0" data-max="4" name="price-range1" data-step="1" value="$$" tabindex="-1" readonly="">
                                    </div>
                                </div>
                            </div>
                            <!-- listsearch-input-item end-->                                                                                          
                            <!-- listsearch-input-item-->
                            <div class="listsearch-input-item clact">
                                <div class=" fl-wrap filter-tags">
                                    <ul class="no-list-style">
                                        <li>
                                            <input id="check-aa" type="checkbox" name="check">
                                            <label for="check-aa">Elevator in building</label>
                                        </li>
                                        <li>
                                            <input id="check-b" type="checkbox" name="check">
                                            <label for="check-b">Friendly workspace</label>
                                        </li>
                                        <li>
                                            <input id="check-c" type="checkbox" name="check" checked="">
                                            <label for="check-c">Instant Book</label>
                                        </li>
                                        <li>
                                            <input id="check-d" type="checkbox" name="check">
                                            <label for="check-d">Wireless Internet</label>
                                        </li>
                                        <li>
                                            <input id="check-d2" type="checkbox" name="check" checked="">
                                            <label for="check-d2">Free WiFi</label> 
                                        </li>
                                        <li>
                                            <input id="check-d3" type="checkbox" name="check" checked="">
                                            <label for="check-d3">Free Parking</label> 
                                        </li>
                                        <li>   
                                            <input id="check-d4" type="checkbox" name="check">
                                            <label for="check-d4">Smoking Allowed</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- listsearch-input-item end-->                                                    
                            <!-- listsearch-input-item-->
                            <div class="listsearch-input-item">
                                <button class="header-search-button color-bg" onclick="window.location.href=&#39;listing.html&#39;"><i class="far fa-search"></i><span>Search</span></button>
                            </div>
                            <!-- listsearch-input-item end-->                                                     
                            <div class="clear-filter-btn"><i class="far fa-redo"></i> Reset Filters</div>
                        </div>
                    </div>
                    <!--tab end-->
                    <!--tab --> 
                    <div class="tab">
                        <div id="category-search" class="tab-content">
                            <div class="fl-wrap">
                                <a class="category-carousel-item fl-wrap full-height checket-cat" href="https://townhub.kwst.net/listing5.html#">
                                    <img src="#" data-1="./index1_files/12.jpg" alt="">
                                    <div class="category-carousel-item-icon red-bg"><i class="fal fa-cheeseburger"></i></div>
                                    <div class="category-carousel-item-container">
                                        <div class="category-carousel-item-title">Restaurants / Cafe</div>
                                        <div class="category-carousel-item-counter">6 listings</div>
                                    </div>
                                </a>
                                <a class="category-carousel-item fl-wrap full-height" href="https://townhub.kwst.net/listing5.html#">
                                    <img src="#" data-1="./index1_files/34.jpg" alt=""> 
                                    <div class="category-carousel-item-icon yellow-bg"><i class="fal fa-bed"></i></div>
                                    <div class="category-carousel-item-container">
                                        <div class="category-carousel-item-title">Hotel / Hostel</div>
                                        <div class="category-carousel-item-counter">14 listings</div>
                                    </div>
                                </a>
                                <a class="category-carousel-item fl-wrap full-height" href="https://townhub.kwst.net/listing5.html#">
                                    <img src="#" data-i="./index1_files/33.jpg" alt=""> 
                                    <div class="category-carousel-item-icon purp-bg"><i class="fal fa-cocktail"></i></div>
                                    <div class="category-carousel-item-container">
                                        <div class="category-carousel-item-title">Events / Nightlife</div>
                                        <div class="category-carousel-item-counter">6 listings</div>
                                    </div>
                                </a>
                                <a class="category-carousel-item fl-wrap full-height" href="https://townhub.kwst.net/listing5.html#">
                                    <img src="#" data-i="./index1_files/10.jpg" alt=""> 
                                    <div class="category-carousel-item-icon blue-bg"><i class="fal fa-dumbbell"></i></div>
                                    <div class="category-carousel-item-container">
                                        <div class="category-carousel-item-title">Fitness / Gym</div>
                                        <div class="category-carousel-item-counter">18 listings</div>
                                    </div>
                                </a>
                                <a class="category-carousel-item fl-wrap full-height" href="https://townhub.kwst.net/listing5.html#">
                                    <img src="#" data-i="./index1_files/11.jpg" alt=""> 
                                    <div class="category-carousel-item-icon green-bg"><i class="fal fa-cart-arrow-down"></i></div>
                                    <div class="category-carousel-item-container">
                                        <div class="category-carousel-item-title">Shopping</div>
                                        <div class="category-carousel-item-counter">19 listings</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--tab end-->
                </div>
                <!--tabs end-->                         
            </div>
        </div>
        <a class="back-tofilters color2-bg custom-scroll-link fl-wrap" href="https://townhub.kwst.net/listing5.html#filters-column" style="z-index: 12;">Back to filters <i class="fas fa-caret-up"></i></a><div></div>
    </div>
</template>