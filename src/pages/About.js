import { useState, useEffect } from "react"; 
import axios from "axios";
import WaveLoader from "../util/loader/waveloader";
import Helmet from "react-helmet";
import Users from "./about/users";
import serviceURL from "../util/url";
const About = () => {
    const [user, setUsers] = useState([]);
    useEffect(() => {
        axios.post(`${serviceURL}getuser.php`).then((res) => {
          // console.log(res.data);
          setUsers(res.data);
        })
      }, []);
    return( 
        <><div className="about-section">
            <Helmet>
            <title>About</title>
            </Helmet>
            <h1>About Us</h1>
            <p>Emergency Vehicles Lighting And Sound solution center </p>
            <p>We manufactering the all light products for emergency vehicles</p>
        </div>
          {user.length? <Users data={user} /> : <WaveLoader />}
          </>
          );
}
// <Users data={user} />
export default About;