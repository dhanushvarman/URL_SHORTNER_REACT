import React from 'react'

function Pricing() {
    return (
        <div class="testing" style={{marginTop:"-100px"}}>
            <h1 className='shorten-heading mb-4' style={{ fontSize: "30px" }}>Pricing for brands and businesses of all sizes</h1>
            <div class="cards-testing">
                <div class="cards-wrapper" style={{padding:"10px"}}>
                    <div class="cards light" style={{height:"350px",width:"300px"}}>
                        <div class="text-overlay">
                            <h2>Individual</h2>
                            <div class="price">$79 <small>/ year</small></div>
                            <div class="details-text">
                                <span>1 contributor</span>
                                <span>Up to 30 links</span>
                                <span>Up to 10,000 Clicks tracked per month</span>
                                <span>24/7 support</span>
                            </div>
                        </div>
                        <div class="purchase-button-testing">
                            <h2 class="back-h2">Individual</h2>
                            <i class="fa-solid fa-person" id='pricing'></i>
                            <div class="purchase-button light">Purchase</div>
                        </div>
                    </div>
                </div>
                <div class="cards-wrapper" style={{padding:"10px"}}>
                    <div class="cards dark" style={{height:"350px",width:"300px"}}>
                        <div class="text-overlay">
                            <h2>Team</h2>
                            <div class="price">$129<small>/ year</small></div>
                            <div class="details-text">
                                <span>10 contributors</span>
                                <span>Up to 70 links</span>
                                <span>Up to 20,000 Clicks tracked per month</span>
                                <span>24/7 support</span>
                            </div>
                        </div>
                        <div class="purchase-button-testing">
                            <h2 class="back-h2">Team</h2>
                            <i class="fa-solid fa-people-group" id='pricing'></i>
                            <div class="purchase-button dark">Purchase</div>
                        </div>
                    </div>
                </div>
                <div class="cards-wrapper" style={{padding:"10px"}}>
                    <div class="cards light" style={{height:"350px",width:"300px"}}>
                        <div class="text-overlay">
                            <h2>Organization</h2>
                            <div class="price">$199<small>/ year</small></div>
                            <div class="details-text">
                                <span>100 contributors</span>
                                <span>Up to 200 links</span>
                                <span>Up to 40,000 Clicks tracked per month</span>
                                <span>24/7 support</span>
                                <span>Access to Beta features</span>
                            </div>
                        </div>
                        <div class="purchase-button-testing">
                            <h2 class="back-h2">Organization</h2>
                            <i class="fa-solid fa-building" id='pricing'></i>
                            <div class="purchase-button light">Purchase</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing