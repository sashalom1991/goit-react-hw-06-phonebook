// import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
import 'modern-normalize';
import './App.css';

import FormContact from './components/FormContact';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter/Filter';

export default function App() {

  return (
    <>
      <div className="App">
        <h2>Phonebook</h2>
        <FormContact />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}

// console.log(state)