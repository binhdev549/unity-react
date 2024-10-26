import Image from "next/image";
import dynamic from "next/dynamic";
import UnityCanvas from "./unitycanvas";
import { UnityComponent } from "./unityComponent";

export default function Home() {
  return (
    <div>
      <UnityComponent />
    </div>
  );
}
