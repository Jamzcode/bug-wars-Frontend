<template>
    <section id="contributor-card">
        <div class="name">{{contributor.name}}</div>
        <div class="location">{{contributor.location}}</div>
        <div class="linkedin">{{contributor.linkedin}}</div>
        <div class="git">{{contributor.gitpage}}</div>
        <div class="bio">{{contributor.bio}}</div>
        <div class="profile">
            <!-- uses the imgPath() method in order to use relative img path-->
                <img class="picture" :src="imgPath(contributor.picture)"/>
        </div>
    </section>
   
</template>

<script>
/*import { defineComponent } from '@vue/composition-api'*/
/*import imageFile from '../assets/funny_batman_profile.jpg'*/

export default  {
    props: ['contributor'],
    //This methods turns allows you use relative path of img URL's
    methods: {imgPath() {
        return new URL(this.contributor.picture, import.meta.url);
    }}
    
    }

</script>

<style scoped>
#contributor-card {
    width: 850px;
    height: 350px;
    /*border-style: solid;
    border-color: grey;*/
    margin: 10px;
    padding: 10px;
    align-items: start;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 52px 1fr 1fr 1fr 1fr;
    /*grid-template-areas:
        "name       name       picture"
        "location   .          picture"
        "linkedin   .          picture"
        "git        .          picture"
        "bio        bio        bio      "*/
    
        grid-template-areas:
        "picture        name            name"
        "picture        location        location"
        "picture        linkedin        linkedin"
        "picture        git             git"
        ".              bio             bio"
    
    
    
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
    justify-self: center;

    /*to delete*/
    
    
}

.location {
    grid-area: location;
    align-self: start;
    justify-self: center;

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
    justify-self: center;
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
    border-color: grey;

    
    /*to delete*/
   
}
</style>

