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
    width: 600px;
    height: 450px;
    border-style: solid;
    border-color: grey;
    margin: 10px;
    padding: 10px;
    align-items: start;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:  1fr 1fr 1fr 1fr;
    grid-template-areas:
        "picture       picture      picture"
        "name          name         name"
        "location      location     location"
        "linkedin      .            git"
        "bio           bio          bio      "
    

    
    
}

.name {
    grid-area: name;
    font-family: sans-serif;
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
    font-size: 25px

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
    width: 250px;
    height: 250px;
    object-fit: cover;
    padding: 10px;
    border-radius: 50%;
    border-style: solid;
    border-width: 5px;
    border-color: silver;

    
    /*to delete*/
   
}
</style>

