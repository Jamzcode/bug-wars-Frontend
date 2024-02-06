<template>
    <h1>Meet Our Designers</h1>
    
    <section id="main">
        <div class="contributor" v-for="contributor in contributorStore.contributor" v-bind:key="contributor.id">
            <CreditPersonCard :contributor="contributor"/>
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
    font-family: Lucida Grande;
    margin-left: auto;
    margin-right: auto;
    text-align: center;


}

</style>