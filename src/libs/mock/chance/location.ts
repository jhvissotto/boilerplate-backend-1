import { chance } from '.'

export const sample = {
  address: '1856 Katit Parkway',
  altitude: 3990.74435,
  areacode: '(455)',
  city: 'Fusighaj',
  coordinates: '88.03688, -100.04406',
  country: 'TW',
  depth: -6341.27719,
  geohash: 'wf0x2we',
  latitude: -78.30633,
  locale: 'cs',
  locales: ['en', 'pt', 'fr', 'it', 'es'],
  longitude: -177.7852,
  phone: '(505) 749-8751',
  postcode: 'SG7 3CD',
  postal: 'S9L 3H1',
  province: 'BC',
  state: 'MT',
  street: 'Egefen Grove',
  zip: '39751',
}

// prettier-ignore
export const {
  address,
  altitude,
  areacode,
  city,
  coordinates,
  country,
  depth,
  geohash,
  latitude,
  locale,
  locales,
  longitude,
  phone,
  postcode,
  postal,
  province,
  state,
  street,
  zip,
} = chance

// prettier-ignore
export function all({
  address     = [],
  altitude    = [],
  areacode    = [],
  city        = [],
  coordinates = [],
  country     = [],
  depth       = [],
  geohash     = [],
  latitude    = [],
  locale      = [],
  locales     = [],
  longitude   = [],
  phone       = [],
  postcode    = [],
  postal      = [],
  province    = [],
  state       = [],
  street      = [],
  zip         = [],
} : {
  address?:      Parameters<typeof chance.address>,
  altitude?:     Parameters<typeof chance.altitude>,
  areacode?:     Parameters<typeof chance.areacode>,
  city?:         Parameters<typeof chance.city>,
  coordinates?:  Parameters<typeof chance.coordinates>,
  country?:      Parameters<typeof chance.country>,
  depth?:        Parameters<typeof chance.depth>,
  geohash?:      Parameters<typeof chance.geohash>,
  latitude?:     Parameters<typeof chance.latitude>,
  locale?:       Parameters<typeof chance.locale>,
  locales?:      Parameters<typeof chance.locales>,
  longitude?:    Parameters<typeof chance.longitude>,
  phone?:        Parameters<typeof chance.phone>,
  postcode?:     Parameters<typeof chance.postcode>,
  postal?:       Parameters<typeof chance.postal>,
  province?:     Parameters<typeof chance.province>,
  state?:        Parameters<typeof chance.state>,
  street?:       Parameters<typeof chance.street>,
  zip?:          Parameters<typeof chance.zip>,
}) {

  return {
   address:       chance.address(     ...address),
   altitude:      chance.altitude(    ...altitude),
   areacode:      chance.areacode(    ...areacode),
   city:          chance.city(        ...city),
   coordinates:   chance.coordinates( ...coordinates),
   country:       chance.country(     ...country),
   depth:         chance.depth(       ...depth),
   geohash:       chance.geohash(     ...geohash),
   latitude:      chance.latitude(    ...latitude),
   locale:        chance.locale(      ...locale),
   locales:       chance.locales(     ...locales),
   longitude:     chance.longitude(   ...longitude),
   phone:         chance.phone(       ...phone),
   postcode:      chance.postcode(    ...postcode),
   postal:        chance.postal(      ...postal),
   province:      chance.province(    ...province),
   state:         chance.state(       ...state),
   street:        chance.street(      ...street),
   zip:           chance.zip(         ...zip),
 } 
}
