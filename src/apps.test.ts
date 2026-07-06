import { describe, expect, it } from "vitest";
import { apps } from "./apps";

describe("apps", () => {
  it("lists every suite app with a valid URL", () => {
    expect(apps).toHaveLength(4);
    for (const app of apps) {
      expect(app.name).toBeTruthy();
      expect(() => new URL(app.url)).not.toThrow();
    }
  });
});
