"use client";
import PodcastCard from "@/components/PodcastCard";
import LoaderSpinner from "@/components/LoaderSpinner";
import { podcastData } from "@/constants";

const Home = () => {
  // Ensure trendingPodcasts is always an array
  const trendingPodcasts = podcastData ?? [];

  // Display the loader only if data is empty
  if (trendingPodcasts.length === 0) return <LoaderSpinner />;

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts.map(({ id, title, description, imgURL }) => (
            <PodcastCard
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
