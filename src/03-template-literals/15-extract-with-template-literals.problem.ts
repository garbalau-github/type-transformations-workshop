import { Equal, Expect } from '../helpers/type-utils';

type Routes = '/users' | '/users/:id' | '/posts' | '/posts/:id';

// Looking for a colon in a string
type DynamicRoutes = Extract<Routes, `${string}/:${string}`>;

type tests = [Expect<Equal<DynamicRoutes, '/users/:id' | '/posts/:id'>>];
