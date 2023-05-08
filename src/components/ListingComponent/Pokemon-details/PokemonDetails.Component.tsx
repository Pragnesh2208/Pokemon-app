function PokemonDetailsComponent() {
  const info = window.history.state.usr;
  console.log(info);
  return <div>{info}</div>;
}

export default PokemonDetailsComponent;
