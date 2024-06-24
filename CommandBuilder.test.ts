import { describe, it, expect, vi } from "vitest";
import { CommandBuilder } from "./CommandBuilder";

describe("CommandBuilder", () => {
  it("Should parse params", () => {
    const b = new CommandBuilder();

    const cb = vi.fn();
    b.addParam("t", cb);

    b.execute(["-t"]);

    expect(cb).toHaveBeenCalledOnce();
  });

  it("Should parse params with multiple options", () => {
    const b = new CommandBuilder();

    const cb = vi.fn();
    b.addParam(["t", "--test"], cb);

    b.execute(["-t"]);
    b.execute(["-r", "--test"]);

    expect(cb).toHaveBeenCalledTimes(2);
  });
});
