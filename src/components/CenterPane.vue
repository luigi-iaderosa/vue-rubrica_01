<template>
    <div>
        <div>Name: <input type="text" name="name_input" v-model="name_input"/></div>
        <div>Surname: <input type="text" name="surname_input" v-model="surname_input"></div>
        <check-for-duplicates @checkedForDuplicates="toggleOperation" :items="items" :name_candidate="name_input" :surname_candidate="surname_input"></check-for-duplicates>
        <button @click="insertInContacts">Insert in contacts!</button>
    </div>
</template>

<script>
    import CheckForDuplicates from './CheckForDuplicates'
    export default {
        name: "center-pane",
        props: ['items'],
        components: {
            CheckForDuplicates
        },
        methods: {
            insertInContacts : function () {
                if (this.operation_can_proceed){
                    this.items.push({id:Math.random(),name:this.name_input,surename:this.surname_input})
                    console.log(this.items)
                }
                else {
                    alert('Duplicate item cannot be inserted');
                }

            },
            toggleOperation: function (value) {

                this.operation_can_proceed = !value;
                console.log(this.operation_can_proceed);
            }
        },
        data: function () {
            return {
                name_input: '',
                surname_input:'',
                operation_can_proceed: false,
            }
        }
    }
</script>
