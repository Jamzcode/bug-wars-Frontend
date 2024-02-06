import { defineStore } from "pinia";

//creates pinia store for contributor cards data
//This will be stored in useContributorStore function 
export const useContributorStore = defineStore('contributorStore', {
    state: () => ({
        contributor: [
            {id: '1',
            name: 'Reiczel Bael', 
            location: 'Los Angeles, CA', 
            linkedin:'www.linkedin.com/in/reiczelbael',
            gitpage: 'https://github.com/zelbael', 
            bio: 'Full Stack software engineer with previous healthcare experience. Strong coffee enthusiast!', 
            picture:'../assets/Reiczel_Bael_headshot.JPG' },

            {id: '2',
            name: 'Steve Her',
            location: 'Saint Paul, MN',
            linkedin: 'https://www.linkedin.com/in/steveher/',
            gitpage: 'https://github.com/Sth84478',
            bio: 'Full Stack Software Engineer',
            picture:'../assets/Steve_Her_headshot.jpg' },
            
            {id: '3',
            name: 'Thomas Her',
            location: 'Dallas, TX',
            linkedin: 'https://www.linkedin.com/in/thomaskher/',
            gitpage: 'https://github.com/tkher',
            bio: 'Aspiring Full Stack software engineer with background in financial services and securities lending. Hard-working, analytical, problem solver. Enjoys playing music and the great outdoors',
            picture:'../assets/thomas_her_headshot.jpg' },

            {id: '4',
            name: 'Berenice',
            location: 'TBD, TBD',
            linkedin: 'https://www.linkedin.com/',
            gitpage: 'https://github.com/',
            bio: 'Full Stack Software Engineer',
            picture:'' },

            {id: '5',
            name: 'James Ximenez',
            location: 'TBD, TBD',
            linkedin: 'https://www.linkedin.com/',
            gitpage: 'https://github.com/',
            bio: 'Full Stack Software Engineer',
            picture:'' },

        ]

    })
})