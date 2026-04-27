function VideoCard({ videoId }: { videoId: string }) {
  return (
    <div className="relative w-full pt-[56.25%] overflow-hidden rounded-xl border border-border group hover:border-[#FFD700] transition-colors duration-300">
      <iframe
        src={`https://drive.google.com/file/d/${videoId}/preview`}
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default VideoCard;
