import { Args } from '../Args'
import { __ } from '../_fns/__'
import { fld } from '../_fns/fld'
import { valueOrBind } from '../_fns/valueOrBind'
import { where_slug } from '../_fns/where_slug'

// prettier-ignore
export function WHERES(list: Array<{
    field:  Args.Field
    by:     Args.BY,
    pk?:    Args.PK
    slug?:  Args.Slug
    rn?:    Args.RN
}>, langs?: Args.Langs[]) {

    
    const qs = `
        WHERE (
            ${list.map(i => {

                const PK    = i.by == 'PK'
                const SLUG  = i.by == 'SLUG'
                const RN    = i.by == 'RN'

                return `
                    ${__(PK)}   ${fld('pk', i.field)} = ${valueOrBind(fld('pk', i.field), i.pk)}
                    ${__(SLUG)} ${where_slug(langs, i.field, i.slug)}
                    ${__(RN)}   ${fld('rn', i.field)} = ${valueOrBind(fld('rn', i.field), i.rn)}
                `
            }).join('\n AND \n')}
        )
    `

    // console.log('qs', qs)
    return qs
}