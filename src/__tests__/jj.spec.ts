import { describe, expect, it } from '@jest/globals';
import {getPokemonTypeMatchups, getOffenseTypeMatchup, getDefenseTypeMatchup} from '../type-math';
import {TypesIndex} from '../type-matchups';


describe('when type matchup', () => {
  // it('workds kk', async () => {
  //   const resp = await fetch('https://pokeapi.co/api/v2/pokemon/swampert');
  //   const pokemon = await resp.json();
  //   const r = getPokemonTypeMatchups(pokemon);
  //   expect(r).toBeDefined();
  // });

  it('workds kk off', async () => {
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.WATER])
    ).toBe(0.5);

    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.WATER, TypesIndex.FIRE])
    ).toBe(0.25);

    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.GRASS, TypesIndex.FIRE])
    ).toBe(1);

    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.GRASS])
    ).toBe(2);
    
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.GRASS, TypesIndex.BUG])
    ).toBe(4);
  });

  it('workds kk def', async () => {
    expect(
      getDefenseTypeMatchup([TypesIndex.FIRE, TypesIndex.GRASS], TypesIndex.WATER)
    ).toBe(1);

    expect(
      getDefenseTypeMatchup([TypesIndex.FIRE, TypesIndex.GRASS], TypesIndex.GRASS)
    ).toBe(0.25);

    expect(
      getDefenseTypeMatchup([TypesIndex.FIRE, TypesIndex.GRASS], TypesIndex.FLYING)
    ).toBe(2);

    expect(
      getDefenseTypeMatchup([TypesIndex.FIRE, TypesIndex.GRASS], TypesIndex.FAIRY)
    ).toBe(0.5);
    
    expect(
      getDefenseTypeMatchup([TypesIndex.WATER, TypesIndex.GROUND], TypesIndex.GRASS)
    ).toBe(4);
  });

  it('workds kk off ability', async () => {
    expect(
      getOffenseTypeMatchup(TypesIndex.WATER, [TypesIndex.WATER])
    ).toBe(0.5);

    // vaporeon
    expect(
      getOffenseTypeMatchup(TypesIndex.WATER, [TypesIndex.WATER], 'water-absorb')
    ).toBe(0);
    
    // gastrodon
    expect(
      getOffenseTypeMatchup(TypesIndex.WATER, [TypesIndex.WATER, TypesIndex.GROUND])
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.WATER, [TypesIndex.WATER, TypesIndex.GROUND], 'storm-drain')
    ).toBe(0);

    // araquanid
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.WATER, TypesIndex.BUG], 'water-bubble')
    ).toBe(0.5);
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.WATER, TypesIndex.BUG], 'water-absorb')
    ).toBe(1);

    // bronzong
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.STEEL, TypesIndex.PSYCHIC], 'heatproof')
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.STEEL, TypesIndex.PSYCHIC], 'levitate')
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.GROUND, [TypesIndex.STEEL, TypesIndex.PSYCHIC], 'heatproof')
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.GROUND, [TypesIndex.STEEL, TypesIndex.PSYCHIC], 'levitate')
    ).toBe(0);

    // garganacl
    expect(
      getOffenseTypeMatchup(TypesIndex.GHOST, [TypesIndex.ROCK])
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.GHOST, [TypesIndex.ROCK], 'purifying-salt')
    ).toBe(0.5);

    // stufful
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.NORMAL])
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.NORMAL], 'fluffy')
    ).toBe(2);

    // parasect
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.BUG, TypesIndex.GRASS])
    ).toBe(4);
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.BUG, TypesIndex.GRASS], 'dry-skin')
    ).toBe(5);
    expect(
      getOffenseTypeMatchup(TypesIndex.WATER, [TypesIndex.BUG, TypesIndex.GRASS])
    ).toBe(0.5);
    expect(
      getOffenseTypeMatchup(TypesIndex.WATER, [TypesIndex.BUG, TypesIndex.GRASS], 'dry-skin')
    ).toBe(0);

    // snorlax
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.NORMAL])
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.NORMAL], 'thick-fat')
    ).toBe(0.5);
    expect(
      getOffenseTypeMatchup(TypesIndex.ICE, [TypesIndex.NORMAL])
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.ICE, [TypesIndex.NORMAL], 'thick-fat')
    ).toBe(0.5);

    // orthworm
    expect(
      getOffenseTypeMatchup(TypesIndex.GROUND, [TypesIndex.STEEL])
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.GROUND, [TypesIndex.STEEL], 'earth-eater')
    ).toBe(0);

    // raichu
    expect(
      getOffenseTypeMatchup(TypesIndex.ELECTRIC, [TypesIndex.ELECTRIC])
    ).toBe(0.5);
    expect(
      getOffenseTypeMatchup(TypesIndex.ELECTRIC, [TypesIndex.ELECTRIC], 'lightning-rod')
    ).toBe(0);

    // electivire
    expect(
      getOffenseTypeMatchup(TypesIndex.ELECTRIC, [TypesIndex.ELECTRIC])
    ).toBe(0.5);
    expect(
      getOffenseTypeMatchup(TypesIndex.ELECTRIC, [TypesIndex.ELECTRIC], 'motor-drive')
    ).toBe(0);

    // azumarill
    expect(
      getOffenseTypeMatchup(TypesIndex.GRASS, [TypesIndex.WATER, TypesIndex.FAIRY])
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.GRASS, [TypesIndex.WATER, TypesIndex.FAIRY], 'sap-sipper')
    ).toBe(0);

    // lanturn
    expect(
      getOffenseTypeMatchup(TypesIndex.ELECTRIC, [TypesIndex.WATER, TypesIndex.ELECTRIC])
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.ELECTRIC, [TypesIndex.WATER, TypesIndex.ELECTRIC], 'volt-absorb')
    ).toBe(0);

    // dachsbun
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.FAIRY])
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.FAIRY], 'well-baked-body')
    ).toBe(0);

    // shiftry
    expect(
      getOffenseTypeMatchup(TypesIndex.FLYING, [TypesIndex.GRASS, TypesIndex.DARK])
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.FLYING, [TypesIndex.GRASS, TypesIndex.DARK], 'wind-rider')
    ).toBe(0);

    // mr.mime
    expect(
      getOffenseTypeMatchup(TypesIndex.GHOST, [TypesIndex.PSYCHIC, TypesIndex.FAIRY], 'filter')
    ).toBe(1.5);
    expect(
      getOffenseTypeMatchup(TypesIndex.GHOST, [TypesIndex.PSYCHIC, TypesIndex.FAIRY])
    ).toBe(2);

    // rhyperior
    expect(
      getOffenseTypeMatchup(TypesIndex.GROUND, [TypesIndex.ROCK, TypesIndex.GROUND], 'solid-rock')
    ).toBe(1.5);
    expect(
      getOffenseTypeMatchup(TypesIndex.GRASS, [TypesIndex.ROCK, TypesIndex.GROUND], 'solid-rock')
    ).toBe(3);
    expect(
      getOffenseTypeMatchup(TypesIndex.NORMAL, [TypesIndex.ROCK, TypesIndex.GROUND], 'solid-rock')
    ).toBe(0.5);

    // necrozma
    expect(
      getOffenseTypeMatchup(TypesIndex.GROUND, [TypesIndex.PSYCHIC], 'prism-armor')
    ).toBe(1);
    expect(
      getOffenseTypeMatchup(TypesIndex.PSYCHIC, [TypesIndex.PSYCHIC], 'prism-armor')
    ).toBe(0.5);
    expect(
      getOffenseTypeMatchup(TypesIndex.DARK, [TypesIndex.PSYCHIC], 'prism-armor')
    ).toBe(1.5);

    // sheddinja
    expect(
      getOffenseTypeMatchup(TypesIndex.NORMAL, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.FIRE, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.WATER, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.ELECTRIC, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.GRASS, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.ICE, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.FIGHTING, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.POISON, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.GROUND, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.FLYING, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.PSYCHIC, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.BUG, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.ROCK, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.GHOST, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.DRAGON, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.DARK, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(2);
    expect(
      getOffenseTypeMatchup(TypesIndex.STEEL, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
    expect(
      getOffenseTypeMatchup(TypesIndex.FAIRY, [TypesIndex.BUG, TypesIndex.GHOST], 'wonder-guard')
    ).toBe(0);
  });
});
