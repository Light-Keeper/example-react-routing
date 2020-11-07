import React from 'react';
import { useParams } from 'react-router-dom';

const UsersShow = () => {
  const { id } = useParams();

  return (
    <div>
      users show, id = { id }
    </div>
  );
};

export default UsersShow;
