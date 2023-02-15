// libs
import { link } from '~/src/libs/functions'
// app
import { createDefs } from '~/src/components'
import { level } from '~/src/navigation'
// local
import { SchemaReq } from '.'

export const defs = createDefs<Schema['params'], Schema['query']>({
  name: 'auth',
  active: true,
  method: 'get',
  pattern: '/auth',
  url: (p, q) => link.stringify(`/auth`, q),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: null,
  canCache: false,
})
