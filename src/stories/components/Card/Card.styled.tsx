import { Card, CardContent, styled } from "@mui/material";

export const StyledCard = styled(Card)`
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  box-shadow: none;
`;

export const StyledCardImage = styled("div")`
  grid-column: 1 / span 1;
  grid-row-start: 1;
  justify-self: flex-start;

  img {
    height: 100px;
  }
`;

export const StyledCardInfo = styled(CardContent)`
  grid-column: 3 / span 1;
  grid-row-start: 2;
  justify-self: flex-end;

  ul {
    list-style: none;
    font-size: 16px;
  }
`;

export const StyledCardSkills = styled("div")`
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  grid-column: 1 / span 3;
  grid-row-start: 3;

  p {
    padding: 10px;
    background-color: #3ab09e;
    color: #fff;
    font-size: 16px;
  }
`;
