<template>
    <button v-bind="$attrs" v-on="$listeners" :class="{'button--disabled': disabled}" :disabled="!!disabled">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: ['disabled'],
    }
</script>