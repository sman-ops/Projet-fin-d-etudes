import React, { useEffect, useRef } from "react";
const VideoCard = (props) => {
  const ref = useRef();
  const peer = props.peer;

  useEffect(() => {
    peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
      // console.log(stream);
    });
    peer.on("track", (track, stream) => {});
    // console.log(ref);
  }, [peer]);

  return (
    <video className="rounded bg-slate-200" playsInline autoPlay ref={ref} />
  );
};

export default VideoCard;
