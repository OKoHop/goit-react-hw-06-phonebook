import {
  StyledLi,
  StyledH2,
  StyledUl,
  StyledButton,
} from './ContactList.style';

export const ContactList = ({ title, contacts, onDelete }) => {
  return (
    <>
      <StyledH2>{title}</StyledH2>

      <StyledUl>
        {contacts.map(contact => {
          return (
            <StyledLi key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <StyledButton type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </StyledButton>
            </StyledLi>
          );
        })}
      </StyledUl>
    </>
  );
};
