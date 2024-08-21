<template>
    <section class="contact-list">
        <TransitionGroup name="list" tag="ul">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <div class="actions">
                    <button  @click="onRemoveContact(contact._id)">x</button>
                    <!-- <RouterLink :to="`/contact/${contact._id}`"><button>Details</button></RouterLink> -->
                    <!-- <RouterLink :to="`/contact/edit/${contact._id}`"><button>Edit</button></RouterLink> -->
                </div>
            </li>
        </TransitionGroup>
    </section>
</template>

<script>

import ContactPreview from '../cmps/ContactPreview.vue';

export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        }
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview,
    }

}
</script>

<style lang="scss">
.contact-list ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px;
    list-style: none;


    li {
        display: flex;
        padding: 10px;
        background-color: lightblue;
        border-radius: 5px;
        height: fit-content;
        width: fit-content;
    }

    .actions {
      
    }
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>