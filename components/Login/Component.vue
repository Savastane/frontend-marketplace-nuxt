
<template>

<div class="main-register-wrap modal"  v-if="modalStore.isModalVisible" :style="{ display: modalStore.isModalVisible ? 'block' : 'none' }" >
                <div class="reg-overlay" @click="hideModal" :style="{ display: modalStore.isModalVisible ? 'block' : 'none' }" ></div> 
                <div class="main-register-holder tabs-act">
                    <div :class="{ display: modalStore.isModalVisible ? 'main-register fl-wrap  modal_main vis_mr' : 'main-register fl-wrap  modal_main' }">
                        
                        <div class="main-register_title">Welcome to <span><strong>Town</strong>Hub<strong>.</strong></span></div>
                        <div class="close-reg" @click="hideModal" ><i class="fal fa-times"></i></div>
                        <ul class="tabs-menu fl-wrap no-list-style">
                            <li class="current"><a href="#tab-1"><i class="fal fa-sign-in-alt"></i> Login</a></li>
                            <li><a href="#tab-2"><i class="fal fa-user-plus"></i> Register</a></li>
                        </ul>
                        <!--tabs -->                       
                        <div class="tabs-container">
                            <div class="tab">
                                <!--tab -->
                                <div id="tab-1" class="tab-content first-tab">
                                    <div class="custom-form">
                                        <form method="post"  name="registerform">
                                            <label>Username or Email Address <span>*</span> </label>
                                            <input name="email" type="text"   @Click="" value="">
                                            <label >Password <span>*</span> </label>
                                            <input name="password" type="password"   @Click="" value="" >
                                            <button type="submit"  class="btn float-btn color2-bg"> Log In <i class="fas fa-caret-right"></i></button>
                                            <div class="clearfix"></div>
                                            <div class="filter-tags">
                                                <input id="check-a3" type="checkbox" name="check">
                                                <label for="check-a3">Remember me</label>
                                            </div>
                                        </form>
                                        <div class="lost_password">
                                            <a href="#">Lost Your Password?</a>
                                        </div>
                                    </div>
                                </div>
                                <!--tab end -->
                                <!--tab -->
                                <div class="tab">
                                    <div id="tab-2" class="tab-content">
                                        <div class="custom-form">
                                            <form method="post"   name="registerform" class="main-register-form" id="main-register-form2">
                                                <label >Full Name <span>*</span> </label>
                                                <input name="name" type="text"   @Click="" value="">
                                                <label>Email Address <span>*</span></label>
                                                <input name="email" type="text"  @Click="" value="">
                                                <label >Password <span>*</span></label>
                                                <input name="password" type="password"   @Click="" value="" >
                                                <div class="filter-tags ft-list">
                                                    <input id="check-a2" type="checkbox" name="check">
                                                    <label for="check-a2">I agree to the <a href="#">Privacy Policy</a></label>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div class="filter-tags ft-list">
                                                    <input id="check-abc" type="checkbox" name="check">
                                                    <label for="check-abc">I agree to the <a href="#">Terms and Conditions</a></label>
                                                </div>
                                                <div class="clearfix"></div>
                                                <button type="submit"     class="btn float-btn color2-bg"> Register  <i class="fas fa-caret-right"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!--tab end -->
                            </div>
                            <!--tabs end -->
                            <div class="log-separator fl-wrap"><span>or</span></div>
                            <div class="soc-log fl-wrap">
                                <p>For faster login or register use your social account.</p>
                                <a href="#" class="facebook-log"> Facebook</a>
                            </div>
                            <div class="wave-bg">
                                <div class='wave -one'></div>
                                <div class='wave -two'></div>
                            </div>
                        </div>
                    </div>
                </div>
                
</div>
            <!--register form end -->
<a class="to-top"><i class="fas fa-caret-up"></i></a>     

</template>


<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()

const hideModal = () => {
  modalStore.hideModal()
}
</script>