import styled from "styled-components";

const StyledGetMoreMessages = styled.li`
  background-color: rgba(68, 69, 70, 50%);

  &:hover {
    background-color: rgba(68, 69, 70, 80%);
  }

  button {
    color: inherit;
    display: flex;
    font-size: 16px;
    height: 30px;
    place-content: center;
    place-items: center;
  }
`;

export default StyledGetMoreMessages;
