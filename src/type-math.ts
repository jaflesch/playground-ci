import {
  PokemonTypeId,
  TYPES_MATCHUP_MATRIX,
  TypesIndex,
} from './type-matchups';
import { Pokemon } from './types/pokemon';

export const BASE_URL = 'https://pokeapi.co/api/v2/';
export const getResourceIdFromURL = (url: string): number => {
  return Number(url.replace(BASE_URL, '').split('/')[1]);
};

export const mapTypeIdToTypeIndex = (type: PokemonTypeId): TypesIndex => {
  const typeMap = {
    [PokemonTypeId.BUG]: TypesIndex.BUG,
    [PokemonTypeId.DARK]: TypesIndex.DARK,
    [PokemonTypeId.DRAGON]: TypesIndex.DRAGON,
    [PokemonTypeId.ELECTRIC]: TypesIndex.ELECTRIC,
    [PokemonTypeId.FAIRY]: TypesIndex.FAIRY,
    [PokemonTypeId.FIGHTING]: TypesIndex.FIGHTING,
    [PokemonTypeId.FIRE]: TypesIndex.FIRE,
    [PokemonTypeId.FLYING]: TypesIndex.FLYING,
    [PokemonTypeId.GHOST]: TypesIndex.GHOST,
    [PokemonTypeId.GRASS]: TypesIndex.GRASS,
    [PokemonTypeId.GROUND]: TypesIndex.GROUND,
    [PokemonTypeId.ICE]: TypesIndex.ICE,
    [PokemonTypeId.NORMAL]: TypesIndex.NORMAL,
    [PokemonTypeId.POISON]: TypesIndex.POISON,
    [PokemonTypeId.PSYCHIC]: TypesIndex.PSYCHIC,
    [PokemonTypeId.ROCK]: TypesIndex.ROCK,
    [PokemonTypeId.STEEL]: TypesIndex.STEEL,
    [PokemonTypeId.WATER]: TypesIndex.WATER,
    //
    [PokemonTypeId.SHADOW]: TypesIndex.NORMAL,
    [PokemonTypeId.UNKNOWN]: TypesIndex.NORMAL,
  };

  return typeMap[type];
};

export const mapTypeIndexToName = (index: TypesIndex) => {
  const map = {
    [TypesIndex.NORMAL]: 'NORMAL',
    [TypesIndex.FIRE]: 'FIRE',
    [TypesIndex.WATER]: 'WATER',
    [TypesIndex.ELECTRIC]: 'ELECTRIC',
    [TypesIndex.GRASS]: 'GRASS',
    [TypesIndex.ICE]: 'ICE',
    [TypesIndex.FIGHTING]: 'FIGHTING',
    [TypesIndex.POISON]: 'POISON',
    [TypesIndex.GROUND]: 'GROUND',
    [TypesIndex.FLYING]: 'FLYING',
    [TypesIndex.PSYCHIC]: 'PSYCHIC',
    [TypesIndex.BUG]: 'BUG',
    [TypesIndex.ROCK]: 'ROCK',
    [TypesIndex.GHOST]: 'GHOST',
    [TypesIndex.DRAGON]: 'DRAGON',
    [TypesIndex.DARK]: 'DARK',
    [TypesIndex.STEEL]: 'STEEL',
    [TypesIndex.FAIRY]: 'FAIRY',
  };

  return map[index];
};

export const mapTypeNameToIndex = (index: keyof typeof TypesIndex) => {
  const map = {
    NORMAL: TypesIndex.NORMAL,
    FIRE: TypesIndex.FIRE,
    WATER: TypesIndex.WATER,
    ELECTRIC: TypesIndex.ELECTRIC,
    GRASS: TypesIndex.GRASS,
    ICE: TypesIndex.ICE,
    FIGHTING: TypesIndex.FIGHTING,
    POISON: TypesIndex.POISON,
    GROUND: TypesIndex.GROUND,
    FLYING: TypesIndex.FLYING,
    PSYCHIC: TypesIndex.PSYCHIC,
    BUG: TypesIndex.BUG,
    ROCK: TypesIndex.ROCK,
    GHOST: TypesIndex.GHOST,
    DRAGON: TypesIndex.DRAGON,
    DARK: TypesIndex.DARK,
    STEEL: TypesIndex.STEEL,
    FAIRY: TypesIndex.FAIRY,
  };

  return map[index];
};

export const mapTypeNameToId = (index: keyof typeof PokemonTypeId) => {
  const map = {
    NORMAL: PokemonTypeId.NORMAL,
    FIRE: PokemonTypeId.FIRE,
    WATER: PokemonTypeId.WATER,
    ELECTRIC: PokemonTypeId.ELECTRIC,
    GRASS: PokemonTypeId.GRASS,
    ICE: PokemonTypeId.ICE,
    FIGHTING: PokemonTypeId.FIGHTING,
    POISON: PokemonTypeId.POISON,
    GROUND: PokemonTypeId.GROUND,
    FLYING: PokemonTypeId.FLYING,
    PSYCHIC: PokemonTypeId.PSYCHIC,
    BUG: PokemonTypeId.BUG,
    ROCK: PokemonTypeId.ROCK,
    GHOST: PokemonTypeId.GHOST,
    DRAGON: PokemonTypeId.DRAGON,
    DARK: PokemonTypeId.DARK,
    STEEL: PokemonTypeId.STEEL,
    FAIRY: PokemonTypeId.FAIRY,
    UNKNOWN: PokemonTypeId.UNKNOWN,
    SHADOW: PokemonTypeId.SHADOW,
  };

  return map[index];
};

export const getPokemonTypeMatchups = (pokemon: Pokemon) => {
  const types = pokemon.types.map((t) =>
    mapTypeIdToTypeIndex(getResourceIdFromURL(t.type.url)),
  );

  const offensive = [];
  const defensive = Array(18).fill(1);
  const stabSuperEffective = new Map();

  for (const t of types) {
    offensive.push(TYPES_MATCHUP_MATRIX[t]);

    for (let i = 0; i < defensive.length; i++) {
      defensive[i] = TYPES_MATCHUP_MATRIX[i][t] * defensive[i];
    }

    for (let i = 0; i < TYPES_MATCHUP_MATRIX.length; i++) {
      if (TYPES_MATCHUP_MATRIX[t][i] === 2) {
        const total = stabSuperEffective.has(mapTypeIndexToName(i));
        stabSuperEffective.set(mapTypeIndexToName(i), total ? 2 : 1);
      }
    }
  }

  console.log('@TYPES', types);
  console.log('@OFFENSIVE', offensive);
  console.log('@DEFENSIVE', defensive);
  console.log('@STAB', stabSuperEffective);

  // console.log(
  //   '@STAB INDEX',
  //   Array.from(stabSuperEffective.keys()).map((a) => mapTypeNameToIndex(a)),
  // );
  // console.log(
  //   '@STAB ID',
  //   Array.from(stabSuperEffective.keys()).map((a) => mapTypeNameToId(a)),
  // );
  // console.log('@COMPLETE OFFENSIVE', completeTypeOffensive);
};

export const getOffenseTypeMatchup = (
  userType: TypesIndex,
  targetTypes: TypesIndex[],
) => {
  let defensive = 1;
  for (const t of targetTypes) {
    defensive *= TYPES_MATCHUP_MATRIX[userType][t];
  }

  return defensive;
};

export const getDefenseTypeMatchup = (
  userTypes: TypesIndex[],
  targetType: TypesIndex,
) => {
  let defensive = 1;
  for (const t of userTypes) {
    defensive *= TYPES_MATCHUP_MATRIX[targetType][t];
  }

  return defensive;
};
