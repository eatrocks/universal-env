import { share, script, get } from "../index";

it("shares only specified env vars", () => {
  share("NODE_ENV");
  const { NODE_ENV } = get();
  expect(NODE_ENV).toBe("test");
  expect(Object.keys(get()).length).toBe(1);
});

it("creates a parseable script string", () => {
  share("NODE_ENV");
  const s = script();
  expect(typeof s).toBe("string");
  expect(s).toMatch("NODE_ENV");
  const window = {};
  expect(window).toEqual({});
  eval(s);
  expect(window).toEqual({
    __APP_ENV_VARS__: {
      NODE_ENV: "test"
    }
  });
});
