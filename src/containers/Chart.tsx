import React from "react";
import { BASE_URL } from "../constants/BASE_URL";
class Chart extends React.Component {
  //   const [fixtures, setFixture] = useState([]);
  //   useEffect(() => {

  componentDidMount() {
    fetch(BASE_URL + "/fixtures", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + "oB5i2lAnkoCo4dLd8pI1avSLsiee9unDteaSdrgnco",
        "Content-Type": "application/x-www-form-urlencoded",
        // "Access-Control-Allow-Origin": "http://localhost:3000",
        // "Access-Control-Allow-Credentials": "true",
      }),
    })
      .then((response) => {
        alert(JSON.stringify(response));
        console.log(response.json());
        // setFixture();
      })
      .catch((error) => {
        alert(JSON.stringify("error"));
      });
  }
  render() {
    return <div></div>;
  }
}
export default Chart;
