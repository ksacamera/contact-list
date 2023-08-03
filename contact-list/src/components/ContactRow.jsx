import React from 'react';

const ContactRow = ({ name, email, phone }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default ContactRow;
