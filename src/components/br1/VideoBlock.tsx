import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const VIDEO_SRC = "/br1-vsl.mp4";
const THUMB_SRC = "/br1-thumb.jpg";

const VideoBlock = () => {
  const [play, setPlay] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-6 py-6"
    >
      <h2
        className="text-2xl font-bold text-foreground text-center mb-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        Veja como funciona na prática
      </h2>

      <div className="mx-auto w-full max-w-[380px]">
        <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-card bg-black">
          {!play ? (
            <button
              type="button"
              onClick={() => setPlay(true)}
              className="relative w-full h-full cursor-pointer group"
            >
              <img
                src={THUMB_SRC}
                alt="Assistir vídeo"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>

              <p className="absolute bottom-4 w-full text-center text-sm text-white font-medium">
                Clique para assistir
              </p>
            </button>
          ) : (
            <video
              src={VIDEO_SRC}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default VideoBlock;
