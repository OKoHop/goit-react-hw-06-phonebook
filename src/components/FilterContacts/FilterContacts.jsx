import { StyledInput } from './FilterContacts.style';

export const Filter = ({ value, onChange }) => {
  return (
    <StyledInput type="text" name="filter" value={value} onChange={onChange} />
  );
};
