import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'
import { RefObject, useEffect } from 'react'


export const useBodyScrollLock = <T extends HTMLElement>(
  ref: RefObject<T>,
  state: boolean,
): void => {
  useEffect(() => {
    if (ref.current === null) {
      return;
    }
    if (state) {
      disableBodyScroll(ref.current, {
        reserveScrollBarGap: true,
      });
    } else {
      enableBodyScroll(ref.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [state, ref]);
};

