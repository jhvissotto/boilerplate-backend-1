import { Args } from '../Args'
import { RAND } from '../_fns/RAND'
import { priority } from '../_fns/priority'

// prettier-ignore
export function ORDER_BY(Sort: Args.Sort, props?: {
  field?:     Args.Field,
  priorities?:Parameters<typeof priority>[0], 
  randKey?:   Args.RandKey,
  lang?:      Args.Langs,
}) {

  // props
  const field       = props?.field
  const priorities  = props?.priorities
  const randKey     = props?.randKey
  const lang        = props?.lang
  
  

  switch (Sort) {
    // =========================================== //
    // ================ ARBITRARY ================ //
    // =========================================== //
    case 'SORT_NUMBER':       return `ORDER BY sortNumber_${field}`
  
    
    // ======================================== //
    // ================ RANDOM ================ //
    // ======================================== //
    case 'RANDOM':            return `ORDER BY ${RAND(randKey)}` 
    case 'WEIGHT_RAND':       return `ORDER BY ${[priority(priorities), RAND(randKey)].join(', ')}`        


    // ============================================== //
    // ================ ALPHABETICAL ================ //
    // ============================================== //
    case 'NAME_AZ':           return `ORDER BY name_${field} ASC`
    case 'NAME_ZA':           return `ORDER BY name_${field} DESC`

    case 'TITLE_AZ':          return `ORDER BY title_${lang}_${field} ASC`
    case 'TITLE_ZA':          return `ORDER BY title_${lang}_${field} DESC`

    // ====================================== //
    // ================ DATE ================ //
    // ====================================== //
    case 'LAST_UPDATE':       return `ORDER BY lastUpdate DESC`
    case 'NEWEST':            return `ORDER BY create_${field} DESC`
    case 'OLDEST':            return `ORDER BY create_${field} ASC`


    // ======================================= //
    // ================ STATS ================ //
    // ======================================= //
    // byPost
    case 'COUNT_VIEWS':       return `ORDER BY count_views  DESC`
    case 'COUNT_LIKES':       return `ORDER BY count_likes  DESC`

    // byUser, byTag
    case 'COUNT_POSTS':       return `ORDER BY count_posts  DESC`
    case 'COUNT_USERS':       return `ORDER BY count_users  DESC`
    
    // byUser, byTag
    case 'TOTAL_VIEWS':       return `ORDER BY total_views  DESC`
    case 'TOTAL_LIKES':       return `ORDER BY total_likes  DESC`
    
    // byUser, byTag
    case 'AVG_VIEWS':         return `ORDER BY avg_views    DESC`
    case 'AVG_LIKES':         return `ORDER BY avg_likes    DESC`


    // ========================================= //
    // ================ DEFAULT ================ //
    // ========================================= //
    case 'OMIT':              return ``
    case '':                  return ``
    default:                  return ``
  }

}
