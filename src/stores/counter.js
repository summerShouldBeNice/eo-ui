import { ref,computed } from "vue";
import { defineStore } from "pinia";

export const userCounterStore = defineStore('counter', ()=> {
    const count = ref(0)

})
