export function names(...v: string[]) {
  return v.filter((name) => Boolean(name)).join(' ');
}

export function check(result: boolean, className: string): string {
  return result ? className : '';
}

export function conditionalString(condition: any, value: string) {
  return condition ? value : '';
}

export function conditionalValue(condition: any, value: any) {
  return condition ? value : null;
}

export function conditionalRun(predicate: () => boolean, call: () => void) {
  return () => {
    if (predicate()) {
      call();
    }
  };
}

export function compareDateString(a: string, b: string): number {
  return Date.parse(a) - Date.parse(b);
}

