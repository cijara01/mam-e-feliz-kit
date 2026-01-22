import { useRef, useState, useEffect } from 'react';
import { VolumeX } from 'lucide-react';
import vslVideo from '@/assets/vsl-video.mov';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Autoplay muted on load
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleOverlayClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsMuted(false);
      setShowOverlay(false);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={vslVideo}
        playsInline
        loop
        controls
        muted={isMuted}
        className="w-full h-auto rounded-xl"
        preload="metadata"
      >
        Seu navegador não suporta vídeos.
      </video>
      
      {/* Sound overlay */}
      {showOverlay && (
        <div 
          onClick={handleOverlayClick}
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-primary/85 rounded-xl transition-opacity hover:bg-primary/90"
        >
          <p className="text-white font-heading font-bold text-sm md:text-lg mb-2">
            Clique aqui
          </p>
          <VolumeX className="w-10 h-10 md:w-14 md:h-14 text-white mb-2" />
          <p className="text-white font-heading font-bold text-sm md:text-lg">
            para ativar o som
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
