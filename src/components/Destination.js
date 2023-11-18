import Mountain1 from "../assets/falls1.jpg";
import Mountain2 from "../assets/falls2.jpg";
import Mountain3 from "../assets/mapasobest.jpg";
import Mountain4 from "../assets/mapaso2.jpg";
import Kasili1 from "../assets/kasili1.jpg";
import Kasili2 from "../assets/kasili2.jpg";
import Lake1 from "../assets/lake3.jpg";
import Lake2 from "../assets/lake2.jpg";
import Garden1 from "../assets/garden1.jpg";
import Garden2 from "../assets/garden2.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination</h1>
      <p> Paragraph here</p>
      <DestinationData
        className="first-des"
        heading="Mapaso Hotspring"
        text="Mapaso Wellness Resort in Mainit, Surigao del Norte offers a serene escape with therapeutic hot sulfuric springs, known for their healing properties. Guests can immerse themselves in sulfuric pools, believed to alleviate conditions like asthma, rheumatism, and skin ailments. The resort is divided by a river, connected by a bridge. The secluded side features additional pools and hot spring caves, ideal for private relaxation. For an intimate family experience, some pools are available for exclusive rental, ensuring a peaceful getaway without the crowds. Discover the magic of healing and tranquility at Mapaso Wellness Resort."
        img1={Mountain3}
        img2={Mountain4}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Togonan Falls"
        text="Mainit's crown jewel, the majestic Togonan Falls, stands at a breathtaking height of 90 feet, beckoning thrill-seekers and adventure enthusiasts alike. Your journey into this breathtaking natural wonder begins with a thrilling ride along a winding mountain road that eventually leads to the falls itself. As you embark on this exhilarating adventure, you'll find yourself falling in love with the serene surroundings. Upon reaching the destination, you'll be greeted by a pristine pool suitable for both kids and adults, offering the perfect balance of adventure and relaxation. Togonan Falls invites you to immerse yourself in its beauty and discover the thrill of the journey."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des"
        heading=" Kasili Lakeside Hotel and Resort"
        text="The Mainit Kasili Lakeside Resort and Hotel, your ultimate destination for an unforgettable getaway. This hidden gem offers a diverse range of accommodations, facilities, and amenities to cater to every traveler's needs. Whether you're seeking a tranquil retreat, a place to host events, or a spot to savor delicious cuisine, Mainit Kasili Lakeside Resort and Hotel has you covered. Mainit Kasili Lakeside Resort and Hotel is not just a place to stay; it's an experience waiting to be explored. Whether you're here for business or pleasure, our resort promises a memorable stay that will leave you wanting to return again."
        img1={Kasili1}
        img2={Kasili2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mainit Lake"
        text="Lake Mainit stands as a remarkable natural wonder in the Philippines, proudly claiming its position as one of the country's deepest and largest lakes, ranking fourth in size. Below its serene surface, the lake is a thriving hub of diverse aquatic resources that serve as a lifeline for local communities, particularly through fishing, with tilapia being a common and abundant species.  This is one of the most beautiful spots in the province. Before, it wasn't really visited or popular to the tourists, but today, it's starting to become one of the tourist attractions in the area."
        img1={Lake1}
        img2={Lake2}
      />

      <DestinationData
        className="first-des"
        heading="Farmer's Garden Resort"
        text="Nestled amidst the scenic beauty of Mainit, Farmers Garden is a haven for relaxation, stress relief, and quality time with loved ones. Located on Mapaso Road in Barangay Magsaysay, this enchanting spot offers a soothing hot spring and a refreshing swimming pool. Amidst the lush greenery, you'll find tranquil corners perfect for picnics, leisurely strolls, and heartfelt bonding moments. Whether you're looking to unwind, de-stress, or strengthen your connections, Farmers Garden promises a serene escape like no other."
        img1={Garden1}
        img2={Garden2}
      />
    </div>
  );
};

export default Destination;
