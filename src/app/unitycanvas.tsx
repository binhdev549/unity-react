"use client";
import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

import { ArgentTMA, SessionAccountInterface } from "@argent/tma-wallet";
import { Account } from "starknet";

const testMissionData = {
  "1": [
    {
      _id: "67286f94001a4a20a4e869c2",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286c6e839d90f9dc35f58d",
      missionName: "DailyLogin",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 1,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
    {
      _id: "67286f94001a4a20a4e869c8",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286d6698f1e9dfaf0ddcaf",
      missionName: "PLayGame",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 1,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
  ],
  "2": [
    {
      _id: "67286f94001a4a20a4e869c3",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286c6e839d90f9dc35f58d",
      missionName: "DailyLogin",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 2,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
    {
      _id: "67286f94001a4a20a4e869c9",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286d6698f1e9dfaf0ddcaf",
      missionName: "PLayGame",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 2,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
  ],
  "3": [
    {
      _id: "67286f94001a4a20a4e869c4",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286c6e839d90f9dc35f58d",
      missionName: "DailyLogin",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 3,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
    {
      _id: "67286f94001a4a20a4e869ca",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286d6698f1e9dfaf0ddcaf",
      missionName: "PLayGame",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 3,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
  ],
  "4": [
    {
      _id: "67286f94001a4a20a4e869ce",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286d6f98f1e9dfaf0ddcb1",
      missionName: "Retweet",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 4,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
  ],
  "5": [
    {
      _id: "67286f94001a4a20a4e869c5",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286c6e839d90f9dc35f58d",
      missionName: "DailyLogin",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 5,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
    {
      _id: "67286f94001a4a20a4e869cb",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286d6698f1e9dfaf0ddcaf",
      missionName: "PLayGame",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 5,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
  ],
  "6": [
    {
      _id: "67286f94001a4a20a4e869c6",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286c6e839d90f9dc35f58d",
      missionName: "DailyLogin",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 6,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
    {
      _id: "67286f94001a4a20a4e869cc",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286d6698f1e9dfaf0ddcaf",
      missionName: "PLayGame",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 6,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
  ],
  "7": [
    {
      _id: "67286f94001a4a20a4e869c7",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286c6e839d90f9dc35f58d",
      missionName: "DailyLogin",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 7,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
    {
      _id: "67286f94001a4a20a4e869cd",
      userAddress:
        "0x04D562bF65Dd6Cf2e7757fca23d528F7b15522F32d26A84Ae53d5fb0e39f5454",
      missionId: "67286d6698f1e9dfaf0ddcaf",
      missionName: "PLayGame",
      rewardPoints: 100,
      isCompleted: "PENDING",
      completionDate: "2024-11-04T06:54:03.742Z",
      day: 7,
      createdAt: "2024-11-04T06:54:12.224Z",
      updatedAt: "2024-11-04T06:54:12.224Z",
      __v: 0,
    },
  ],
};

const testLeaderBoard = {
  topUsers: [
    {
      _id: "67287ac23dafb8c1bd2aaab9",
      userAddress:
        "0x055558f6C315ac05CD5f35501474e28f22521c7EFdb9321804E2451A62216aFe",
      currentScore: 100,
      rank: 99999,
      lastUpdated: "2024-11-04T07:40:17.962Z",
      createdAt: "2024-11-04T07:41:54.623Z",
      updatedAt: "2024-11-04T07:43:01.165Z",
      __v: 0,
    },
  ],
  user: {
    _id: "67287ac23dafb8c1bd2aaab9",
    userAddress:
      "0x055558f6C315ac05CD5f35501474e28f22521c7EFdb9321804E2451A62216aFe",
    currentScore: 100,
    rank: 99999,
    lastUpdated: "2024-11-04T07:40:17.962Z",
    createdAt: "2024-11-04T07:41:54.623Z",
    updatedAt: "2024-11-04T07:43:01.165Z",
    __v: 0,
  },
};

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
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    sendMessage,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: "Build/build_rex_blitz.loader.js",
    dataUrl: "Build/build_rex_blitz.data",
    frameworkUrl: "Build/build_rex_blitz.framework.js",
    codeUrl: "Build/build_rex_blitz.wasm",
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
    // Handle messages from Unity
    addEventListener("handleConnectButton", (message) => {
      handleConnectButton();
    });

    addEventListener("handleGetProfile", (message) => {
      handleGetProfile();
    });
    addEventListener("handlePassLevel", (jsonData) => {
      console.log("ppass level", jsonData);
      const parsedObj = JSON.parse(jsonData as string);
      handlePassLevel(parsedObj.level, parsedObj.status);
    });
    addEventListener("handleGetLeaderBoard", (message) => {
      handleGetLeaderBoard();
    });
    addEventListener("handleGetMissions", (message) => {
      handleGetMissions();
    });
    addEventListener("handleSuccessMission", (jsonData) => {
      console.log("success mision", jsonData);
      const parsedObj = JSON.parse(jsonData as string);
      handleSuccessMission(
        parsedObj.missionId,
        parsedObj.status,
        parsedObj.day
      );
    });
    return () => {
      removeEventListener("handleConnectButton", (message) => {});
      removeEventListener("handleGetProfile", (message) => {});
      removeEventListener("handlePassLevel", (message) => {});
      removeEventListener("handleGetLeaderBoard", (message) => {});
      removeEventListener("handleGetMissions", (message) => {});
      removeEventListener("handleSuccessMission", (message) => {});
    };
  }, [isLoaded]);
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
    sendMessage("LoginManager", "ReceiveData", "test");
  };

  // useful for debugging
  const handleClearSessionButton = async () => {
    await argentTMA.clearSession();
    setAccount(undefined);
  };

  const handleGetMissions = async () => {
    try {
      sendMessage(
        "PopupDailyActivities",
        "ReceiveMissionData",
        JSON.stringify(testMissionData)
      );
    } catch (error: any) {}
  };
  const handleGetLeaderBoard = async () => {
    try {
      // setDebugValue("Result: " + JSON.stringify(res));
      sendMessage(
        "PopupLeaderboard",
        "ReceiveLeaderBoardData",
        JSON.stringify(testLeaderBoard)
      );
    } catch (error: any) {}
  };
  const handleSuccessMission = async (
    missionId: string,
    status: boolean,
    day: number
  ) => {
    try {
      sendMessage(
        "PopupDailyActivities",
        "ReceiveClaimMissionData",
        JSON.stringify("success")
      );
    } catch (error: any) {
      sendMessage(
        "PopupDailyActivities",
        "ReceiveClaimMissionData",
        JSON.stringify("error")
      );
    }
  };
  const handleGetProfile = async () => {
    try {
      sendMessage(
        "PopupProfile",
        "ReceiveProfileData",
        JSON.stringify({
          userAddress: "ererer",
          telegramUsername: "rererer",
          strkName: ",rerererer",
          profilePicture: "rerer",
          currentScore: 100,
          rank: 10,
          level: 10,
          signupDate: "  ss",
          lastLogin: ",,",
          status: "banned",
        })
      );
    } catch (error: any) {
      // setDebugValue("Bug: " + error);
    }
  };

  const handlePassLevel = async (level: number, status: number) => {
    try {
      sendMessage(
        "GameManager",
        "ReceiveDataPassLevel",
        JSON.stringify("success")
      );
    } catch (error: any) {
      // setDebugValue("Bug: " + error);
    }
  };

  return (
    <div className="">
      <div>
        {!isConnected && <button onClick={handleGetMissions}>Connect</button>}
      </div>
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: 360 / 640,
        }}
        devicePixelRatio={devicePixelRatio}
      />
    </div>
  );
}

export default UnityCanvas;
