<template>
    <nav class="navbar navbar-expand-lg" 
         :style="{'background-color': bgColor}">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                {{ title }}
            </a>
            <button class="navbar-toggler" 
                @click="collapse"
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"
                :class="{'show': showMenu}" 
                id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <nav-item v-for="item in items"
                        :key="item.id"
                        :item="item"
                        @select="select($event)" 
                        @colorSelect="colorSelect($event)"/>
                </ul>
                <nav-search/>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue';
import NavItem from './NavItem.vue';
import NavSearch from './NavSearch.vue';

const title = ref('Title')

const items = ref([
    {
        id: 1, 
        label: 'Home', 
        path: '/', 
        dropdown: false
    },
    {
        id: 2, 
        label: 'About', 
        path: '/about', 
        dropdown: false
    },
    {
        id: 3, 
        label: 'Color memu', 
        dropdown: true, 
        dropdowns: [
            {
                id: 1, 
                label: '#E3F2FD'
            }, 
            {
                id: 2, 
                label: '#96C93C'
            }, 
            {
                id: 3, 
                label: '#7430F9'
            }]
    }
])

const bgColor = ref('#96C93C') //96C93C 7430F9
const selected = ref(items.value[0].id)
const showMenu = ref(false)

/** Methods*/
const select = (id) => {
    selected.value = id
}

const collapse = () => {
    showMenu.value = !showMenu.value
}

const colorSelect = (dropdown) => {
    console.log(dropdown.label)
    bgColor.value = dropdown.label
}
</script>