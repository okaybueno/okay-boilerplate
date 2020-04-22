<template>
    <div class="switch">
        <label class="switch__inner" @input="handleSwitch">
            <input type="checkbox" :checked="checked"  v-model="checkedValue">
            <span class="switch__box"></span>
        </label>
    </div>
</template>

<script>
    export default {

        props: [ "checked", "field"],

        data: function(){
            return {
                checkedValue: false,
            }
        },

        methods: {

            handleSwitch() {
                this.checkedValue = !this.checkedValue;
                this.$emit('notificationSwitch', { field: this.field, checked: this.checkedValue })
            }

        },
        watch: {
            checked(){
                this.checkedValue = this.checked;
            }
        },

        beforeMount(){
            this.checkedValue = this.checked;
        }
    }
</script>
