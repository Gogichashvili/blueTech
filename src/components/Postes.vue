<template>
    <div class="dropdown" >
        
    </div>    
</template>



<script>
import axios from 'axios';

export default {
    data() {
        return{
            postes: []
        }
    },
    mounted(){
        axios.get('http://localhost:5000/Postes').then(
            response => {
                this.postes = response.data;
            }
        )
    }
}
</script>
