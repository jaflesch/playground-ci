---
sidebar_position: 9
---

# Pokémon

gg easy 10/10

## Pokemon

## Ability

Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.

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
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`is_main_series`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this ability originated in the main series of the video games</td>
    </tr>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The generation this ability originated in</td>
    </tr>
    <tr>
      <td>`effect_entries`</td>
      <td>[`Array<VerboseEffect>`](../utils#verboseeffect)</td>
      <td>Yes</td>
      <td>The effect of this ability listed in different languages</td>
    </tr>
    <tr>
      <td>`effect_changes`</td>
      <td>[`Array<AbilityEffectChange>`](#abilityeffectchange)</td>
      <td>Yes</td>
      <td>The list of previous effects this ability has had across version groups</td>
    </tr>
    <tr>
      <td>`flavor_text_entries`</td>
      <td>[`Array<AbilityFlavorText>`](#abilityflavortext)</td>
      <td>Yes</td>
      <td>The flavor text of this ability listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon`</td>
      <td>[`AbilityPokemon`](#abilitypokemon)</td>
      <td>Yes</td>
      <td>A list of Pokémon that could potentially have this ability</td>
    </tr>
  </tbody>
</table>

### AbilityEffectChange

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
      <td>`effect_entries`</td>
      <td>[`Array<Effect>`](../utils#effect)</td>
      <td>Yes</td>
      <td>The previous effect of this ability listed in different languages</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group in which the previous effect of this ability originated</td>
    </tr>
  </tbody>
</table>

### AbilityFlavorText

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
      <td>`flavor_text`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The previous effect of this ability listed in different languages</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this text resource is in</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group that uses this flavor text</td>
    </tr>
  </tbody>
</table>

### AbilityPokemon

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
      <td>Whether or not this a hidden ability for the referenced Pokémon</td>
    </tr>
    <tr>
      <td>`slot`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon</td>
    </tr>
    <tr>
      <td>`pokemon`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon this ability could belong to</td>
    </tr>
  </tbody>
</table>

## Characteristic

Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.

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
      <td>`gene_modulo`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The remainder of the highest stat/IV divided by 5</td>
    </tr>
    <tr>
      <td>`possible_values`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5</td>
    </tr>
    <tr>
      <td>`highest_stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat which results in this characteristic</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>The descriptions of this characteristic listed in different languages</td>
    </tr>
  </tbody>
</table>

## EggGroup

Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.

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
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Named>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of all Pokémon species that are members of this egg group</td>
    </tr>
  </tbody>
</table>

## Gender

Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.

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
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`pokemon_species_details`</td>
      <td>[`Array<PokemonSpecieGender>`](#pokemonspeciegender)</td>
      <td>Yes</td>
      <td>A list of Pokémon species that can be this gender and how likely it is that they will be</td>
    </tr>
    <tr>
      <td>`required_for_evolution`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of Pokémon species that required this gender in order for a Pokémon to evolve into them</td>
    </tr>
  </tbody>
</table>

### PokemonSpecieGender

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
      <td>`rate`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The chance of this Pokémon being female, in eighths; or -1 for genderless</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A Pokémon species that can be the referenced gender</td>
    </tr>
  </tbody>
</table>

## GrowthRate

Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.

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
      <td>`formula`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The formula used to calculate the rate at which the Pokémon species gains level</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>The descriptions of this characteristic listed in different languages</td>
    </tr>
    <tr>
      <td>`levels`</td>
      <td>[`Array<GrowthRateExperienceLevel>`](#growthrateexperiencelevel)</td>
      <td>Yes</td>
      <td>A list of levels and the amount of experienced needed to atain them based on this growth rate</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of Pokémon species that gain levels at this growth rate</td>
    </tr>
  </tbody>
</table>

### GrowthRateExperienceLevel

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
      <td>`level`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The level gained</td>
    </tr>
    <tr>
      <td>`experience`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The amount of experience required to reach the referenced level</td>
    </tr>
  </tbody>
</table>

## Nature

Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.

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
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`decreased_stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat decreased by 10% in Pokémon with this nature</td>
    </tr>
    <tr>
      <td>`increased_stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat increased by 10% in Pokémon with this nature</td>
    </tr>
    <tr>
      <td>`hates_flavor`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The flavor hated by Pokémon with this nature</td>
    </tr>
    <tr>
      <td>`likes_flavor`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The flavor liked by Pokémon with this nature</td>
    </tr>
    <tr>
      <td>`pokeathlon_stat_changes`</td>
      <td>[`NatureStatChange`](#naturestatchange)</td>
      <td>Yes</td>
      <td>A list of Pokéathlon stats this nature effects and how much it effects them</td>
    </tr>
    <tr>
      <td>`move_battle_style_preferences`</td>
      <td>[`MoveBattleStylePreference`](#movebattlestylepreference)</td>
      <td>Yes</td>
      <td>A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent</td>
    </tr>
  </tbody>
</table>

### NatureStatChange

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
      <td>`max_change`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The amount of change</td>
    </tr>
    <tr>
      <td>`pokeathlon_stat`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The stat being affected</td>
    </tr>
  </tbody>
</table>

### MoveBattleStylePreference

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
      <td>`low_hp_preference`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Chance of using the move, in percent, if HP is under one half</td>
    </tr>
    <tr>
      <td>`high_hp_preference`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Chance of using the move, in percent, if HP is over one half</td>
    </tr>
    <tr>
      <td>`move_battle_style`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The move battle style</td>
    </tr>
  </tbody>
</table>

## PokeAthlonStat
aaa
### to do

## PokemonColor

Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.

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
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon_entries`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of the Pokémon species that have this color.</td>
    </tr>
  </tbody>
</table>

## PokemonForm

aa
### to do

## PokemonHabitat

Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.

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
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon_entries`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of the Pokémon species that can be found in this habitat</td>
    </tr>
  </tbody>
</table>

## PokemonLocationArea

aa
### to do

## PokemonShape

Shapes used for sorting Pokémon in a Pokédex.

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
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`awesome_names`</td>
      <td>[`Array<AwesomeName>`](#awesomename)</td>
      <td>Yes</td>
      <td>The "scientific" name of this Pokémon shape listed in different languages.</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of the Pokémon species that can be found in this habitat</td>
    </tr>
  </tbody>
</table>

### AwesomeName

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
      <td>`awesome_name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized "scientific" name for an API resource in a specific language</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this "scientific" name is in</td>
    </tr>
  </tbody>
</table>

## PokemonSpecie

aa
### to do

## PokemonStat

aa
### to do

## PokemonType

aa
### to do