---
sidebar_position: 9
---

# Pokémon

gg easy 10/10

## Pokemon

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`base_experience`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base experience gained for defeating this Pokémon</td>
    </tr>
    <tr>
      <td>`height`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The height of this Pokémon in decimetres</td>
    </tr>
    <tr>
      <td>`weight`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The weight of this Pokémon in hectograms</td>
    </tr>
    <tr>
      <td>`is_default`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Set for exactly one Pokémon used as the default for each species</td>
    </tr>
    <tr>
      <td>`order`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Order for sorting. Almost national order, except families are grouped together</td>
    </tr>
    <tr>
      <td>`abilities`</td>
      <td>[`Array<PokemonAbility>`](#pokemonability)</td>
      <td>Yes</td>
      <td>A list of abilities this Pokémon could potentially have</td>
    </tr>
    <tr>
      <td>`forms`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)`</td>
      <td>Yes</td>
      <td>A list of forms this Pokémon can take on</td>
    </tr>
    <tr>
      <td>`game_indices`</td>
      <td>[`Array<VersionGameIndex>`](../utils#versiongameindex)</td>
      <td>Yes</td>
      <td>A list of game indices relevent to Pokémon item by generation</td>
    </tr>
    <tr>
      <td>`held_items`</td>
      <td>[`Array<PokemonHeldItem>`](#pokemonhelditem)</td>
      <td>Yes</td>
      <td>A list of items this Pokémon may be holding when encountered</td>
    </tr>
    <tr>
      <td>`location_area_encounters`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>A link to a list of location areas, as well as encounter details pertaining to specific versions.</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td>[`Array<PokemonMove>`](#pokemonmove)</td>
      <td>Yes</td>
      <td>A list of moves along with learn methods and level details pertaining to specific version groups</td>
    </tr>
    <tr>
      <td>`past_types`</td>
      <td>[`Array<PokemonTypePast>`](#pokemontypepast)</td>
      <td>Yes</td>
      <td>A list of details showing types this pokémon had in previous generations.</td>
    </tr>
    <tr>
      <td>`sprites`</td>
      <td>[`PokemonSprites`](#pokemonsprites)</td>
      <td>Yes</td>
      <td>A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites</td>
    </tr>
    <tr>
      <td>`species`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The species this Pokémon belongs to.</td>
    </tr>
    <tr>
      <td>`stats`</td>
      <td>[`Array<PokemonStat>`](#pokemonstat)</td>
      <td>Yes</td>
      <td>A list of base stat values for this Pokémon</td>
    </tr>
    <tr>
      <td>`types`</td>
      <td>[`Array<PokemonType>`](#pokemontype)</td>
      <td>Yes</td>
      <td>A list of details showing types this Pokémon has</td>
    </tr>
  </tbody>
</table>

### PokemonAbility

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`is_hidden`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this is a hidden ability</td>
    </tr>
    <tr>
      <td>`slot`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The slot this ability occupies in this Pokémon species</td>
    </tr>
    <tr>
      <td>`ability`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The ability the Pokémon may have</td>
    </tr>
  </tbody>
</table>

### PokemonHeldItem

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`item`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The item the referenced Pokémon holds</td>
    </tr>
    <tr>
      <td>`version_details`</td>
      <td>[`Array<PokemonHeldItemVersion>`](#pokemonhelditemversion)</td>
      <td>Yes</td>
      <td>The details of the different versions in which the item is held</td>
    </tr>
  </tbody>
</table>

### PokemonHeldItemVersion

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`version`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version in which the item is held</td>
    </tr>
    <tr>
      <td>`rarity`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>How often the item is held</td>
    </tr>
  </tbody>
</table>

### PokemonMove

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`move`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The move the Pokémon can learn</td>
    </tr>
    <tr>
      <td>`version_group_details`</td>
      <td>[`Array<PokemonMovieVersion>`](#pokemonmovieversion)</td>
      <td>Yes</td>
      <td>The details of the version in which the Pokémon can learn the move</td>
    </tr>
  </tbody>
</table>

### PokemonMovieVersion

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`move_learn_method`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The method by which the move is learned</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group in which the move is learned</td>
    </tr>
    <tr>
      <td>`level_learned_at`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The minimum level to learn the move</td>
    </tr>
  </tbody>
</table>

### PokemonSprites
<!--
/**
 * @property front_default: The default depiction of this Pokémon from the front in battle.
 * @property front_shiny: The shiny depiction of this Pokémon from the front in battle.
 * @property front_female: The female depiction of this Pokémon from the front in battle.
 * @property front_shiny_female: The shiny female depiction of this Pokémon from the front in battle.
 * @property back_default: The default depiction of this Pokémon from the back in battle.
 * @property back_shiny: The shiny depiction of this Pokémon from the back in battle.
 * @property back_female: The female depiction of this Pokémon from the back in battle.
 * @property back_shiny_female: The shiny female depiction of this Pokémon from the back in battle.
 * */
export interface PokemonSprites {
  front_default: string;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: {
    [key: string]: {
      back_default?: string | null;
      back_female?: string | null;
      back_shiny?: string | null;
      back_shiny_female?: string | null;
      front_default: string;
      front_female?: string | null;
      front_shiny?: string | null;
      front_shiny_female?: string | null;
    };
  };
}
-->
### PokemonStat

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat the Pokémon has</td>
    </tr>
    <tr>
      <td>`effort`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The effort points (EV) the Pokémon has in the stat</td>
    </tr>
    <tr>
      <td>`base_stat`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base value of the stat</td>
    </tr>
  </tbody>
</table>


### PokemonType

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`slot`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The order the Pokémon's types are listed in</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The type the referenced Pokémon has</td>
    </tr>
  </tbody>
</table>


### PokemonTypePast

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The last generation in which the referenced pokémon had the listed types</td>
    </tr>
    <tr>
      <td>`types`</td>
      <td>[`Array<PokemonType>`](#pokemontype)</td>
      <td>Yes</td>
      <td>The types the referenced pokémon had up to and including the listed generation</td>
    </tr>
  </tbody>
</table>

## Ability

## Characteristic

## EggGroup

## Gender

## GrowthRate

## Nature

## PokeAthlonStat

## PokemonColor

## PokemonForm

## PokemonHabitat

## PokemonLocationArea

## PokemonShape

## PokemonSpecie

## PokemonStat

## PokemonType