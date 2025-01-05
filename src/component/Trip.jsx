import React, { Component } from "react";
import TripData from "./TripData";
import style from "./trip.module.css";
import Trip1 from "../assets/ladakh4.jpg";
import Trip2 from "../assets/Mussoorie1.jpg";
import Trip3 from "../assets/AyodhyaRamMandir.jpg";
class Trip extends Component {
  render() {
    return (
      <div className={style.trip}>
        <h1>Recent Trips</h1>
        <p>You can discover unique desitination using Google Maps.</p>
        <div className={style.tripcard}>
          <TripData
            image={Trip1}
            heading="Trip in Ladakh"
            text="Ladakh, located in the northernmost part of India in the union territory of Ladakh, is a mesmerizing region known for its stunning landscapes, unique culture, and spiritual significance. Nestled between the Karakoram Range to the north and the Himalayas to the south, it is often referred to as (The Land of High Passes)."
          />

          <TripData
            image={Trip2}
            heading="Trip in Mussoorie"
            text="Mussoorie, fondly known as the Queen of Hills, is a charming hill station located in the Dehradun district of Uttarakhand, India. Perched at an altitude of 2,005 meters (6,580 feet) above sea level, this picturesque town is a popular destination for nature lovers, honeymooners, and adventure enthusiasts alike. Surrounded by the Garhwal Himalayan ranges, Mussoorie offers breathtaking views, colonial charm, and a tranquil escape from bustling city life."
          />
          <TripData
            image={Trip3}
            heading="Trip in Ayodhya"
            text="Ayodhya, located on the banks of the Sarayu River in the Faizabad district of Uttar Pradesh, India, is one of the most revered cities in Hinduism. Known as the birthplace of Lord Rama, the seventh incarnation of Vishnu, it holds immense historical, cultural, and spiritual significance. The city is also considered one of the Sapta Puri—the seven holy pilgrimage centers in Hinduism."
          />
        </div>
      </div>
    );
  }
}
export default Trip;
