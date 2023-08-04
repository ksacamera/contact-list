import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr id='row'>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
