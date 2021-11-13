import { connect } from 'react-redux';
import action from '../../redux/contacts/contacts-action';

import s from './ContactsList.module.css';

const ContactsList = ({ contacts, delContact }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>
              <b>{name}</b>: {number}
            </span>

            <button
              type="button"
              onClick={() => delContact(id)}
              className={s.btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const getVisibleCont = (allContacts, filter) => {
  const normalizeFilter = filter.toUpperCase();

  return allContacts.filter(contact => contact.name.toUpperCase().includes(normalizeFilter))
}


const mapStateToProps = ({ contacts: { filter, items } }) => ({
  contacts: getVisibleCont(items, filter),
});

const mapDispatchToProps = dispatch => ({
  delContact: (id) => dispatch(action.deleteContact(id)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
