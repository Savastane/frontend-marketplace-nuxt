<template>
    <ul id="progressbar" class="no-list-style">
        <li class="active"><span class="tolt" data-microtip-position="top" data-tooltip="Personal Info">01.</span></li>
        <li><span class="tolt" data-microtip-position="top" data-tooltip="Billing Address">02.</span></li>
        <li><span class="tolt" data-microtip-position="top" data-tooltip="Payment Method">03.</span></li>
        <li><span class="tolt" data-microtip-position="top" data-tooltip="Confirm">04.</span></li>
    </ul>
    <div class="bookiing-form-wrap block_box fl-wrap">
        <!--   list-single-main-item -->
        <div class="list-single-main-item fl-wrap hidden-section tr-sec">
            <div class="profile-edit-container">
                <div class="custom-form">
                    <form>
                        <BuyWizardTab1Component />
                        <BuyWizardTab2Component />
                        <BuyWizardTab3Component />
                        <BuyWizardTab4Component />
                    </form> 

                </div>
            </div>
        </div>
    </div>
</template>
