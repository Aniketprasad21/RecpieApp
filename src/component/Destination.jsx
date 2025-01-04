import React from "react";
import style from "./destination.module.css";
import vid from "../assets/jogfall1.mp4";
import img2 from "../assets/jogfalls3.jpg";
import DestinationData from "./DestinationData";
import kedarnath from "../assets/Kedarnath img.jpg"
import KedarnathVid from "../assets/kedarnath.mp4"
const Destination = () => {
  return (
    <div className={style.destination}>
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity a lot, within a time frame</p>
      <DestinationData
      className = {style.firstdes}
        heading="Jog Falls: The Majestic Cascade of Karnataka"
        text="Jog Falls, nestled in the lush landscapes of the Shimoga district in Karnataka, is a breathtaking natural wonder and one of India’s highest waterfalls. Formed by the Sharavathi River, it plunges from a staggering height of 830 feet (253 meters), making it a crown jewel of Indian waterfalls. This segmented waterfall showcases four distinct cascades, each with its unique charm: Raja, Rani, Roarer, and Rocket. Jog Falls splits into these streams, offering a dynamic and ever-changing spectacle. Its beauty is most prominent during the monsoon season (June to September), when the river is in full spate, creating a mesmerizing misty spray and a thunderous roar."
        image={img2}
        video={vid}
      />


      <DestinationData
      className = {style.firstdesreverse}
        heading="Kedarnath Temple: A Sacred Abode in the Himalayas"
        text="Kedarnath Temple (Sanskrit: केदारनाथ मंदिर, IAST: Kedaranatha Mandira, lit. 'temple of the God of the field') is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range[1] near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon). During the winters, the vigraha (deity) of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogeneous form of Shiva, the 'Lord of Kedarkhand', the historical name of the region."
        image={kedarnath}
        video={KedarnathVid}
      />
    </div>
  );
};

export default Destination;
