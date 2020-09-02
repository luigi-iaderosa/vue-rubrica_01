<template>
    <div>
        <div>
            <b>Name:</b> {{contact.name}}
        </div>

        <div>
            <b>Surname:</b> {{contact.surename}}
        </div>
        <br>
    </div>

</template>

<script>
    export default {
        props: ['contact'],
        name: "display-contact"
    }
</script>
