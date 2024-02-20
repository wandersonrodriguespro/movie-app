import { Player, Youtube } from "@vime/react";
import * as C from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Video = ({ playVideo, handleClousePlayVideo, linkVideo }) => {
  return playVideo ? (
    <C.Container>
      <C.Button onClick={handleClousePlayVideo}>
        <AiOutlineArrowLeft />
        Back
      </C.Button>

      <Player controls>
        <Youtube videoId={linkVideo} />
      </Player>
    </C.Container>
  ) : null;
};
