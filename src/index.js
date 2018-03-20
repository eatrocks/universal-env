import isBrowser from "is-in-browser";
import serializeJS from "serialize-javascript";

let vars = isBrowser ? window.__UNIVERSAL_ENV_VARS__ : {};

export function share(...keys) {
  if (!isBrowser) {
    vars = keys.reduce(
      (acc, key) => Object.assign(acc, { [key]: process.env[key] }),
      {}
    );
  }
}

export function script() {
  return `window.__APP_ENV_VARS__ = ${serializeJS(vars)}`;
}

export function get() {
  return Object.assign({}, vars);
}
