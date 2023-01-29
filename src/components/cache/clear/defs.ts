import type { SchemaReq } from '.'
import { createDef } from '~/src/components'
import { level } from '~/src/navigation'
import { qs } from '~/src/libs/utils/link'

export const defs = createDef<SchemaReq.Params, SchemaReq.Query>({
  name: 'cache_clear',
  active: true,
  method: 'get',
  pattern: '/cache/clear',
  url: (params, query) => qs.v2.stringifyUrl({ url: `/cache/clear`, query }),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: null,
  canCache: null,
})
