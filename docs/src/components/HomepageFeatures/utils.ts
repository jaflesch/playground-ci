export type FeatureItem = {
  title: string;
  source: string;
  description: string;
};

export const featureList: FeatureItem[] = [
  {
    title: 'PokéAPI integration',
    source: 'img/api.png',
    description: 'Provide a class for fetching data from PokéAPI resources, with many helper methods and strong type definitions.',
  },
  {
    title: 'Zero dependency',
    source: 'img/zero.png',
    description: 'TS-PokéAPI have any external package dependency, which makes its bundle very light.'
  },
  {
    title: 'Extensible',
    source: 'img/puzzle.png',
    description: 'Easy to extend and customize data fetch, giving more control over requests and responses.',
  },
  {
    title: 'Test coverage',
    source: 'img/test.png',
    description: 'Maximum coverage to all test suites with reliable code, giving accurate outputs of game formulas from trustfull sources such as Bulbapedia, Serebii, and PokémonDB.',
  },
  {
    title: 'Game formulas',
    source: 'img/math.png',
    description: 'Pokémon is full of math and TS-PokéApi is here to help with a seamless and high level experience. Send the values and we do the calcs!',
  },
  {
    title: 'Pokémon Showdown',
    source: 'img/showdown.png',
    description: 'Quickly import and export Pokémon Showdown teamsheets. Validate teams and explore team building resources.',
  },
  // {
  //   title: 'Catch Combo',
  //   source: 'img/glow.png',
  //   description: 'Discover all the rewards and benefits of long capture combos from Pokémon: Let\'s Go! Pikachu & Eevee\'s signature mechanic.',
  // },
];