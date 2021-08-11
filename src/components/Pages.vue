<template>
    <div class="pages">
        <section id="section1">
          <a href="#section1">About Company</a>
          <a href="#section1">
              <div class="radio">
                <input type="radio"  name="page" checked>
              </div>
          </a>
        </section>

        <section id="section2">
          <a href="#section2">Contact us</a>
          <a href="#section2">
              <div class="radio">
                <input type="radio" name="page">
              </div>
          </a>
        </section>
    </div>   
</template>

<script>
export default {
  name: "pages",
  data() {
    return {
      layout: "section1",
    }
  }
}
</script>
  

<style>


.radio input {
	appearance: none;
	cursor: pointer;
	border-radius: 50%;
	padding: 0 8px;
	background: #454857;
	transition: all 100ms linear;
  margin-left: 20px;
  pointer-events: none;
}

.radio input:checked {
	background-color: red;
	
}

.radio input:before {
	content: attr(label);
	display: inline-block;
}


a:focus #section1 .btn{
  background-color: yellow;

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
  margin-right: -10px;
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
  margin-right: -10px;
  align-items: center;
  cursor: pointer;
     
}

a {
  text-decoration: none;
  color:#504C4C;
}

#section2 button {
    margin-left: 10px;
    background-color:#504C4C;
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









