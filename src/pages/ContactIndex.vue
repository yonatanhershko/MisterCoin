<template>
  <header class="contacts-container">
    <h1>Contacts</h1>
    <ContactFilter @filter="onFilter" />
    <RouterLink to="/contact/edit"><button class="add-contact-btn">Add a Contact</button></RouterLink>
  </header>
  <ContactList v-if="contacts" @remove="removeContact" :contacts="contacts" />
</template>

<script>
import ContactList from '../cmps/ContactList.vue';
import ContactFilter from '../cmps/ContactFilter.vue';
import { contactService } from '../services/contactService';
import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';

export default {
  data() {
    return {
      contacts: null,
    }
  },
  methods: {
    async removeContact(contactId) {
      try {
        await contactService.deleteContact(contactId)

        const idx = this.contacts.findIndex(contact => contact._id === contactId)
        this.contacts.splice(idx, 1)

        showSuccessMsg(`Removed contact ${contactId}`)
      } catch (err) {
        showErrorMsg('Something went wrong...')
      }
    },
    async onFilter(filterBy) {
      this.contacts = await contactService.getContacts(filterBy)
    }
  },

  async created() {
    this.contacts = await contactService.getContacts()
  },
  components: {
    ContactList,
    ContactFilter,
  }

}
</script>

<style lang="scss">
.contacts-container {
    text-align: center;
    .add-contact-btn{
      width: 125px;
      height: 35px;
    }
  
  
}
</style>