import { useEffect, useState } from 'react'
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contactsData from "../../ContactsData.json";


  export default function App() {
    const [contacts, setContacts] = useState(() => {
      const savedContacts = localStorage.getItem("contacts");
      if (savedContacts !== null) {
        return JSON.parse(savedContacts);
      }
      return contactsData;
    });
  
    const [filter, setFilter] = useState("");
  
    useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      if (contacts.length === 0) {
        localStorage.removeItem("contacts");
      }
    }, [contacts]);
  
    const addContacts = (newContact) => {
      setContacts((prevContacts) => {
        return [...prevContacts, newContact];
      });
    };
  
    const deleteContact = (useId) => {
      setContacts((prevContacts) => {
        return prevContacts.filter((contact) => contact.id !== useId);
      });
  
      if (localStorage.getItem("contacts").length === 0) {
        console.log(contacts);
        localStorage.clear();
      }
    };
  
    const findedContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  return (
    <>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={findedContacts} onDelete={deleteContact} />
    </>
  );
}


