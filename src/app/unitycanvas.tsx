"use client";
import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

import { ArgentTMA, SessionAccountInterface } from "@argent/tma-wallet";
import { Account } from "starknet";

const argentTMA = ArgentTMA.init({
  environment: "sepolia", // "sepolia" | "mainnet" (not supperted yet)
  appName: "My TG Mini Test Dapp", // Your Telegram app name
  appTelegramUrl: "https://t.me/RedBlitzBot", // Your Telegram app URL
  sessionParams: {
    allowedMethods: [
      // List of contracts/methods allowed to be called by the session key
      {
        contract:
          "0x036133c88c1954413150db74c26243e2af77170a4032934b275708d84ec5452f",
        selector: "increment",
      },
    ],
    validityDays: 90, // session validity (in days) - default: 90
  },
});

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

  const [_account, setAccount] = useState<
    SessionAccountInterface | undefined
  >();
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    // Call connect() as soon as the app is loaded
    argentTMA
      .connect()
      .then((res) => {
        if (!res) {
          // Not connected
          setIsConnected(false);
          return;
        }

        if (_account && _account.getSessionStatus() !== "VALID") {
          // Session has expired or scope (allowed methods) has changed
          // A new connection request should be triggered

          // The account object is still available to get access to user's address
          // but transactions can't be executed
          const { account } = res;

          setAccount(account);
          setIsConnected(false);
          return;
        }

        // Connected
        const { account, callbackData } = res;
        // The session account is returned and can be used to submit transactions
        setAccount(account);
        setIsConnected(true);
        // Custom data passed to the requestConnection() method is available here
        console.log("callback data:", callbackData);
      })
      .catch((err) => {
        console.error("Failed to connect", err);
      });
  }, []);

  const handleConnectButton = async () => {
    await argentTMA.requestConnection("custom_callback_data");
  };

  // useful for debugging
  const handleClearSessionButton = async () => {
    await argentTMA.clearSession();
    setAccount(undefined);
  };

  return (
    <div className="">
      <button
        onClick={handleConnectButton}
        className="h-10 grid place-items-center rounded-md bg-slate-400 px-4"
      >
        <p>Connect</p>
      </button>
      <p>{_account?.address}</p>
      <Unity
        unityProvider={unityProvider}
        style={{ width: 360, height: 640 }}
        devicePixelRatio={devicePixelRatio}
      />
    </div>
  );
}

export default UnityCanvas;
