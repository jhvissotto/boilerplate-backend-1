import { nav } from '~/src'
import * as mids from '~/src/middlewares'

// prettier-ignore
export function create({ name, active, method, pattern, ctrl }: Omit<nav.Route, 'mids'>, { 
    z_schema, 
    canSanitize, 
    canCache 
}: {
    z_schema:    Parameters<typeof mids.validator>[0], 
    canSanitize: Parameters<typeof mids.validator>[1]['canSanitize'], 
    canCache:    Parameters<typeof mids.cache>[0]['canCache'],
}) {
    return {
        name,
        active,
        method,
        pattern,
        mids: [
            mids.validator(z_schema, { canSanitize }),
            mids.cache({ canCache })
        ],
        ctrl
    }
}
