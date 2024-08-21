<template>
    <form v-if="contact" @submit.prevent="onSave" class="contact-edit">
        <input v-model="contact.name" type="text" placeholder="Enter name...">
        <input v-model="contact.email" type="text" placeholder="Enter email...">
        <input v-model.number="contact.phone" type="text" placeholder="Enter phone...">
        <button>Save</button>
    </form>
</template>

<script>
import { contactService } from '../services/contactService';

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async onSave() {
            try {
                await contactService.saveContact(this.contact)
                this.$router.push('/contact')
            } catch (error) {
                alert('Bad stuff')
            }
        }
    },
    async created() {
        const { id } = this.$route.params;
        if (id) {
            this.contact = await contactService.getContactById(id);
        } else {
            this.contact = contactService.getEmptyContact();
        }
    }
}
</script>

<style lang="scss">
.contact-edit {
    display: grid;
    justify-items: start;
    gap: 10px;

    padding: 10px;
    background-color: darkseagreen;

    button {
        justify-self: end;
    }
}
</style>