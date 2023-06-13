// what =>   useCallback is hook that will return a memorized version of the callback function that only change if one of the dependency has changed.

import { useCallback } from "react";

//  why => it is usefull to passing callback to optimized child componet that rely on reference eqality to prevent unnecessary renders.

// useCllback use to optimise performance

const incrementAge = useCallback(() => {
  setAge(age + 1);
}, [age]);

// use dependency array
