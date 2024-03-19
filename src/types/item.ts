import {
  Name,
  APIResource,
  VerboseEffect,
  NamedAPIResource,
  GenerationGameIndex,
  MachineVersionDetail,
  VersionGroupFlavorText,
} from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/item/1 https://pokeapi.co/api/v2/item/[id or name]}
 *
 * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 *
 * @property id - The identifier for this resource
 * @property name - The name for this resource
 * @property names - The name of this resource listed in different languages
 * @property version_group - The version group this version belongs to
 * @property cost - The price of this item in stores
 * @property fling_power- The power of the move Fling when used with this item
 * @property fling_effect - The effect of the move Fling when used with this item
 * @property attributes - A list of attributes this item has
 * @property category - The category of items this item falls into
 * @property effect_entries - The effect of this ability listed in different languages
 * @property flavor_text_entries - The flavor text of this ability listed in different languages
 * @property game_indices - A list of game indices relevent to this item by generation
 * @property names - The name of this item listed in different languages
 * @property sprites - A set of sprites used to depict this item in the game
 * @property held_by_pokemon - A list of Pokémon that might be found in the wild holding this item
 * @property baby_trigger_for - An evolution chain this item requires to produce a bay during mating
 * @property machines - A list of the machines related to this item
 * */
export type Item = {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: NamedAPIResource;
  attributes: NamedAPIResource;
  category: NamedAPIResource;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: APIResource;
  machines: MachineVersionDetail[];
};

/**
 * @property default - The default depiction of this item.
 */
export type ItemSprites = {
  default: string;
};

/**
 * @property pokemon - The Pokémon that holds this item
 * @property version_details - The details for the version that this item is held in by the Pokémon
 */
export type ItemHolderPokemon = {
  pokemon: NamedAPIResource;
  version_details: ItemHolderPokemonVersionDetail[];
};

/**
 * @property rarity	- How often this Pokémon holds this item in this version
 * @property version - The version that this item is held in by the Pokémon
 */
export type ItemHolderPokemonVersionDetail = {
  rarity: number;
  version: NamedAPIResource;
};
