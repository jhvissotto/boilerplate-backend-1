import type { SchemaReq } from "../";
import { defs } from "../";
import { self } from "~/src/api";
import { resolvers } from "~/src/libs/helpers";

// prettier-ignore
export async function api({ params, query, body }: {
  params: SchemaReq.Params;
  query: SchemaReq.Query;
  body: SchemaReq.Body;
},
  opts: Parameters<typeof self.axios>[1]
) {
  return await resolvers.obj.d(self.axios({
    method: defs.method,
    url: defs.url(params, query),
    data: body,
    ...opts
  }));
}
