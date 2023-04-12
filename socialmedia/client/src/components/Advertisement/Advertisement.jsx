import { useState ,useEffect} from "react";
import advertise from "../../utils/advertisement";
import useFetch from "../../hooks/useFetch";

const AdUser = () => {
  const [ad, setAd] = useState({});
  const { data, error, loading } = useFetch(
    ` http://localhost:8080/api/v1/ads`
  );

  
  useEffect(() => {
      if (data?.ads) {
        const randomIndex = Math.floor(Math.random() * data?.ads.length) || 0;
      setAd(data.ads[randomIndex]);
    }
  }, [data.ads]);

  return (
    <div className="ad-user-container">
      <div className="top-ad">
        <h3>Sponsored</h3>
        <p>CreateAd</p>
      </div>
      <div className="ad-pic">
        <img src={ad?.img} alt="" />
      </div>
      <div className="low-ad">
        <div className="low-email-container">
          <h3>{ad?.title}</h3>
          <p>{ad?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AdUser;
