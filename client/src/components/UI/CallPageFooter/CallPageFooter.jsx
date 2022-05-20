import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactMediaRecorder } from "react-media-recorder";
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./CallPageFooter.scss";

function CallPageFooter({
  clickChat,
  clickCameraDevice,
  goToBack,
  toggleAudio,
  toggleCamera,
  userVideoAudio,
  clickScreenSharing,
  screenShare,
  videoDevices,
  showVideoDevices,
  setShowVideoDevices,
}) {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true, screen: true });

  return (
    <div className="footer-item">
      <div className="left-item">
        <div className="icon-block">
          Meeting details
          <FontAwesomeIcon className="icon" icon={faAngleUp} />
        </div>
      </div>

      <div className="center-item">
        <div className="icon-block" onClick={toggleAudio}>
          {userVideoAudio.audio ? (
            <FontAwesomeIcon className="icon" icon={faMicrophone} />
          ) : (
            <FontAwesomeIcon className="icon red" icon={faMicrophoneSlash} />
          )}
        </div>
        <div className="icon-block" onClick={goToBack}>
          <FontAwesomeIcon className="icon red" icon={faPhone} />
        </div>
        <div className="icon-block" onClick={toggleCamera}>
          {userVideoAudio.video ? (
            <FontAwesomeIcon className="icon" icon={faVideo} />
          ) : (
            <FontAwesomeIcon className="icon red" icon={faVideoSlash} />
          )}
        </div>
      </div>
      <div className="right-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
          <p className="title">Turn on captions</p>
        </div>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>

        <video src={mediaBlobUrl} controls autoPlay loop />

        <div className="icon-block" onClick={clickScreenSharing}>
          <FontAwesomeIcon className="icon red" icon={faDesktop} />
          <p className="title">Present now</p>
        </div>
      </div>
    </div>
  );
}

export default CallPageFooter;