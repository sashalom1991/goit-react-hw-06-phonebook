import { connect } from 'react-redux';
import action from '../../redux/contacts/contacts-action';
import s from './Filter.module.css';


const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChangeFilter}
        className={s.input}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: (e) => dispatch(action.changeFilter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
