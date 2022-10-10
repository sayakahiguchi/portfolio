import React, { useEffect, ReactElement, RefObject, useCallback, useRef, MutableRefObject } from "react";

export type useScrollProps = () => [
  scrollRef: MutableRefObject<null | HTMLElement>,
  moveTo: () => void
]

export const useScroll: useScrollProps = () => {
  const scrollRef = useRef<null | HTMLElement>(null);
  useEffect(() => {
    const uaData = window.navigator.userAgentData
    if (uaData) {
      const brands: { brand: string, version: string }[] = uaData.brands;
      const browserName: string = "Chrome";
      const brand = uaData?.brands.find(item => item.brand.includes(browserName));
    }
  }, [])


  const scrollAnimation = (restStep: number, destination: number) => {
    const delta = (destination - window.pageYOffset) / restStep;
    window.scrollBy(0, delta);
    const nextRestStep = restStep - 1;
    if (!nextRestStep) return;
    window.requestAnimationFrame(() =>
      scrollAnimation(nextRestStep, destination)
    );
  };



  const moveTo = useCallback(() => {
    // const top = scrollRef?.current.getBoundingClientRect()?.top;
    // scrollAnimation(30, top + window.pageYOffset);
    console.log(scrollRef.current)
    return scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: 'start',
    });
  }, []);
  return [scrollRef, moveTo];
};