import React, { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        if (selectedContactId) {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
          );
          const data = await response.json();
          setContact(data);
        }
      } catch (error) {
        console.log("Error fetching contact:", error);
      }
    };
    fetchContact();
  }, [selectedContactId]);

  const handleBackToList = () => {
    setSelectedContactId(null); 
  };

  return (
    <>
      {contact ? (
        <>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={handleBackToList}>Back to List</button>
        </>
      ) : (
        <p>Loading contact details...</p>
      )}
    </>
  );
};

export default SelectedContact;
