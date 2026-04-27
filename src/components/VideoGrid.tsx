import VideoCard from './VideoCard';

const VIDEO_IDS = [
  "1CylihNrt8SjH3hxeW0mTnPrdu-iCxKjY",
  "1uUVYc5a7L8xuo8iaifHLD3q-CYumzI0m",
  "1ZIeGdQINXNjrw7iwlaLdQWzJB9CSqE_P",
  "1CsPg022Neh41v0JRiWLelTtk4UUfGZZZ",
  "1Mmn1xmTUrLqtpLi1ITbXgfX2JdNwGdgg",
  "1ZK2tWJuWpBtrT07uRMqALgnjp3lJHcOE"
];

function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] max-w-[1200px] mx-auto w-full">
      {VIDEO_IDS.map((id) => (
        <VideoCard key={id} videoId={id} />
      ))}
    </div>
  );
}

export default VideoGrid;
