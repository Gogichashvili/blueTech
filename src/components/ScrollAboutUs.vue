<template>
    <section id="section2">
        <div class="aboutPage">
        <div class="contact">
            <div class="phone">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.29333 3.55556C6.4 5.13778 6.66667 6.68444 7.09333 8.16L4.96 10.2933C4.23111 8.16 3.76889 5.90222 3.60889 3.55556H6.29333ZM23.8222 24.9244C25.3333 25.3511
                    26.88 25.6178 28.4444 25.7244V28.3733C26.0978 28.2133 23.84 27.7511 21.6889 27.04L23.8222 24.9244ZM8 0H1.77778C0.8 0 0 0.8 0 1.77778C0 18.4711 13.5289 32 30.2222
                    32C31.2 32 32 31.2 32 30.2222V24.0178C32 23.04 31.2 22.24 30.2222 22.24C28.0178 22.24 25.8667 21.8844 23.8756 21.2267C23.6978 21.1556 23.5022 21.1378 23.3244 
                    21.1378C22.8622 21.1378 22.4178 21.3156 22.0622 21.6533L18.1511 25.5644C13.12 22.9867 8.99556 18.88 6.43556 13.8489L10.3467 9.93778C10.8444 9.44 10.9867 
                    8.74667 10.7911 8.12444C10.1333 6.13333 9.77778 4 9.77778 1.77778C9.77778 0.8 8.97778 0 8 0Z" fill="#5277A6"/>
                </svg>
                <p>+ XXXXXXXXXXX</p>
            </div>
            
            <div class="location">
                <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2 0C5.008 0 0 5.008 0 11.2C0 19.6 11.2 32 11.2 32C11.2 32 22.4 19.6 22.4 11.2C22.4 5.008 17.392 0 11.2 0ZM3.2 11.2C3.2 6.784 6.784 3.2 11.2 3.2C15.616 
                    3.2 19.2 6.784 19.2 11.2C19.2 15.808 14.592 22.704 11.2 27.008C7.872 22.736 3.2 15.76 3.2 11.2Z" fill="#5277A6"/>
                    <path d="M11 15C12.6569 15 14 13.6569 14 12C14 10.3431 12.6569 9 11 9C9.34315 9 8 10.3431 8 12C8 13.6569 9.34315 15 11 15Z" fill="#5277A6"/>
                </svg>
                <p>The IoT & Device <br> Management Company</p>
            </div>
            
            <div class="email">
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M29.3999 4H3.39992C1.74561 4 0.399902 5.34571 0.399902 7.00002V25C0.399902 26.6543 1.74561 28 3.39992 28H29.3999C31.0542 28 32.3999 26.6543 32.3999 
                    25V7.00002C32.3999 5.34571 31.0542 4 29.3999 4ZM29.3999 5.99999C29.5357 5.99999 29.665 6.02818 29.7832 6.07741L16.3999 17.6768L3.01657 6.07741C3.13474 6.02825 
                    3.26399 5.99999 3.39986 5.99999H29.3999ZM29.3999 26H3.39992C2.84817 26 2.39989 25.5518 2.39989 24.9999V8.19042L15.7446 19.7559C15.9331 19.9189 16.1665 20 16.3999 
                    20C16.6333 20 16.8667 19.919 17.0552 19.7559L30.3999 8.19042V25C30.3998 25.5518 29.9516 26 29.3999 26Z" fill="#5277A6"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" transform="translate(0.399902)"/>
                    </clipPath>
                    </defs>
                </svg>
                <p>The IoT & Device<br>Management Company</p>
            </div>
        </div>

        <div class="aboutInfo">
            <div class="type">
                <div class="name">
                    <span class="dot"></span>
                    <label for="name"></label>
                    <input v-model="name" type="text" placeholder="Enter your name" name="name" id="name" required>
                </div>
                <div class="number">
                    <span class="dot"></span>
                    <label for="number"></label>
                    <input v-model="number" type="text" placeholder="Enter your phone number" name="number" id="number" required>
                </div>
                <div class="mail">
                    <span class="dot"></span>
                    <label for="mail"></label>
                    <input v-model="email" type="text" placeholder="Enter Email" name="mail" id="mail" required>
                </div>
            </div>
            <div class="send">
                <p>Send</p>
                    <button @click="send" class="submit"> 
                        <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 
                            0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 
                            7.53553L27.3536 4.35355ZM0 4.5H27V3.5H0V4.5Z" fill="white"/>
                        </svg>
                    </button>
            </div>
        </div>
    </div>

    </section>
    
</template>

<script>
import axios from 'axios'
 

export default {
    data(){
        return {
            name: "",
            number: "",
            email: ""
        }
    },

    methods: {
        async send() {
            try {
                const res = await axios.post("url", this.name, this.number, this.email)
                console.log(res);
            }
            catch(error){
                console.log(error);
            }
        },

        reset () {
            this.name = "",
            this.number = "",
            this.email = ""
        },
    }
}
</script>

<style>

.aboutPage {
    padding-bottom: 200px;
}

.contact{
    padding-top: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
}

.contact p {
    padding-top: 15px;
}

.phone, .location, .email {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.type {
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
    width: 600px;
}

.type p {
    padding-top:15px;
}

.dot {
    margin-top: -2px;
    margin-bottom: 35px;
    height: 6px;
    width: 6px;
    background-color: #fff;
    border-radius: 50%;
    color: #fff;
}

.name, .number, .mail {
    display: flex;
    margin-top: -4px;
    color: #282A2F;
    font: 14px Helvetica;
}


#section2 .submit{
    background-color: #0A0A0A;
    padding: 11px 5px 10px 5px;
    border-radius: 50%;
    border: 1px solid #5F92D2;
    margin-left: 20px;
    cursor: pointer;
}

input[type=text] {
    outline:0; 
    width: 207px;
    border: none;
    border-top: 2px solid #ffffff;
    background-color: #0A0A0A;
    color: #c2c2c2;
}

.send {
    margin-bottom: 12px;
    font: 18px Helvetica;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 60px;
}


.aboutInfo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 370px;
    margin-left: 25px;
}
</style>