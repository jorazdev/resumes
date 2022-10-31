<template>
    <form class="d-flex" 
        role="search">
        <input class="form-control me-2" 
            @input="search"
            v-model="searchValue"
            type="search" 
            placeholder="Search" 
            aria-label="Search">
        <button class="btn btn-outline-success" 
            type="submit">
            Search
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const searchValue = ref('')

const search = () => {
    console.log(searchValue.value)
}
</script>