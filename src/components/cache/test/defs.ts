// libs
import { link } from '~/src/libs/functions'
// app
import { createDefs } from '~/src/components'
import { level } from '~/src/navigation'
// local
import type { Schema } from '.'

export const defs = createDefs<Schema['params'], Schema['query']>({
  name: 'cache_test',
  active: true,
  method: 'get',
  pattern: '/cache/test',
  url: (p, q) => link.stringify(`/cache/test`, q),
  user_levelReq: level.user.L0_Free.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: null,
  canCache: null,
})
