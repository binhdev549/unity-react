"use client";
import dynamic from "next/dynamic";

export const UnityComponent = dynamic(() => import("./unitycanvas"), {
  ssr: false,
});
