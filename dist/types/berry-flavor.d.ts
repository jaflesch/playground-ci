import { Name, NamedAPIResource } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/berry-flavor/1 https://pokeapi.co/api/v2/berry-flavor/[id or name]}.
 *
 * Berries can be soft or hard. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property berries - A list of the berries with this flavor.
 * @property contest_type - The contest type that correlates with this berry flavor.
 * @property names - The name of this resource listed in different languages.
 */
export type BerryFlavor = {
    id: number;
    name: string;
    berries: FlavorBerryMap[];
    contest_type: NamedAPIResource;
    names: Name[];
};
export type FlavorBerryMap = {
    potency: number;
    berry: NamedAPIResource;
};
