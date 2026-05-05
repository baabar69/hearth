"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  photo?: string;
  aspectRatio?: string;
  rounded?: boolean;
};

export default function KeeperPortrait({
  name,
  photo,
  aspectRatio = "4/3",
  rounded = false,
}: Props) {
  const [errored, setErrored] = useState(false);
  const showPhoto = photo && !errored;

  return (
    <div
      style={{
        position: "relative",
        aspectRatio,
        background:
          "linear-gradient(135deg, var(--paper-3), var(--paper-2))",
        border: "1px solid var(--rule)",
        borderRadius: rounded ? "50%" : 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {showPhoto ? (
        <Image
          src={photo}
          alt={`${name} — Hearth Keeper`}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          onError={() => setErrored(true)}
        />
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 60% 20%, rgba(232,168,69,0.15), transparent 60%)",
            }}
          />
          <div
            style={{
              fontFamily: "var(--serif)",
              fontSize: aspectRatio === "1" ? 64 : 48,
              fontWeight: 300,
              color: "var(--ember)",
              opacity: 0.4,
              lineHeight: 1,
            }}
          >
            {name.charAt(0)}
          </div>
        </>
      )}
    </div>
  );
}
