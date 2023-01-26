import { is } from "~/src/libs/functions/check";

export function append(
  ...[targetUrl, queryKey, queryVal = ""]: [string, string, string?]
): string {
  // if no queryKey
  if (is.empty(queryKey)) return targetUrl;

  // append
  const TargetUrl = new URL(targetUrl);
  TargetUrl.searchParams.append(queryKey, queryVal);

  // result
  return TargetUrl.href;
}
