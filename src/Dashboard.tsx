import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { useAuth } from "@/lib/AuthContext";
import SpotCard from "@/components/spots/SpotCard";

export default function Dashboard() {
  const { user } = useAuth();

  const { data: bookmarks = [] } = useQuery({
    queryKey: ["bookmarks", user?.id],
    queryFn: () => base44.entities.Bookmark.filter({ created_by_id: user?.id }),
    enabled: !!user,
  });

  const { data: spots = [] } = useQuery({
    queryKey: ["spots"],
    queryFn: () => base44.entities.StudySpot.filter({ status: "approved" }),
  });

  const bookmarkedSpots = useMemo(() => {
    const bookmarkIds = bookmarks.map((bookmark) => bookmark.spot_id);
    return spots.filter((spot) => bookmarkIds.includes(spot.id));
  }, [bookmarks, spots]);

  const recommendedSpots = [...spots]
    .sort((a, b) => (b.avg_overall_rating || 0) - (a.avg_overall_rating || 0))
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">
        Welcome back{user?.full_name ? `, ${user.full_name.split(" ")[0]}` : ""} 👋
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded-xl p-4">
          <p className="text-sm text-gray-500">Bookmarks</p>
          <p className="text-2xl font-bold">{bookmarks.length}</p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-sm text-gray-500">Study Spots</p>
          <p className="text-2xl font-bold">{spots.length}</p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-sm text-gray-500">Recommended</p>
          <p className="text-2xl font-bold">{recommendedSpots.length}</p>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Your Bookmarks</h2>

        {bookmarkedSpots.length === 0 ? (
          <p>You have not bookmarked any spots yet.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {bookmarkedSpots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Recommended Spots</h2>

        <div className="grid grid-cols-3 gap-4">
          {recommendedSpots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </section>
    </div>
  );
}