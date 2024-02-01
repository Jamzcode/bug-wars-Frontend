<template>
   <!-- <section id="contributor-card">
        <div class="name">{{contributor.name}}</div>
        <div class="location">{{contributor.location}}</div>
        <div class="linkedin">{{contributor.linkedin}}</div>
        <div class="git">{{contributor.gitpage}}</div>
        <div class="bio">{{contributor.bio}}</div>
        <div class="profile">
            !-- this is currently drawing from asset image, need to put in data
                <img class="picture" v-bind:src="contributor.picture">--
            <img class="picture" src='../assets/funny_batman_profile.jpg'>
            
        </div>
    </section>-->
    <section id="contributor-card">
        <div class="name">{{contributor2.name}}</div>
        <div class="location">{{contributor2.location}}</div>
        <div class="linkedin">{{contributor2.linkedin}}</div>
        <div class="git">{{contributor2.gitpage}}</div>
        <div class="bio">{{contributor2.bio}}</div>
        <div class="profile">
            <!-- this is currently drawing from asset image, need to put in data
                <img class="picture" v-bind:src="contributor.picture">-->
            <img class="picture" src='../assets/Reiczel_Bael_headshot.JPG'>
            
        </div>
    </section>
    <section id="contributor-card">
        <div class="name">{{contributor3.name}}</div>
        <div class="location">{{contributor3.location}}</div>
        <div class="linkedin">{{contributor3.linkedin}}</div>
        <div class="git">{{contributor3.gitpage}}</div>
        <div class="bio">{{contributor3.bio}}</div>
        <div class="profile">
            <!-- this is currently drawing from asset image, need to put in data
                <img class="picture" v-bind:src="contributor.picture">-->
            <img class="picture" src='../assets/Steve_Her_headshot.jpg'>
            
        </div>
    </section>
    <section id="contributor-card">
        <div class="name">{{contributor4.name}}</div>
        <div class="location">{{contributor4.location}}</div>
        <div class="linkedin">{{contributor4.linkedin}}</div>
        <div class="git">{{contributor4.gitpage}}</div>
        <div class="bio">{{contributor4.bio}}</div>
        <div class="profile">
            <!-- this is currently drawing from asset image, need to put in data
                <img class="picture" v-bind:src="contributor.picture">-->
            <img class="picture" src='../assets/thomas_her_headshot.jpg'>
            
        </div>
    </section>
    <section>
        <div>
            test image
            <img v-bind:src="contributor.picture">
        </div>
    </section>
</template>

<script>
/*import { defineComponent } from '@vue/composition-api'*/
/*import imageFile from '../assets/funny_batman_profile.jpg'*/

export default /*defineComponent*/ {
    data() {
        return {
            contributor: {
                name: 'Bruce Batman',
                location: 'Gotham, NY',
                linkedin: 'fakelinkedin.com',
                gitpage: 'fakegitpage.com',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                picture:'../assets/funny_batman_profile.jpg'
            },
            contributor2: {
                name: 'Reiczel Bael',
                location: 'Los Angeles, CA',
                linkedin: 'www.linkedin.com/in/reiczelbael',
                gitpage: 'https://github.com/zelbael',
                bio: 'Full Stack software engineer with previous healthcare experience. Strong coffee enthusiast!',
                picture:''
            },
            contributor3: {
                name: 'Steve Her',
                location: 'Saint Paul, MN',
                linkedin: 'https://www.linkedin.com/in/steveher/',
                gitpage: 'https://github.com/Sth84478',
                bio: 'Full Stack Software Engineer',
                picture:''
            },

            contributor4: {
                name: 'Thomas Her',
                location: 'Dallas, TX',
                linkedin: 'https://www.linkedin.com/in/thomaskher/',
                gitpage: 'https://github.com/tkher',
                bio: 'Full Stack Software Engineer',
                picture:''
            },
            
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
    justify-items: start;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 52px 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "name       name       picture"
        "location   .          picture"
        "linkedin   .          picture"
        "git        .          picture"
        "bio        bio        bio      "
    
    
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

