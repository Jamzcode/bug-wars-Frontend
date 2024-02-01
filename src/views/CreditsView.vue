<template>
    <h1>Meet Our Designers</h1>
    <section id="main">
        <div class="contributor">
            <CreditPersonCard/>
        </div>
    </section>
</template>

<script>
    import CreditPersonCard from '../components/ContributorPersonCard.vue';
    export default {
        components: {CreditPersonCard}
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