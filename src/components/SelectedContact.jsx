import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ContactList from "./ContactList";
import ContactRow from "./ContactRow";

export default function SelectedContact({ selectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    getContact(selectedContactId);
  }, []);

  const getContact = async (id) => {
    try {
      const response = await axios.get(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`
      );
      setSelectedContact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {selectedContact && (
        <div>
          <h2>{selectedContact.name}</h2>
          <ul>
            <li>Email: {selectedContact.email}</li>
            <li>Phone: {selectedContact.phone}</li>
            <li>City: {selectedContact.address.city}</li>
            <li>Website: {selectedContact.website}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
