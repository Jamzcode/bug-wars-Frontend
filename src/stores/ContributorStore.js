import { defineStore } from "pinia";

//creates pinia store for contributor cards data
//This will be stored in useContributorStore function on view page 
export const useContributorStore = defineStore('contributorStore', {
    state: () => ({
        contributor: [
            {id: '1',
            name: 'Reiczel Bael', 
            location: 'Los Angeles, CA', 
            linkedin:'https://www.linkedin.com/in/reiczelbael',
            gitpage: 'https://github.com/zelbael', 
            bio: 'Full Stack Software Engineer with previous healthcare experience. Strong coffee enthusiast!', 
            picture:'../assets/Reiczel_Bael_headshot.JPG' },

            {id: '2',
            name: 'Berenice Borbon',
            location: 'Tucson, AZ',
            linkedin: 'https://www.linkedin.com/in/berenice-borbon/',
            gitpage: 'https://www.github.com/bborbon',
            bio: 'Enthusiastic Full-Stack Junior Developer, Passionate about Modern Technologies & AI',
            picture:'../assets/berenice_borbon_headshot.jpg' },

            {id: '3',
            name: 'Steve Her',
            location: 'Saint Paul, MN',
            linkedin: 'https://www.linkedin.com/in/steveher/',
            gitpage: 'https://github.com/Sth84478',
            bio: 'Software Developer, Continuous Learner, Embracing the Power of Problem-Solving and Technological Innovation ',
            picture:'../assets/steve_her_headshot.jpg' },
            
            {id: '4',
            name: 'Thomas Her',
            location: 'Dallas, TX',
            linkedin: 'https://www.linkedin.com/in/thomaskher/',
            gitpage: 'https://github.com/tkher',
            bio: 'Aspiring Full Stack Developer with finance background. Hard-working, analytical, problem solver. Enjoys music and fishing',
            picture:'../assets/thomas_her_headshot.jpg' },

            {id: '5',
            name: 'James Ximenez',
            location: 'Austin, TX',
            linkedin: 'https://www.linkedin.com/',
            gitpage: 'https://github.com/',
            bio: 'Full Stack Software Engineer',
            picture:'../assets/stock_headshot.jpg' },

            {id: '6',
            name: 'Bianca',
            location: 'TBD, TBD',
            linkedin: 'https://www.linkedin.com/',
            gitpage: 'https://github.com/',
            bio: 'Full Stack Software Engineer',
            picture:'../assets/stock_headshot.jpg' },

        

        ]

    })
})