import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  name: string;
  animal: string;
  breed: string;
  media: Photo[];
  location: string;
  id: number;
}
const Pet: FunctionComponent<IProps> = props => {
  const { name, animal, breed, media, location, id } = props;
  // return React.createElement("div", {}, [
  // React.createElement("h1", {}, name),
  // React.createElement("h2", {}, animal),
  // React.createElement("h2", {}, breed)
  // ]);

  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  // return (
  //  <div>
  //   <h1>{name}</h1>
  //   <h2>{animal}</h2>
  //  <h2>{breed}</h2>
  // </div>
  // );
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location} `}</h2>
      </div>
    </Link>
  );
};

export default Pet;
