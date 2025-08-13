// types/next-params.d.ts
export type PagePropsPromise<T extends object> = { params: Promise<T> };
