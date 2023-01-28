import { config } from '~/src/global'
import { ctrl, E } from '~/src'
import { crypt } from '~/src/security'
import type { SchemaReq } from '.'
import { defs } from '.'

export async function _ctrl(
  req: ctrl.Req<SchemaReq.Params, SchemaReq.Query, SchemaReq.Body>,
  res: ctrl.Res
) {
  const { params, query, body } = req
  const {} = req.params
  const {} = req.query
  const { password } = req.body

  const { validation } = req
  const { locals } = res

  let resp = ctrl.newForm({
    cache_enable: defs.canCache,
    cache_duration: defs.canCache ? config().cacheDuration : '',
    validation_params: req.params,
    validation_query: req.query,
    validation_body: req.body,
    validation_isSanitized: validation.isSanitized,
    user_levelReq: defs.user_levelReq,
    token_user: req.token,
    errors: validation.errors,
  })

  const encryption = crypt.hash_make(password)

  if (encryption.error) {
    locals.errors.push(E.catcher(encryption.error))
  }

  resp = ctrl.newForm({
    ...resp,
    props: {
      hash: encryption.hash,
    },
    errors: locals.errors,
  })

  return res.json(resp)
}