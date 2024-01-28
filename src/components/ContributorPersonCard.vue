<template>
    <section id="contributor-card">
        <div class="name">{{contributor.name}}</div>
        <div class="city">{{contributor.city}}</div>
        <div class="state">{{contributor.state}}</div>
        <div class="linkedin">{{contributor.linkedin}}</div>
        <div class="git">{{contributor.gitpage}}</div>
        <div class="bio">{{contributor.bio}}</div>
    </section>
</template>

<script>
/*import { defineComponent } from '@vue/composition-api'*/

export default /*defineComponent*/ {
    data() {
        return {
            contributor: {
                name: 'Batman',
                city: 'Gotham',
                state: 'New York',
                linkedin: 'fakelinkedin.com',
                gitpage: 'fakegitpage.com',
                bio: 'lorem ipsum',
                picture: 'blank',


            }
        }
    }
}
</script>

<style scoped>
#contributor-card {
    border-style: solid;
    margin: 10px;
    padding: px;
    display: grid;

}

.name {
    color: blue;
}

</style>

