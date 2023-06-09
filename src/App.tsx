import React, { useEffect, useState } from "react";
import "./App.css";
import { HotelTile } from "./components/HotelTile/HotelTile";
import { HotelList } from "./types/hotelType";
import { useDispatch } from "react-redux";
import { addButtonTemplates } from "./components/HotelTile/TileSelectionButton/selectionSlice";
function App() {
  const [hotelsList, setHotels] = useState<HotelList>({ hotels: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const fetchHotels = async () => {
      const hotels = (await (
        await fetch("data/hotels.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      ).json()) as HotelList;

      setHotels(hotels);
      setIsLoading(false);
    };

    fetchHotels();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <header className="header"></header>
      <div className="header__title"></div>
      <main className="content-wrapper">
        <section className="tile-list">
          {hotelsList.hotels.map((hotel, index) => {
            const key = `hotelTile${index}`;
            dispatch(addButtonTemplates({ [key]: false }));
            return (
              <HotelTile
                key={key}
                dataKey={key}
                image={
                  (!!hotel.image && {
                    src: hotel.image.src,
                    alt: hotel.image.alt,
                  }) ||
                  undefined
                }
                tileTitle={{
                  starCount: hotel.tileTitle.starCount || 0,
                  headline: hotel.tileTitle.headline,
                  locationLabel: hotel.tileTitle.locationLabel,
                }}
                tileDetails={{
                  capacityLabel: hotel.tileDetails?.capacityLabel || "",
                  hasHygieneCertificate:
                    !!hotel.tileDetails?.hasHygieneCertificate,
                  ratings: hotel?.tileDetails?.ratings || [],
                  ...(hotel.tileDetails?.grade && {
                    grade: {
                      points: hotel.tileDetails.grade.points,
                      label: hotel.tileDetails.grade.label,
                    },
                  }),
                }}
                detailsUrl={hotel.detailsUrl}
                price={hotel.price}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
