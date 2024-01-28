<template>
    <section id="contributor-card">
        <div class="name">{{contributor.name}}</div>
        <div class="city">{{contributor.city}}</div>
        <div class="state">{{contributor.state}}</div>
        <div class="linkedin">{{contributor.linkedin}}</div>
        <div class="git">{{contributor.gitpage}}</div>
        <div class="bio">{{contributor.bio}}</div>
        <div class="picture">
            <!-- this is currently drawing from public image, need to put in data-->
            <img src= '/funny_batman_profile.jpg' />
        </div>
    </section>
</template>

<script>
/*import { defineComponent } from '@vue/composition-api'*/
import image from '../assets/funny_batman_profile.jpg'

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
                picture: image,


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

.picture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
}
</style>

