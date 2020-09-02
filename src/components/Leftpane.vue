<template>
    <div style="width: 20%">
        <div>Contacts</div>
        <hr>
        <display-contact v-for="item in items" :key="item.id" :contact="item"></display-contact>
    </div>
</template>

<script>

    import DisplayContact from './DisplayContact.vue';
    export default {

        components: {
            DisplayContact
        },

        props: ['items'],
        name: "leftpane"
    }
</script>
