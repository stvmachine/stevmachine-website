import { useEffect, useLayoutEffect } from 'react';

const isInBrowser = () => typeof window !== 'undefined';

/**
 * {@link useLayoutEffect} that does not show warning when server-side rendering.
 * @see https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 */
export const useIsomorphicLayoutEffect = isInBrowser()
  ? useLayoutEffect
  : useEffect;
