export const logger = (store:any) => (next:any) => (action:any) => {
  console.log(action);
  next(action);
}

export const featuring = (store:any) => (next:any) => (action:any) => {
  const ownPokemon = {
    "name": "own",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
  }

  const updatedInfo = {
    ...action,
    action: { ...action.action, payload: [ownPokemon, ...action.action.payload]}
  }

  next(updatedInfo)

}