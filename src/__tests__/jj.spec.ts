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

  it('workds kk', async () => {
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

  it('workds kk', async () => {
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
});
