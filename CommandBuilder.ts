import { paramsIncludeFlag } from "./CommandBuilder.filters";

export class CommandBuilder {
  paramsAndCallbacks = new Map<string | string[], Function>();

  constructor() {}

  addParam(flag: string | string[], command: () => void): CommandBuilder {
    this.paramsAndCallbacks.set(flag, command);
    return this;
  }

  execute(params: string[]) {
    const withDashes = params.filter((p) => p.startsWith("-"));
    if (withDashes.length == 0) throw new Error("No params received");

    // const withSingleDashes = params.filter(hasSingleDashes);
    // const withDoubleDashes = params.filter(hasDoubleDashes);

    const cbSet = new Set<Function>();

    for (const [flag, cb] of this.paramsAndCallbacks.entries()) {
      if (paramsIncludeFlag(params, flag)) cbSet.add(cb);
    }

    for (const cb of cbSet.values()) {
      cb();
    }
  }
}
