import { useState } from 'react';
import { createListItem } from '../../services/items';
import ItemsList from './ItemsList';
import ItemForm from './ItemForm';
import { useUser } from '../../context/UserContext';
import { Redirect } from 'react-router-dom';

export default function Items() {
  const { user } = useUser();
  // TODO -- redirect the user back to auth if there is not a current user
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="container is-max-desktop">
      <div className="box m-5">
        <ItemsList />
        <ItemForm />
      </div>
    </div>
  );
}
