import { Link } from "react-router-dom";
function Loginpage (){
return(
    <div>
        <h1>HOME</h1>
        <Link to= "/register">
        <button> IR A REGISTRO</button>
        </Link>
<Link to= "/forgot">
<button>OLVIDE MI CONTRASENIA</button>
</Link>
<Link to= "/hooks">
<button>ir a Hooks</button>
</Link>
</div>      
        
);

}
export default Loginpage;