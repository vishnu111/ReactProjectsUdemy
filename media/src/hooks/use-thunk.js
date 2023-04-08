import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      //Here in the dispatch if we don't unwrap() the promise then the "then" function executes in both promise success or failure status. With the unwrap() addition, the "then" and "catch" behave as intended (on promise success "then", else "catch")
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  ); //need not add dispatch here, adding just to get rid of eslint error
  return [runThunk, isLoading, error];
}
