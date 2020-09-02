<template>
    <div>
        <button @click="hasDuplicates">Check for Duplicates!</button>
    </div>
</template>

<script>
    export default {
        name: "check-for-duplicates",
        props: ['items','name_candidate','surname_candidate'],
        methods: {
            hasDuplicates: function () {
                //console.log(this.items,this.name_candidate,this.surname_candidate);
              /*  if (this.items.findIndex(function (item) {
                        return item.name == this.name_candidate
                    }) > -1 && this.items.findIndex(function (item) {
                        return item.surname == this.surname_candidate
                    }) > -1){
                    this.$emit('checkedForDuplicates',true) ;
                }
                else
                    this.$emit('checkedForDuplicates',false) ;
*/

              const lambdaFunction1 = (item) => item.name == this.name_candidate;
              const lambdaFunction2 = (item) => item.surename == this.surname_candidate;
              if (this.items.findIndex(lambdaFunction1) > -1 && this.items.findIndex(lambdaFunction2)>-1 ){
                  this.$emit('checkedForDuplicates',true) ;
              }
              else{
                  this.$emit('checkedForDuplicates',false) ;
              }
            }


        }
    }
</script>
