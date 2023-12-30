import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function Homepage() {
  return (
    <div>
   <Nav />
      <h1>WorldEat</h1>
      <Link to='/pricing'>Pricing</Link>
    </div>
  )
}
