<template>
    <section class="contact-filter">
        <input @input="onFilterBy" v-model="filterBy.txt" type="text" placeholder="Search">
        <!-- <pre>{{filterBy}}</pre> -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { txt:'' }
        }
    },
    methods: {
        onFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">
.contact-filter{
    text-align: center;
    input {
        border: none;
        outline: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        padding: 8px 12px;
        border-radius: 3px;
        font-family: inherit;
        background-color: #22272b;
        color: #b6c2cf;
        width: 200px;
        border-radius: 8px;
        margin-block: 1em;
        box-shadow: 0px 1px 1px #091e4240, 0px 0px 1px #091e424f;
        &::-webkit-input-placeholder {
            color: #b6c2cf;
        }
        &[placeholder] {
            text-overflow: ellipsis;
        }
        &:focus {
            background-color: #22272b;
            box-shadow: inset 0 0 0 2px #85b8ff;
        }
    }
}
</style>