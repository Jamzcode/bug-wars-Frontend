<template>
    <section id="contributor-card">
        <div class="name">{{contributor.name}}</div>
        <div class="location">{{contributor.location}}</div>
        <div class="linkedin">{{contributor.linkedin}}</div>
        <div class="git">{{contributor.gitpage}}</div>
        <div class="bio">{{contributor.bio}}</div>
        <div class="profile">
            <!-- this is currently drawing from asset image, need to put in data-->
            <img class="picture" src='../assets/funny_batman_profile.jpg'>
        </div>
    </section>
    <section>
        <div>
            test image
            <img v-bind:src="image1">
        </div>
    </section>
</template>

<script>
/*import { defineComponent } from '@vue/composition-api'*/

export default /*defineComponent*/ {
    data() {
        return {
            contributor: {
                name: 'Bruce Batman',
                location: 'Gotham, NY',
                linkedin: 'fakelinkedin.com',
                gitpage: 'fakegitpage.com',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                picture: './assets/funny_batman_profile.jpg'


            },
            image1: '../assets/funny_batman_profile.jpg'
        }
    }
}
</script>

<style scoped>
#contributor-card {
    width: 850px;
    height: 350px;
    border-style: solid;
    border-color: grey;
    margin: 10px;
    padding: 10px;
    align-items: start;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 52px 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "name       name       picture"
        "location   .          picture"
        "linkedin   .          picture"
        "git        .          picture"
        "bio        bio        .      "
    
    
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
    justify-self: start;

    /*to delete*/
    
    
}

.location {
    grid-area: location;
    align-self: start;

    /*to delete
    background: red;*/

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

.profile {
    grid-area: picture;
    justify-self: center;
    padding: 10px


}
.picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border-style: solid;
    border-color: aqua;

    
    /*to delete*/
   
}
</style>

