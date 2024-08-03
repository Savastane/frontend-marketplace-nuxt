<template>
    <fieldset class="fl-wrap">
        <div class="list-single-main-item-title fl-wrap">
            <h3>Informações Pessoais</h3>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label class="vis-label">Nome<i class="far fa-user"></i></label>
                <input type="text" placeholder="Nome" value=""/>                                                  
            </div>
            <div class="col-sm-6">
                <label class="vis-label">Sobre Nome <i class="far fa-user"></i></label>
                <input type="text" placeholder="Sobre Nome" value=""/> 
            </div>
            <div class="col-sm-6">
                <label class="vis-label">Email<i class="far fa-envelope"></i>  </label>
                <input type="text" placeholder="seuemail@dominio.com.br" value=""/>                                                  
            </div>
            <div class="col-sm-6">
                <label class="vis-label">Celular<i class="far fa-phone"></i>  </label>
                <input type="text" placeholder="(99)9999-99999" value=""/>
            </div>
        </div>
        <div class="log-massage">Já é cadastrado? <a href="#" class="modal-open">Clique aqui para logar</a></div>
        <div class="log-separator fl-wrap"><span>Ou</span></div>
        <div class="soc-log fl-wrap">
            <p>Login e inscrição usando sua rede social.</p>
            <a href="#" class="facebook-log"> conectar via facebook</a>
        </div>
        <div class="filter-tags">
            <input id="check-a" type="checkbox" name="check">
            <label for="check-a">Aceito os <a href="#" target="_blank">termos e condições</a>.</label>
        </div>
        <span class="fw-separator"></span>
        <div class="clearfix"></div>
        <a  href="#"  class="next-form action-button color-bg">Próxima Etapa Dados de endereço </a>
    </fieldset>

</template>