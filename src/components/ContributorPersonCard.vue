<template>
    <section id="contributor-card">
        <div class="name">{{contributor.name}}</div>
        <div class="location">{{contributor.location}}</div>
        <div class="linkedin">{{contributor.linkedin}}</div>
        <div class="git">{{contributor.gitpage}}</div>
        <div class="bio">{{contributor.bio}}</div>
        <div>
            <!-- this is currently drawing from public image, need to put in data-->
            <img class="picture" src= '../assets/funny_batman_profile.jpg' />
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
                name: 'Bruce Batman',
                location: 'Gotham, NY',
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
    border-color: grey;
    margin: 10px;
    padding: px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        "name       .       picture"
        "location   .       picture"
        "linkedin   .       picture"
        "git        .       picture"
        "bio        .       .      "
}

.name {
    grid-area: name;
    font-family: Lucida Grande, Garamond, Arial, Helvetica, sans-serif;
    font-size: 50px;
    color: whitesmoke;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    height: 50px;

    /*to delete*/
    background:green
    
}

.location {
    grid-area: location;
    /*to delete*/
    background: red;

}

.linkedin {
    grid-area: linkedin;
}

.git {
    grid-area: git;
}

.bio {
    grid-area: bio;
}

.picture {
    grid-area: picture;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border-style: solid;
    border-color: aqua;

    /*to delete*/
    background: white;
}
</style>

