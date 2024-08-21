<template>
    <section v-if="contact" class="contact-details">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.email }}</h3>
        <h3>{{ contact.phone }}</h3>
        <img :src="`https://robohash.org/${id}`" alt="">
        <RouterLink to="/contact"><button>Back</button></RouterLink>
    </section>
    <p v-else>Loading...</p>
</template>

<script>
import { contactService } from '../services/contactService';

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const { id: contactId } = this.$route.params
        this.contact = await contactService.getContactById(contactId)
    }
}
</script>

<style lang="scss">
.contact-details {
    display: grid;
    justify-items: start;
    gap: 10px;

    padding: 10px;
    background-color: rgb(49, 78, 108);

    img {
        height: 250px;
        width: 250px;
    }

    a {
        justify-self: end;
    }
}
</style>