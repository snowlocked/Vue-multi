import Vue from 'vue'
import DatePicker from 'assets/js/datepicker.class.js';
// let picker = new DatePicker('.picker');

new Vue({
    el: '#app',
    data() {
        return {
            day:'',
            datepicker: {},
        }
    },
    created() {
        this.$nextTick(() => {
            this.datepicker = new DatePicker('.picker');
            this.day = this.datepicker.value;
        });
    },
    methods: {
    	
    },
    ready(){
    },
    components: {
    },
    watch:{
    	datepicker:{
    		handler:function(){
    		// console.log(this.datepicker);
    		this.day = this.datepicker.value;
    		// console.log(this.day)
    	},
    	deep:true,
    }
    }
})
