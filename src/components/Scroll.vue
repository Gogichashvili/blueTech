<template>
    <transition mode="out-in">
        <section id="section1">
            <div class="box">
                <div class="carClass">
                    <div class="car">
                    <img src="@/assets/Mercedes.png">
                    <div class="imgCircle"></div>
                    </div>
                    <div class="mark">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 6L16.2471 14.74L22.7942 20.25L15 17.02L7.20577 20.25L13.7529 14.74L15 6Z" fill="#5F92D2"/>
                            <circle cx="15" cy="15" r="14.5" stroke="#2D2B2B"/>
                        </svg>
                        <p>Mercedes-benz  C200 AMG 2021</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                </div>

                <div class="carClass">
                    <div class="car">
                    <img src="@/assets/Mercedes 2.svg">
                    <div class="imgCircle"></div>
                    </div>
                    <div class="mark">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 6L16.2471 14.74L22.7942 20.25L15 17.02L7.20577 20.25L13.7529 14.74L15 6Z" fill="#5F92D2"/>
                            <circle cx="15" cy="15" r="14.5" stroke="#2D2B2B"/>
                        </svg>
                        <p>Mercedes-benz  C200 AMG 2021</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                </div>

                <div class="carClass">
                    <div class="car">
                    <img src="@/assets/Skoda.png">
                    <div class="imgCircle"></div>
                    </div>
                    <div class="mark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="11.5" stroke="#2D2B2B"/>
                            <circle cx="19" cy="3" r="2" fill="#5F92D2"/>
                        </svg>
                        <p>Skoda Octavia 2021</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                </div>

                <div class="carClass">
                    <div class="car">
                    <img src="@/assets/Kia.png">
                    <div class="imgCircle"></div>
                    </div>
                    <div class="mark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="11.5" stroke="#2D2B2B"/>
                            <circle cx="19" cy="3" r="2" fill="#5F92D2"/>
                        </svg>
                        <p>Kia Optima 2021</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
                </div>
            </div>
        </section>
    </transition>
    
</template>

<script>
export default {
    
}
</script>

<style>


.carClass {
    color: #fff;
    font: 16px/2 Helvetica;
    padding-top: 150px;
    scroll-snap-align: start;
}

.car {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mark {
    padding-top: 35px;
    display: flex;
    align-items: center;
}

.mark p {
    padding-left: 10px;
    font-size: 14px Helvetica;
}

.imgCircle {
    border: 2px solid #5F92D2;
    width: 860px;
    height: 150px;
    border-radius: 428px / 75px;
    margin-top: -145px;
    margin-right: 16px;
    z-index: -10;
}


</style>