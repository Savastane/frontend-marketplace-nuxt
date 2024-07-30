<template>

         <!--box-widget-item end -->
                <!--box-widget-item -->
                <div class="box-widget-item fl-wrap block_box">

<div class="box-widget-item-header">
    <h3>Selecionar o Horário</h3>
</div>
<div class="box-widget">
    <div class="box-widget-content">
        <form class="add-comment custom-form">
            <fieldset>
                <label><i class="fal fa-user"></i></label>
                <input type="text" placeholder="Nome *" value="">
                <div class="clearfix"></div>
                <label><i class="fal fa-envelope"></i>  </label>
                <input type="text" placeholder="Email*" value="">
                <div class="quantity fl-wrap">
                    <span><i class="fal fa-user-plus"></i>Pessoal : </span>
                    <div class="quantity-item">
                        <input type="button" value="-" class="minus">
                        <input type="text" name="quantity" title="Qty" class="qty color-bg" data-min="1" data-max="3" data-step="1" value="1">
                        <input type="button" value="+" class="plus">
                    </div>
                </div>
                <div class="listsearch-input-item clact date-container2">
                    <label><i class="fal fa-calendar"></i></label>
                    <input type="text" placeholder="Date / Time" name="datepicker-here-time" value="">
                    <span class="clear-singleinput"><i class="fal fa-times"></i></span>
                <div class="daterangepicker ltr single opensright"><div class="ranges"></div><div class="drp-calendar left single" style="display: block;"><div class="calendar-table">

                </div><div class="calendar-time"></div></div><div class="drp-calendar right" style="display: none;"><div class="calendar-table"></div><div class="calendar-time"></div></div>
                <div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn btn btn-sm btn-default" type="button">Limpar</button>
                    <button class="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apliciar</button> </div></div></div>
                <textarea cols="40" rows="3" placeholder="Informaçoes Adicionais:"></textarea>
            </fieldset>
            <button class="btn color2-bg url_btn float-btn" onclick="window.location.href=&#39;booking.html&#39;"> Horário desejado <i class="fal fa-bookmark"></i></button>
        </form>
    </div>
</div>
</div>
                
</template>