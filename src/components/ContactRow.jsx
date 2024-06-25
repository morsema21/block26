import React from "react";
import SelectedContact from "./SelectedContact";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
      key={contact.id}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
