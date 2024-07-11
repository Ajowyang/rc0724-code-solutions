/* exported defaults */
function defaults(target: object, source: object): void {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
