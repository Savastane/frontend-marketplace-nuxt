<template>

    <div class="col-md-8">
        <!-- list-main-wrap-header-->
        <div class="list-main-wrap-header fl-wrap block_box no-vis-shadow">
            <!-- list-main-wrap-title-->
            <div class="list-main-wrap-title">
                <h2>Resultado : <span>Salvador </span></h2>
            </div>
            <!-- list-main-wrap-title end-->
            <!-- list-main-wrap-opt-->
            <div class="list-main-wrap-opt">
                <!-- price-opt-->
                <div class="price-opt">
                    <span class="price-opt-title">Ordenar:</span>
                    <div class="listsearch-input-item">
                        <select data-placeholder="Popularidade" class="chosen-select no-search-select" style="display: none;">
                            <option>Popularidade</option>
                            <option>Rancking</option>
                            <option>Preço mais baixo</option>
                            <option>Preço mais alto</option>
                        </select><div class="nice-select chosen-select no-search-select" tabindex="0"><span class="current">Popularidade</span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."></div><ul class="list"><li data-value="Popularity" class="option selected">Popularity</li><li data-value="Average rating" class="option">Average rating</li><li data-value="Price: low to high" class="option">Price: low to high</li><li data-value="Price: high to low" class="option">Price: high to low</li></ul></div>
                    </div>
                </div>
                <!-- price-opt end-->
                <!-- price-opt-->
                <div class="grid-opt">
                    <ul class="no-list-style">
                        <li class="grid-opt_act"><span class="two-col-grid act-grid-opt tolt" data-microtip-position="bottom" data-tooltip="Grid View"><i class="fal fa-th"></i></span></li>
                        <li class="grid-opt_act"><span class="one-col-grid tolt" data-microtip-position="bottom" data-tooltip="List View"><i class="fal fa-list"></i></span></li>
                    </ul>
                </div>
                <!-- price-opt end-->
            </div>
            <!-- list-main-wrap-opt end-->                    
        </div>

        <!-- list-main-wrap-header end-->                            
        <!-- listing-item-container -->
        <div class="listing-item-container init-grid-items fl-wrap nocolumn-lic">   
                

            {
            beneficiosLista.items.map((dados) =>                    
            <ContentBeneficioComponent 
                        phone={dados.phone} 
                        email={dados.email}
                        save={dados.save}
                        author={dados.author}
                        state={dados.state}
                        reviewscount={dados.reviewscount}
                        reviewsscore={dados.reviewsscore}
                        bairro={dados.bairro}
                        especialista={dados.especialista}
                        promocional_img={dados.promocional_img}
                        especialista_img={dados.especialista_img}
                        promocional_text={dados.promocional_text}
                        url_link={dados.url_link}
            />)                        
            }
            
            
            <ContentPaginationComponent />



        </div>
        <!-- listing-item-container end -->


    </div>
</template>