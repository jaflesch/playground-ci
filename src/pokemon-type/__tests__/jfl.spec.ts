import { describe, expect, it } from '@jest/globals';
import { PokemonTypesArrayIndex } from '../constants';
import { PokemonTypeChart } from '../index';

describe('when type matchup', () => {
  it('workds kk', async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/heatran');
    const pokemon = await resp.json();
    const r = PokemonTypeChart.getByPokemon(pokemon, true);
    expect(r).toBeDefined();
  });

  it.skip('workds kk off', async () => {
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.WATER,
      ]),
    ).toBe(0.5);

    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.WATER,
        PokemonTypesArrayIndex.FIRE,
      ]),
    ).toBe(0.25);

    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.GRASS,
        PokemonTypesArrayIndex.FIRE,
      ]),
    ).toBe(1);

    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.GRASS,
      ]),
    ).toBe(2);

    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.GRASS,
        PokemonTypesArrayIndex.BUG,
      ]),
    ).toBe(4);
  });

  it.skip('workds kk def', async () => {
    expect(
      PokemonTypeChart.getDefMultiple(
        [PokemonTypesArrayIndex.FIRE, PokemonTypesArrayIndex.GRASS],
        PokemonTypesArrayIndex.WATER,
      ),
    ).toBe(1);

    expect(
      PokemonTypeChart.getDefMultiple(
        [PokemonTypesArrayIndex.FIRE, PokemonTypesArrayIndex.GRASS],
        PokemonTypesArrayIndex.GRASS,
      ),
    ).toBe(0.25);

    expect(
      PokemonTypeChart.getDefMultiple(
        [PokemonTypesArrayIndex.FIRE, PokemonTypesArrayIndex.GRASS],
        PokemonTypesArrayIndex.FLYING,
      ),
    ).toBe(2);

    expect(
      PokemonTypeChart.getDefMultiple(
        [PokemonTypesArrayIndex.FIRE, PokemonTypesArrayIndex.GRASS],
        PokemonTypesArrayIndex.FAIRY,
      ),
    ).toBe(0.5);

    expect(
      PokemonTypeChart.getDefMultiple(
        [PokemonTypesArrayIndex.WATER, PokemonTypesArrayIndex.GROUND],
        PokemonTypesArrayIndex.GRASS,
      ),
    ).toBe(4);
  });

  it.skip('workds kk off ability', async () => {
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.WATER, [
        PokemonTypesArrayIndex.WATER,
      ]),
    ).toBe(0.5);

    // vaporeon
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.WATER,
        [PokemonTypesArrayIndex.WATER],
        'water-absorb',
      ),
    ).toBe(0);

    // gastrodon
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.WATER, [
        PokemonTypesArrayIndex.WATER,
        PokemonTypesArrayIndex.GROUND,
      ]),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.WATER,
        [PokemonTypesArrayIndex.WATER, PokemonTypesArrayIndex.GROUND],
        'storm-drain',
      ),
    ).toBe(0);

    // araquanid
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.WATER, PokemonTypesArrayIndex.BUG],
        'water-bubble',
      ),
    ).toBe(0.5);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.WATER, PokemonTypesArrayIndex.BUG],
        'water-absorb',
      ),
    ).toBe(1);

    // bronzong
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.STEEL, PokemonTypesArrayIndex.PSYCHIC],
        'heatproof',
      ),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.STEEL, PokemonTypesArrayIndex.PSYCHIC],
        'levitate',
      ),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GROUND,
        [PokemonTypesArrayIndex.STEEL, PokemonTypesArrayIndex.PSYCHIC],
        'heatproof',
      ),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GROUND,
        [PokemonTypesArrayIndex.STEEL, PokemonTypesArrayIndex.PSYCHIC],
        'levitate',
      ),
    ).toBe(0);

    // garganacl
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.GHOST, [
        PokemonTypesArrayIndex.ROCK,
      ]),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GHOST,
        [PokemonTypesArrayIndex.ROCK],
        'purifying-salt',
      ),
    ).toBe(0.5);

    // stufful
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.NORMAL,
      ]),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.NORMAL],
        'fluffy',
      ),
    ).toBe(2);

    // parasect
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.BUG,
        PokemonTypesArrayIndex.GRASS,
      ]),
    ).toBe(4);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GRASS],
        'dry-skin',
      ),
    ).toBe(5);
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.WATER, [
        PokemonTypesArrayIndex.BUG,
        PokemonTypesArrayIndex.GRASS,
      ]),
    ).toBe(0.5);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.WATER,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GRASS],
        'dry-skin',
      ),
    ).toBe(0);

    // snorlax
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.NORMAL,
      ]),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.NORMAL],
        'thick-fat',
      ),
    ).toBe(0.5);
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.ICE, [
        PokemonTypesArrayIndex.NORMAL,
      ]),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.ICE,
        [PokemonTypesArrayIndex.NORMAL],
        'thick-fat',
      ),
    ).toBe(0.5);

    // orthworm
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.GROUND, [
        PokemonTypesArrayIndex.STEEL,
      ]),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GROUND,
        [PokemonTypesArrayIndex.STEEL],
        'earth-eater',
      ),
    ).toBe(0);

    // raichu
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.ELECTRIC, [
        PokemonTypesArrayIndex.ELECTRIC,
      ]),
    ).toBe(0.5);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.ELECTRIC,
        [PokemonTypesArrayIndex.ELECTRIC],
        'lightning-rod',
      ),
    ).toBe(0);

    // electivire
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.ELECTRIC, [
        PokemonTypesArrayIndex.ELECTRIC,
      ]),
    ).toBe(0.5);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.ELECTRIC,
        [PokemonTypesArrayIndex.ELECTRIC],
        'motor-drive',
      ),
    ).toBe(0);

    // azumarill
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.GRASS, [
        PokemonTypesArrayIndex.WATER,
        PokemonTypesArrayIndex.FAIRY,
      ]),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GRASS,
        [PokemonTypesArrayIndex.WATER, PokemonTypesArrayIndex.FAIRY],
        'sap-sipper',
      ),
    ).toBe(0);

    // lanturn
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.ELECTRIC, [
        PokemonTypesArrayIndex.WATER,
        PokemonTypesArrayIndex.ELECTRIC,
      ]),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.ELECTRIC,
        [PokemonTypesArrayIndex.WATER, PokemonTypesArrayIndex.ELECTRIC],
        'volt-absorb',
      ),
    ).toBe(0);

    // dachsbun
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FIRE, [
        PokemonTypesArrayIndex.FAIRY,
      ]),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.FAIRY],
        'well-baked-body',
      ),
    ).toBe(0);

    // shiftry
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.FLYING, [
        PokemonTypesArrayIndex.GRASS,
        PokemonTypesArrayIndex.DARK,
      ]),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FLYING,
        [PokemonTypesArrayIndex.GRASS, PokemonTypesArrayIndex.DARK],
        'wind-rider',
      ),
    ).toBe(0);

    // mr.mime
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GHOST,
        [PokemonTypesArrayIndex.PSYCHIC, PokemonTypesArrayIndex.FAIRY],
        'filter',
      ),
    ).toBe(1.5);
    expect(
      PokemonTypeChart.getAtkMultiple(PokemonTypesArrayIndex.GHOST, [
        PokemonTypesArrayIndex.PSYCHIC,
        PokemonTypesArrayIndex.FAIRY,
      ]),
    ).toBe(2);

    // rhyperior
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GROUND,
        [PokemonTypesArrayIndex.ROCK, PokemonTypesArrayIndex.GROUND],
        'solid-rock',
      ),
    ).toBe(1.5);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GRASS,
        [PokemonTypesArrayIndex.ROCK, PokemonTypesArrayIndex.GROUND],
        'solid-rock',
      ),
    ).toBe(3);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.NORMAL,
        [PokemonTypesArrayIndex.ROCK, PokemonTypesArrayIndex.GROUND],
        'solid-rock',
      ),
    ).toBe(0.5);

    // necrozma
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GROUND,
        [PokemonTypesArrayIndex.PSYCHIC],
        'prism-armor',
      ),
    ).toBe(1);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.PSYCHIC,
        [PokemonTypesArrayIndex.PSYCHIC],
        'prism-armor',
      ),
    ).toBe(0.5);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.DARK,
        [PokemonTypesArrayIndex.PSYCHIC],
        'prism-armor',
      ),
    ).toBe(1.5);

    // sheddinja
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.NORMAL,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIRE,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.WATER,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.ELECTRIC,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GRASS,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.ICE,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FIGHTING,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.POISON,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GROUND,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FLYING,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.PSYCHIC,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.BUG,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.ROCK,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.GHOST,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.DRAGON,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.DARK,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(2);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.STEEL,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
    expect(
      PokemonTypeChart.getAtkMultiple(
        PokemonTypesArrayIndex.FAIRY,
        [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GHOST],
        'wonder-guard',
      ),
    ).toBe(0);
  });
});
