
import AppLogo from "./AppLogo";
import { Link } from "react-router-dom"


export default function Home() {
  return (
    <div>

        <AppLogo/>

        <Link to="/Mesas"
      className="btn btn-outline-warning col btn-sm "
      >Mesas</Link>
      <Link to="/Cocina"
      className="btn btn-outline-warning col  btn-sm"
      >Cocina</Link>
    </div>
  );
}
