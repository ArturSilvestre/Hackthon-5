import styled from 'styled-components';
import { lighten } from 'polished'

export const Container = styled.div`
  background: ${lighten(0.7, '#393E46')};
  border: 1px solid ${lighten (0.7, '#393E46')};
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  color: ${lighten(0.3, '#393E46')};
  
  display: flex;
  align-items: top;
  margin-bottom: 9px;

  input {
    flex: 1;
    background: transparent;
    border: 0;

    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    
    ::placeholder {
      color: ${lighten(0.3, '#393E46')};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;