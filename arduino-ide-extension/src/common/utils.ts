export const naturalCompare: (left: string, right: string) => number =
  require('string-natural-compare').caseInsensitive;

export function notEmpty(arg: string | undefined | null): arg is string {
  return !!arg;
}

export function firstToLowerCase(what: string): string {
  return what.charAt(0).toLowerCase() + what.slice(1);
}

export function firstToUpperCase(what: string): string {
  return what.charAt(0).toUpperCase() + what.slice(1);
}

export function startsWithUpperCase(what: string): boolean {
  return !!what && what.charAt(0) === firstToUpperCase(what.charAt(0));
}

export function isNullOrUndefined(what: unknown): what is undefined | null {
  return what === undefined || what === null;
}
