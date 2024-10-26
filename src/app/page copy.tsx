"use client";
import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityCanvas() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "build/build_rex_blitz.loader.js",
    dataUrl: "build/build_rex_blitz.data",
    frameworkUrl: "build/build_rex_blitz.framework.js",
    codeUrl: "build/build_rex_blitz.wasm",
    streamingAssetsUrl: "StreamingAssets",
  });

  // We'll use a state to store the device pixel ratio.
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useEffect(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: 360, height: 640 }}
      devicePixelRatio={devicePixelRatio}
    />
  );
}

export default UnityCanvas;
