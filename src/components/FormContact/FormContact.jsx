import { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-action';
import s from './FormContact.module.css';

function FormContact({onSubmit, contacts}){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handelChange(e) {
    const {name, value} = e.currentTarget;

    switch(name){
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default: return;
    }
  }

  function handelSubmit (e){
    e.preventDefault();

    const resultSubmit = {name, number};

    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase(),
      ) || contacts.find(contact => number === contact.number)
    ) {
      alert(`${name} is already in contacts`);
    } else {
      onSubmit(resultSubmit);
    }
    
    

    // if (
    //   contacts.find(
    //     contact => name.toUpperCase() === contact.name.toUpperCase(),
    //   )
    // ) {
    //   alert(` is already in contacts`);
    // } else if (
    //   contacts.find(
    //     contact => number === contact.number
    //   )
    // ) {
    //   alert(` is already in contacts`);
    // } 
    // if (
    //   contacts.find(
    //     contact => name.toLowerCase() === contact.name.toLowerCase(),
    //   )
    // ) {
    //   alert(`${name} is already in contacts`);
    // }
    // else {
    //   onSubmit(resultSubmit);
    // }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
          <form onSubmit={handelSubmit} onClick={() => console.log(1)} className={s.form}>
            <label className={s.label}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={handelChange}
                className={s.input}
              />
            </label>
            <label className={s.label}>
              Number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={handelChange}
                className={s.input}
              />
            </label>
            <button type="submit" className={s.btn}>
              Add Contact
            </button>
          </form>
        );
}

const mapStateToProps = ({ contacts: { items } }) => ({
  contacts: items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(actions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContact);