import React, { useEffect, useState } from "react";
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
  });
  return (
    <div className="container">
      {console.log(props)}
      <div className="row justify-content-center align-items-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="itinerary">
            <p>
              {props.location.state.flyingFrom} -{" "}
              {props.location.state.flyingTo}
            </p>
            <p>${data.Quotes[0]["MinPrice"]}</p>
            <p>
              {
                data.Carriers.find(
                  ({ CarrierId }) =>
                    CarrierId === data.Quotes[0].OutboundLeg.CarrierIds[0]
                ).Name
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
