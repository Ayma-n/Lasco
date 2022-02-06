import React from 'react';
import { useParams } from 'react-router-dom';

export default function TempProfile() {

    const { user } = useParams();

  return <div>Requested user is: {user}</div>;
}
