import { Equal, Expect } from "../helpers/type-utils";

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;


type EnumObject = typeof frontendToBackendEnumMap;

// type BackendModuleEnum = EnumObject['singleModule' | 'multiModule' | 'sharedModule']
type BackendModuleEnum = EnumObject[keyof EnumObject]

type tests = [
  Expect<
    Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
  >,
];
