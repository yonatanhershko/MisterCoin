<template>
    <section class="contact-list">
        <TransitionGroup name="list" tag="ul">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <div class="actions">
                    <button @click="onRemoveContact(contact._id)">🗑️</button>
                    <RouterLink :to="`/contact/${contact._id}`"><button>🕵️</button></RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`"><button>✏️</button></RouterLink>
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
            type: Object,
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
.contact-list {
    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        padding: 20px;
        list-style: none;

        li {
            display: flex;
            flex-direction: column;
            background-color: rgb(49, 78, 108);
            border-radius: 8px;
            overflow: hidden;
          

            .contact-preview {
                padding: 20px;
            }

            .actions {
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                padding: 10px 20px;
                background-color: rgba(0, 0, 0, 0.1);
                text-decoration: none;

                button {
                    background-color: #ddd;
                    border: none;
                    border-radius: 50%;
                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: background-color 0.3s ease;

                    &:hover {
                        background-color: #ccc;
                    }
                }
            }

            &:hover {
                background-color: rgb(63, 94, 128);
                cursor: pointer;

            }
        }


    }

    .list-move,
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .list-leave-active {
        position: absolute;
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