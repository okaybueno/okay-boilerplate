<template>
    <input type="text"
           v-bind="$attrs"
           :class="{ 'input--error': hasValidationError}"
           v-bind:value="value"
           v-on:input="$emit('input', $event.target.value)">
</template>
<script>
    export default {
        props: ['value', 'validationErrorName'],
        computed: {
            storeInputErrors() {
                return this.$store.getters['validation/getValidationErrors'];
            },

            hasValidationError(){
                let errorIndex = this.storeInputErrors.findIndex( ( errorObj ) => {

                    if( !!errorObj ){

                        return errorObj.field === this.validationErrorName;

                    }
                    return false;
                });

                return errorIndex > -1;
            }
        },
        watch: {
            value(){
                this.$store.commit('validation/unsetValidationErrors');
            }
        }
    }

</script>
