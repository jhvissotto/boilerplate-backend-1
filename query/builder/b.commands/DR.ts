import { Args } from '~/query/builder'
import { __ } from '~/query/builder/a.fns'
import { ORDER_BY } from '~/query/builder/b.commands'

// prettier-ignore
export function DR(
    field: Args.Field,
    orderOpts: Parameters<typeof ORDER_BY>[1] & { 
        sort:  Parameters<typeof ORDER_BY>[0] 
    }
) {

    // args
    const { sort, ...opts } = orderOpts


    
    // query
    let qs = `
        DENSE_RANK() OVER(${ORDER_BY(sort, opts)}) AS sr_${field}
    `
    

    
    // console.log('qs', qs)
    return qs
}