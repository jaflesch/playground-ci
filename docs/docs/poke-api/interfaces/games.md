---
sidebar_position: 4
---

# Games

## Generation

Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/) for greater detail.

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
      <td>`chain`</td>
      <td>[`ChainLink`](#chainlink)</td>
      <td>Yes</td>
      <td>The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order</td>
    </tr>
    <tr>
      <td>`baby_trigger_item`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon</td>
    </tr>
  </tbody>
</table>

## Pokedex

## Version

## VersionGroup