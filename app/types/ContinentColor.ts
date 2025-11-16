import { KoumThemeColor } from 'koum-ui';

export type Continent =
    | 'Africa'
    | 'Asia'
    | 'Europe'
    | 'NorthAmerica'
    | 'Oceania'
    | 'SouthAmerica';

export const ContinentColor = {
    Africa: 'success',
    Asia: 'secondary',
    Europe: 'tertiary',
    NorthAmerica: 'info',
    Oceania: 'warning',
    SouthAmerica: 'neutral',
} as const satisfies Record<string, KoumThemeColor>;

export const continentColorMap: Record<Continent, KoumThemeColor> = {
    Africa: ContinentColor.Africa,
    Asia: ContinentColor.Asia,
    Europe: ContinentColor.Europe,
    NorthAmerica: ContinentColor.NorthAmerica,
    Oceania: ContinentColor.Oceania,
    SouthAmerica: ContinentColor.SouthAmerica,
};
