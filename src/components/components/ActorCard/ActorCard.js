import AvatarImage from "../AvatarImage/AvatarImage";
import "./ActorCard.css";

function ActorCard({ actor }) {
  return (
    <figure className="actor-card">
      <AvatarImage src={actor?.profile_path} place="actor-card" />
      <figcaption className="actor-card__caption">
        <p className="actor-card__name">{actor?.name}</p>
        <p className="actor-card__character">{actor?.character}</p>
      </figcaption>
    </figure>
  );
}

export default ActorCard;
