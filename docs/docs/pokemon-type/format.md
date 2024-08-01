---
sidebar_position: 2
---

# Format

Pokémon Types's module format functions allows easy to use typing information across different data structures. 

We provide helper functions to convert between indexes from `PokemonTypesArrayIndex` (number), enums from `PokemonTypeName` (string) and enums from `PokemonTypeId` (number), which is the value from PokéApi Pokémon Type resource's id value.

## Methods

### formatTypeIdToIndex()
Returns the `TYPES_CHART_MATRIX` index from given PokéAPI Pokémon Type resource id. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
formatTypeIdToIndex(typeId: PokemonTypeId) => PokemonTypesArrayIndex
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
      <td>`typeId`</td>
      <td>[`PokemonTypeId`](#pokemontypeid)</td>
      <td>Yes</td>
      <td>The PokéAPI Pokémon Type resource id.</td>
    </tr>
  </tbody>
</table>


#### Returns
An index from Pokémon types chart matrix.

#### Examples

```typescript
formatTypeIdToIndex(PokemonTypeId.NORMAL); // returns PokemonTypesArrayIndex.NORMAL
```

### formatTypeIndexToId()
Returns the PokéAPI Pokémon Type resource id from given `TYPES_CHART_MATRIX` index. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
formatTypeIndexToId(typeIndex: PokemonTypesArrayIndex) => PokemonTypeId
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
      <td>`typeIndex`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>The index from Pokémon types chart matrix.</td>
    </tr>
  </tbody>
</table>


#### Returns
A PokéAPI Pokémon Type resource id.

#### Examples

```typescript
formatTypeIndexToId(PokemonTypesArrayIndex.NORMAL); // returns PokemonTypeId.NORMAL
```


### formatTypeIndexToName()
Returns the name of the Pokémon type from given `TYPES_CHART_MATRIX` index. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
formatTypeIndexToName(typeIndex: PokemonTypesArrayIndex) => PokemonTypeName
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
      <td>`typeIndex`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>The index of Pokémon types chart matrix from given Pokémon type.</td>
    </tr>
  </tbody>
</table>


#### Returns
A name of Pokémon type.

#### Examples

```typescript
formatTypeIndexToName(PokemonTypesArrayIndex.NORMAL); // returns PokemonTypeName.NORMAL
```


### formatTypeNameToIndex()
Returns the `TYPES_CHART_MATRIX` index from given Pokémon type name. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
formatTypeNameToIndex(typeName: PokemonTypeName) =>  PokemonTypesArrayIndex
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
      <td>`typeName`</td>
      <td>[`PokemonTypeName`](#pokemontypeid)</td>
      <td>Yes</td>
      <td>The string containing the Pokémon type name.</td>
    </tr>
  </tbody>
</table>


#### Returns
An index from Pokémon types chart matrix.

#### Examples

```typescript
formatTypeNameToIndex(PokemonTypeName.NORMAL ); // returns PokemonTypesArrayIndex.NORMAL
```


### formatTypeNameToId()
Returns the PokéAPI Pokémon Type resource id from given Pokémon type name.

#### Signature
```typescript
formatTypeNameToId(typeName: PokemonTypeName) =>  PokemonTypeId
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
      <td>`typeName`</td>
      <td>[`PokemonTypeName`](#pokemontypeid)</td>
      <td>Yes</td>
      <td>The string containing the Pokémon type name.</td>
    </tr>
  </tbody>
</table>


#### Returns
A PokéAPI Pokémon Type resource id.

#### Examples

```typescript
formatTypeNameToId(PokemonTypeName.NORMAL ); // returns PokemonTypeId.NORMAL
```


### formatTypeIdToName()
Returns the name of the Pokémon type from given PokéAPI Pokémon Type resource id.

#### Signature
```typescript
formatTypeIdToName(typeId: PokemonTypeId) =>  PokemonTypeName
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
      <td>`typeId`</td>
      <td>[`PokemonTypeId`](#pokemontypeid)</td>
      <td>Yes</td>
      <td>The PokéAPI Pokémon Type resource id.</td>
    </tr>
  </tbody>
</table>


#### Returns
A name of the Pokémon type.

#### Examples

```typescript
formatTypeIdToName(PokemonTypeId.NORMAL ); // returns PokemonTypeName.NORMAL
```


## Type Definitions

### format

A "syntatic sugar" object with shortened calls for all Pokémon Type module's format functions.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Object</td>
    </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id2name()`</td>
      <td>[`formatTypeIdToName()`](#formattypeidtoname)</td>
    </tr>
    <tr>
      <td>`id2index()`</td>
      <td>[`formatTypeIdToIndex()`](#formattypeidtoindex)</td>
    </tr>
    <tr>
      <td>`index2id()`</td>
      <td>[`formatTypeIndexToId()`](#formattypeindextoid)</td>
    </tr>
    <tr>
      <td>`index2name()`</td>
      <td>[`formatTypeIndexToName()`](#formattypeindextoname)</td>
    </tr>
    <tr>
      <td>`name2id()`</td>
      <td>[`formatTypeNameToId()`](#formattypenametoid)</td>
    </tr>
    <tr>
      <td>`name2index()`</td>
      <td>[`formatTypeNameToIndex()`](#formattypenametoindex)</td>
    </tr>
  </tbody>
</table>

### PokemonTypeId

