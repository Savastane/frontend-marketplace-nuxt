<template>
                                                            <fieldset class="fl-wrap">
                                                                <div class="list-single-main-item-title fl-wrap">
                                                                    <h3>Payment method</h3>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <label class="vis-label">Cardholder's Name<i class="far fa-user"></i></label>
                                                                        <input type="text" placeholder="" value="Adam Kowalsky"/>                                                  
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <label class="vis-label">Card Number <i class="fal fa-credit-card-front"></i></label>
                                                                        <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" value=""/> 
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-3">
                                                                        <label class="vis-label">Expiry Month<i class="fal fa-calendar"></i></label>
                                                                        <input type="text" placeholder="MM" value=""/>                                                  
                                                                    </div>
                                                                    <div class="col-sm-3">
                                                                        <label class="vis-label">Expiry Year<i class="fal fa-calendar"></i></label>
                                                                        <input type="text" placeholder="YY" value=""/>                                                  
                                                                    </div>
                                                                    <div class="col-sm-2">
                                                                        <label class="vis-label">CVV / CVC *<i class="fal fa-credit-card"></i></label>
                                                                        <input type="password" placeholder="***" value=""/> 
                                                                    </div>
                                                                    <div class="col-sm-4">
                                                                        <p style="padding-top:20px;">*Three digits number on the back of your card</p>
                                                                    </div>
                                                                </div>
                                                                <div class="log-separator fl-wrap"><span>or</span></div>
                                                                <div class="soc-log fl-wrap">
                                                                    <p>Select Other Payment Method</p>
                                                                    <a href="#" class="paypal-log"> Pay With Paypal</a>
                                                                </div>
                                                                <span class="fw-separator"></span>
                                                                <a  href="#"  class="previous-form  back-form action-button    color2-bg">Back</a>
                                                                <a  href="#"  class="next-form  action-button   color-bg">Confirm and Pay</a>                                               
                                                            </fieldset>    
</template>