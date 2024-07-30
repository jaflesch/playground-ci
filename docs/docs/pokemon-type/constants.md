---
sidebar_position: 10
---

# Constants

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
