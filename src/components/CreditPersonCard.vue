<template>
    <div>
        {{person.name}}
        {{person.city}}
        {{person.bio}}
        {{person.gitpage}}
    </div>    
</template>

<script>
/*import { defineComponent } from '@vue/composition-api'*/

export default /*defineComponent*/ {
    data() {
        return {
            person: {
                name: 'Batman',
                city: 'Gotham',
                state: 'New York',
                linkedin: 'fakelinkedin.com',
                gitpage: 'fakegitpage.com',
                bio: 'lorem ipsum',


            }
        }
    }
}
</script>

<style>

</style>

