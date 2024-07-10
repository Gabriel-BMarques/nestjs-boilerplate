export function toCamelCase(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => toCamelCase(item));
  }

  return Object.keys(obj).reduce((result, key) => {
    const camelCaseKey = key.replace(/(_\w)/g, (matches) =>
      matches[1].toUpperCase(),
    );
    result[camelCaseKey] = toCamelCase(obj[key]);
    return result;
  }, {} as any);
}

export function toSnakeCase(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => toSnakeCase(item));
  }

  return Object.keys(obj).reduce((result, key) => {
    const snakeCaseKey = key.replace(
      /[A-Z]/g,
      (letter) => `_${letter.toLowerCase()}`,
    );
    result[snakeCaseKey] = toSnakeCase(obj[key]);
    return result;
  }, {} as any);
}
