import Vue from 'vue';
import Nameheader from './components/Header.vue'
import Leftpane from './components/Leftpane.vue'
import DisplayContact from './components/DisplayContact.vue'
import CenterPane from './components/CenterPane.vue'

new Vue({
    el: '#app',
    components : {
        Nameheader,Leftpane,DisplayContact,CenterPane
    },
    data: {
        contacts: [
            {
                id:1, name: 'luigi', surename:'iaderosa'
            },

            {
                id:2, name: 'ornella', surename:'porcella'
            },
            {
                id:3, name: 'aa', surename:'bb'
            },
        ]
    },
    methods : {

    },
    computed: {

    }
});