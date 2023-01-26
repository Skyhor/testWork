import { nanoid } from 'nanoid/non-secure';
import { useDispatch } from 'react-redux';
// import { addContacts } from '../../redux/constacts/constactsSlice';
import { addContacts } from 'redux/constacts/contacts-operation';
import s from './Form.module.css';
const NameId = nanoid();
const NumberId = nanoid();

const Form = () => {
  const dispatch = useDispatch();

  const SubmitForm = e => {
    e.preventDefault();
    const elem = e.target.elements;
    dispatch(
      addContacts({
        name: elem.name.value,
        phone: elem.phone.value,
      })
    );

    elem.name.value = '';
    elem.phone.value = '';
  };
  return (
    <div className={s.div}>
      <form onSubmit={SubmitForm} className={s.form}>
        <label htmlFor={NameId} className={s.label}>
          Name
        </label>
        <input
          className={s.label}
          id={NameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label}>Number</label>
        <input
          id={NumberId}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={s.button} onSubmit={SubmitForm}>
          add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
