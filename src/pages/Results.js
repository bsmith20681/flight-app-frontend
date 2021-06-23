import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

const Results = (props) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var options = {
      method: "GET",
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${props.location.state.flyingFrom}-sky/${props.location.state.flyingTo}-sky/2021-09-01`,
      params: { inboundpartialdate: "2021-12-01" },
      headers: {
        "x-rapidapi-key": "6548d07ae3msh59978a08b6317aep162abajsnf71503eccb2d",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log("handling the form");
  }, []);
  return (
    <div className="container">
      {console.log(data)}
      <div className="row justify-content-center align-items-center">
        {loading ? (
          <Loading />
        ) : data.Quotes.length === 0 ? (
          <div>
            <p>no flights are avaliable</p>
            <Link to="/">Search Another Flight</Link>
          </div>
        ) : (
          data.Quotes.map((flightInfo) => (
            <div className="itinerary">
              <p>
                {props.location.state.flyingFrom} -{" "}
                {props.location.state.flyingTo}
              </p>
              <p>${flightInfo["MinPrice"]}</p>
              <p>
                {
                  data.Carriers.find(
                    ({ CarrierId }) =>
                      CarrierId === flightInfo.OutboundLeg.CarrierIds[0]
                  ).Name
                }
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Results;
