import type { SchemaReq } from ".";
import { createDef } from "~/src/components";
import { level } from "~/src/navigation";
import { qs } from "~/src/libs/utils/url";

export const defs = createDef<SchemaReq.Params, SchemaReq.Query>({
  name: "crypt_genSalt",
  active: true,
  method: "get",
  pattern: "/crypt/genSalt",
  url: (params, query) => qs.v2.stringifyUrl({ url: `/crypt/genSalt`, query }),
  user_levelReq: level.user.L0_Public.N,
  staff_levelReq: level.staff.L0_Dev.N,
  canSanitize: null,
  canCache: null
});
