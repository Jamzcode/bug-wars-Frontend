<template>
    <h1>Meet Our Designers</h1>
    
    <section id="main">
        <div class="contributor" v-for="contributor in contributorStore.contributor" v-bind:key="contributor.id">
            <CreditPersonCard v-bind:contributor="contributor"/>
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

#main {
    display: flex;
    align-items: center;
}
.contributor {
    flex: 1 1 33.333%;
    width: 100%;
    padding: 25px;
}


</style>