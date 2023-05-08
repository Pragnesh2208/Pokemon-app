import {
  StyledCard,
  StyledCardImage,
  StyledCardInfo,
  StyledCardSkills,
} from "./Card.styled";

function CardComponent({ ...props }) {
  const pokemonInfo = props.pokemonInfo;
  const pokemonAbility = pokemonInfo.abilites;
  return (
    <StyledCard raised={false}>
      <StyledCardImage>
        <img src={pokemonInfo.imageUrl}></img>
      </StyledCardImage>
      <StyledCardInfo>
        <ul>
          <li>
            <p>
              <b>Name :</b>
              {pokemonInfo.name}
            </p>
          </li>

          <li>
            <p>
              <b>Height :</b>
              {pokemonInfo.height}
            </p>
          </li>
          <li>
            <p>
              <b>Weight :</b>
              {pokemonInfo.weight}
            </p>
          </li>
          <li>
            <p>
              <b>List of abilities :</b>
            </p>
          </li>
        </ul>
      </StyledCardInfo>
      <StyledCardSkills>
        {pokemonAbility.map((x) => (
          <p>{x}</p>
        ))}
      </StyledCardSkills>
    </StyledCard>
  );
}

export default CardComponent;
