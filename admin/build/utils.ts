export function isDevFn(): boolean {
  return process.env.NODE_ENV === 'development';
}

export function isProdFn(): boolean {
  return process.env.NODE_ENV === 'production';
}
