<template>
    <h1>Meet Our Designers</h1>
    
    <section class="body">
        <div class="slide-container">
            <div class="slide-content">
                <section id="main">
                    <div class="contributor" v-for="contributor in contributorStore.contributor" v-bind:key="contributor.id">
                        <CreditPersonCard v-bind:contributor="contributor"/>
                    </div>
                </section>
            </div>
        </div>
    </section>        
</template>

<script>
    import CreditPersonCard from '../components/ContributorPersonCard.vue';
    //import of contributor store state data
    import { useContributorStore } from '../stores/ContributorStore';
    
    export default {
        components: {CreditPersonCard},
        //contributor state store. 
        setup () {
             const contributorStore = useContributorStore()

             return { contributorStore }
         }
        
                    
        
        
    }

</script>

<style scoped>
h1 {
    font-family: sans-serif;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

#main{
    display: flex;
}

.contributor{
    padding: 0, 5px;
    margin: 10px;
}
.body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    
}

.slide-content{
    margin: 0 40px;
}

.slide-container{
    max-width: 2000px; /*was set to 1120px*/
    width: 100%;
    background-color: rgb(170, 174, 189);
    padding: 40px 0;
}

/*
#main {
    display: flex;
    align-items: center;
}
.contributor {
    flex: 1 1 33.333%;
    width: 100%;
    padding: 25px;
}
*/


</style>