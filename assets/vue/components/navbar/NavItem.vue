<template>
    <li class="nav-item" 
        :class="{'dropdown': props.item.dropdown}"
        @click="select">
        <router-link :to="props.item.path" 
            v-if="!props.item.dropdown"
            class="nav-link" 
            :class="{'active': props.item.id == selected}">
            {{ props.item.label }}
        </router-link>
        <a class="nav-link dropdown-toggle"
            v-else
            href="#" role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
            {{ props.item.label }}
          </a>
        <ul class="dropdown-menu"
            v-if="props.item.dropdown" 
            :class="{'show': showItem}">
            <li v-for="dropdown in props.item.dropdowns" 
                @click="colorSelect(dropdown)"
                :key="dropdown.id">
                <a class="dropdown-item" 
                    href="#">
                    {{ dropdown.label }}
                </a>
            </li>
        </ul>
    </li>
</template>
<script setup>

import { ref } from 'vue';


const props = defineProps({
    item: {type: Object},
    selected: {type: Number}
})

const emit = defineEmits(['select', 'colorSelect'])

const showItem = ref(false)

const select = () => {
    if(props.item.dropdown){
        showItem.value = !showItem.value
    } else {
        emit('select', props.item.id)
    }
}

const colorSelect = (dropdown) => {
    emit('colorSelect', dropdown)
}
</script>