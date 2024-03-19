import { Name, NamedAPIResource } from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/nature/1 https://pokeapi.co/api/v2/nature/[id or name]}
 *
 * Natures influence how a Pokémon's stats grow. See {@link http://bulbapedia.bulbagarden.net/wiki/Nature Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property decreased_stat - The stat decreased by 10% in Pokémon with this nature.
 * @property increased_stat - The stat increased by 10% in Pokémon with this nature.
 * @property hates_flavor - The flavor hated by Pokémon with this nature.
 * @property likes_flavor - The flavor liked by Pokémon with this nature.
 * @property pokeathlon_stat_changes - A list of Pokéathlon stats this nature effects and how much it effects them.
 * @property move_battle_style_preferences - A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent.
 * @property names - The name of this resource listed in different languages.
 */
export type Nature = {
  id: number;
  name: string;
  decreased_stat: NamedAPIResource;
  increased_stat: NamedAPIResource;
  hates_flavor: NamedAPIResource;
  likes_flavor: NamedAPIResource;
  pokeathlon_stat_changes: NatureStatChange;
  move_battle_style_preferences: MoveBattleStylePreference;
  names: Name[];
};

/**
 * @property max_change - The amount of change.
 * @property pokeathlon_stat - The stat being affected.
 */
export type NatureStatChange = {
  max_change: number;
  pokeathlon_stat: number;
};

/**
 * @property low_hp_preference - Chance of using the move, in percent, if HP is under one half.
 * @property high_hp_preference - Chance of using the move, in percent, if HP is over one half.
 * @property pokeathlon_stat - The move battle style
 */
export type MoveBattleStylePreference = {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: NamedAPIResource;
};
