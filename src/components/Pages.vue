<template>
  <scrollactive class="my-nav" v-on:itemchanged="onItemChanged">
    <div class="pages">
      <div id="buttons">
        <ul>
          <li id="section1" @click="aboutStyle" >
            <a href="#section1" :class="[{ activeTxt: aboutActive}]">About Company</a>
            <a href="#section1" :class="[{activeTxt: scrollactiveItem}]">
                <div class="circle" :class="[{ activeBtn: aboutActive  }]">
                    <div class="bttn" :class="[{ blueBtn: aboutActive }]"></div>
                  </div>
            </a>
          </li>
          
          <li id="section2" @click="contactStyle">
            <a href="#section2" :class="[{ activeTxt: contactActive}]">Contact us</a>
            <a href="#section2" :class="[{activeTxt: scrollactiveItem}]">
                  <div class="circle" :class="[{ activeBtn: contactActive }]">
                    <div class="bttn" :class="[{ blueBtn: contactActive }]"></div>
                  </div>                         
            </a>
          </li>

          
        </ul>
        
      </div>   
    </div>
  </scrollactive>
        
</template>

<script>

// import VueScrollactive from 'vue-scrollactive'
// import PromisePolyfill from 'promise-polyfill'



export default {
  name: "pages",
  data() {
    return {
      layout: "section1",
      aboutActive: true,
      contactActive: false,
    }
  },
  methods: {
    onItemChanged() {
      this.event = true
      this.currentItem = true
      this.lastActiveItem = true
  },
    aboutStyle(){
      this.aboutActive = true
      this.contactActive = false
    },
    contactStyle(){
      this.aboutActive = false
      this.contactActive = true
    }
  },
  

}
</script>
  

<style>
.activeTxt{
  font-size: 18px;
  color: #fff;
}

.activeBtn {
  border: 1px solid #504C4C;
  
}

.blueBtn {
  background-color: #5F92D2 !important;
}

.circle {
  margin-left: 5px;
  border-radius: 50%;
  width: 24px;
  height:24px;
}

.bttn {
  height: 8px;
  width: 8px;
  background-color: #bbb;
  border-radius: 50%;
  margin-left: 7px;
  margin-top: 6px;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}


.pages {
  padding-top: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
}

#section1 {
  color: #fff;
  display: flex;
  margin-right: -14px;
  font: 18px Helvetica;
  cursor: pointer;
}

.activeButton{
  padding: 12px;
  border-radius: 50%;
  border: 1px solid #504C4C;
  margin-bottom: -17px;
}

#section2 {
  padding-top: 20px;
  font-size: 12px Helvetica;
  display: flex;
  margin-right: -14px;
  cursor: pointer;
  scroll-snap-align: start;
}

a {
  text-decoration: none;
  color:#504C4C;
  font-size: 12px;
  
}





</style>






.radio input {
	appearance: none;
	cursor: pointer;
	border-radius: 50%;
	padding: 4px 12px;
	background: #454857;
	transition: all 100ms linear;
}

.radio input:checked {
	background-color: red;
}

.radio input:before {
	content: attr(label);
	display: inline-block;
}



<div class="radio">
	<input label="" type="radio" id="male" name="gender" value="male" checked>
	
	<input label="" type="radio" id="female" name="gender" value="female">
</div>



#section2 input:checked {
	background-color: red;
	
}


.circle {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid red;
}


.radio input {
	appearance: none;
	cursor: pointer;
	height: 8px;
  width: 8px;
  background-color: #bbb;
  border-radius: 50%;
	transition: all 100ms linear;
  margin-left: 20px;
  pointer-events: none;
}

.radio:active input {
  border: 1px solid red;
}

.radio input:before {
	content: attr(label);
	display: inline-block;
}
