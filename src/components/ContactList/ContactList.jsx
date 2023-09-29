import { useSelector, useDispatch } from 'react-redux';
import {
  StyledLi,
  StyledH2,
  StyledUl,
  StyledButton,
} from './ContactList.style';
import { deleteContact } from 'redux/slice';

export const ContactList = ({ title }) => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <>
      <StyledH2>{title}</StyledH2>

      <StyledUl>
        {contacts.map(contact => {
          return (
            <StyledLi key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <StyledButton
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </StyledButton>
            </StyledLi>
          );
        })}
      </StyledUl>
    </>
  );
};
