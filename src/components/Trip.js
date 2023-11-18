import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/2.jpg";
import Trip2 from "../assets/3.jpg";
import Trip3 from "../assets/4.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>bgvh hvs bhgs </p>
      <div className="tripcard">
        <TripData image={Trip1} heading="hdghd" text="hjsghd" />
        <TripData image={Trip2} heading="ehbd" text="ahgbbdd" />
        <TripData image={Trip3} heading="ehbd" text="ahgbbdd" />
      </div>
    </div>
  );
}

export default Trip;
