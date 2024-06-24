export function hasSingleDashes(p: string) {
  return p[0] == "-" && p[1] != "-";
}

export function hasDoubleDashes(p: string) {
  return p[0] == "-" && p[1] == "-";
}

export function paramsIncludeFlag(
  params: string[],
  flag: string | string[]
): boolean {
  let flags: string[];
  if (typeof flag == "string") {
    flags = [flag];
  } else {
    flags = flag;
  }

  return flags.some((f) => {
    return params.some((p) => p.includes(f));
  });
}
