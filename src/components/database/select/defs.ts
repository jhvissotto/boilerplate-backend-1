// libs
import { link } from '~/src/libs/functions'
// app
import { createDefs } from '~/src/components'
import { level } from '~/src/navigation'
// local
import type { SchemaReq } from '.'

export const defs = createDefs<SchemaReq.Params, SchemaReq.Query>({
  name: 'database_select',
  active: true,
  method: 'get',
  pattern: '/database/select/:table',
  url: (p, q) => link.stringify(`/database/select/${p.table}`, q),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: true,
  canCache: false,
})
