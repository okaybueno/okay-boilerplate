<template>
    <div class="dropdown" @click="toggleMenu">
        <div class="dropdown__toggle" :class="toggleClass" ref="dropdownToggle">
            <span class="dropdown__selected" ref="dropdownSelected">{{ placeholderValue }}</span>
            <span class="caret" :class="{'caret--active' : showMenu }" ref="dropdownCaret"></span>
        </div>

        <transition appear name="fade" mode="out-in">
            <ul class="dropdown__menu" v-if="showMenu" :class="menuClass">
                <li v-for="(option, index) in availableOptions" :key="'key' + index">
                    <a href="#" @click.prevent="updateOption(option)" class="dropdown__item" :class="isActiveOption(option)">
                        {{ option.label }}
                    </a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: {
                    label: '',
                    value: '',
                },
                showMenu: false,
            }
        },
        props: {
            options: {
                type: Array,
                default: function(){
                    return [];
                },
            },
            includePlaceholderAsOption: {
                type: Boolean,
                default: false
            },
            selected: {},
            placeholder: String,
            toggleClass: String,
            menuClass: String
        },
        computed: {
            placeholderValue(){
                // note that: if you want the ability to deselect values, include an option with the value of ''
                if( !this.selectedOption || !this.selectedOption.value ){
                    return this.placeholder;
                }
                return this.selectedOption.label;
            },
            availableOptions(){
                let options = this.options.slice();

                if( this.includePlaceholderAsOption && this.selectedOption && !this.selectedOption.value ) options.unshift( { value: '', label: this.placeholderText });

                return options;
            }
        },
        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.$emit('optionSelected', this.selectedOption);
            },
            toggleMenu() {
                this.showMenu = !this.showMenu;
            },
            handleOutsideClick( e ){
                e.stopPropagation();
                e.cancelBubble = true;
                if( e.target !== this.$refs['dropdownToggle'] && e.target !== this.$refs['dropdownSelected'] && e.target !== this.$refs['dropdownCaret']){
                    this.$nextTick( () => {
                        this.showMenu = false;
                    })
                }
            },
            isActiveOption( option ){
                if( this.selectedOption && this.selectedOption.value === option.value ) return "dropdown__item--active";
                return "";
            }
        },

        beforeMount() {
            this.selectedOption = this.selected;

            window.addEventListener('click', this.handleOutsideClick );

        },

        beforeDestroy(){
            window.removeEventListener('click', this.handleOutsideClick );
        },

        watch: {
            selected: function(){
                this.selectedOption = this.selected;
            },

            placeholder: function(){
                this.placeholderText = this.placeholder;
            }

        }
    }
</script>

