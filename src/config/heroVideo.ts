// All-intra re-encode of kero.mp4 (every frame is a keyframe) so scrub seeks are instant.
import keroVideo from "../assets/kero-scrub.mp4";

export const HERO_VIDEO_CONFIG = {
  src: keroVideo,
  poster: "/hero-poster.svg",
  sensitivity: 0.8,
  objectPosition: "70% center",
} as const;