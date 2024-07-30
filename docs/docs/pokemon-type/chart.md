---
sidebar_position: 10
---

# Chart

A stat refers to any of several parameters pertaining to Pokémon that can affect turn order, move success, and damage output during a battle. With exception to the HP stat, a Pokémon's stat can also be temporarily raised or lowered in stages during battle through various effects.

::::info
See more on [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Stat).
::::

## Methods
### getStatValue()
Returns the Pokémon's final stat value regarding parameters sent

#### Signature
```typescript
getStatValue(params: GetStatValueParams) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`GetStatValueParams`](#getstatvalueparams)</td>
      <td>Yes</td>
      <td>
      The general parameters used for Pokémon's stat calculation.
      </td>
    </tr>
    <tr>
      <td>`params.base`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
      </td>
    </tr>
    <tr>
      <td>`params.ev`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's Effort Value (EV) for given stat.
      </td>
    </tr>
    <tr>
      <td>`params.iv`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's Individual Value (IV) for given stat.
      </td>
    </tr>
    <tr>
      <td>`params.isHp`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating HP stat value for given Pokémon.
      </td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's level.
      </td>
    </tr>
    <tr>
      <td>`params.nature`</td>
      <td>[`NatureStatType`](#naturestattype)</td>
      <td>No</td>
      <td>
      If the Pokémon has a hindering, neutral, or enhancing nature.
      </td>
    </tr>
    <tr>
      <td>`params.isShedinja`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating a stat for [Shedinja](https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon))
      </td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the Pokémon's final stat value.

#### Examples

```typescript
getStatValue({
  base: 100,
  ev: 255,
}); // outputs 328

getStatValue({
  base: 100,
  ev: 255,
  isHp: true,
}); // outputs 404

getStatValue({
  base: 100,
  iv: 0,
  isHp: true,
}); // outputs 310

getStatValue({
  base: 100,
  isHp: true,
  isShedinja: true,
}); // outputs 1
```



## Type Definitions

### PokemonTypeName

### GetStatValueParams

An interface to determine the Pokémon's final stat value with [`getStatValue()`](#getstatvalue).

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
      </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Required</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`base`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`iv`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`ev`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`isHp`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`isShedinja`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`nature`</td>
      <td> No </td>
      <td>[`NatureStatType`](#naturestattype)</td>
    </tr>
  </tbody>
</table>

### GetLegendsArceusStatValueParams

An interface to determine the Pokémon's final stat value with [`getLegendsArceusStatValue()`](#getlegendsarceusstatvalue).

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
      </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Required</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`base`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`effortLevel`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`isHp`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`nature`</td>
      <td> No </td>
      <td>[`NatureStatType`](#naturestattype)</td>
    </tr>
  </tbody>
</table>


### GetLetsGoPikachuStatValueParams

An interface to determine the Pokémon's final stat value with [`getLetsGoPikachuStatValue()`](#getletsgopikachustatvalue).

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
      </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Required</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`base`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`iv`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`av`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`friendship`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`isHp`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`nature`</td>
      <td> No </td>
      <td>[`NatureStatType`](#naturestattype)</td>
    </tr>
  </tbody>
</table>


### GetCPValueParams

An interface to determine the Pokémon's Combat Power value with [`getCPValue()`](#getcpvalue).

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
      </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Required</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`stat`</td>
      <td> Yes </td>
      <td>`object`</td>
    </tr>
    <tr>
      <td>`stat.hp`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.attack`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.defense`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.specialAttack`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.specialDefense`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.speed`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`totalAv`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
  </tbody>
</table>

### NatureStatType

A string value describing how the Nature affects the stat.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>enum(`'enhancing'`, `'hindering'`, `'neutral'`)</td>
      </tr>
  </tbody>
</table>


### StageMultiplier

A number value representing the stat stage multiplier.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>enum(`-6`, `-5`, `-4`, `-3`, `-2`, `-1`, `1`, `2`, `3`, `4`, `5`, `6`)</td>
      </tr>
  </tbody>
</table>
