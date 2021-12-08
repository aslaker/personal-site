// use-isomorphic-layout-effect.js

//NOTE: THIS IS A HACK meant to accomodate for the error given during server side rendering
import { useLayoutEffect, useEffect } from "react";
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;
