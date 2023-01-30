// libs
import { qs } from '~/src/libs/utils/link'
// app
import { createDef } from '~/src/components'
import { level } from '~/src/navigation'
// local
import type { SchemaReq } from '.'

export const defs = createDef<SchemaReq.Params, SchemaReq.Query>({
  name: 'test',
  active: true,
  method: 'get',
  pattern: '/test',
  url: (params, query) => qs.v2.stringifyUrl({ url: `/test`, query }),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: null,
  canCache: null,
})
