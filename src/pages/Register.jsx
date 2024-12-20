import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const  { createNewUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleSubmit=(e)=>{
       e.preventDefault();
       //get form data
       const form = new FormData(e.target);
       //console.log(form);
       const name = form.get("name");
       if(name.length < 5)
       {
        setError({...error, name: "must be more than 5 character long"});
        return;
       }
       const email = form.get("email");
       const photo = form.get("photo");
       const password = form.get("password");

       console.log({name, email, photo, password});
       
       createNewUser(email, password)
       .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user);
       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>

          <form onSubmit={handleSubmit} className="card-body">

            

          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            { 
              error.name && 
              (
                <label className="label text-xs text-rose-500">
                        {error.name} 
                </label>
              )
            }

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phot URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>



            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>
          <p className="text-center font-semibold">
              Already Have An Account ? <Link className="text-red-500" to="/auth/login">Login</Link>
          </p>
        </div>
      </div>
    );
};

export default Register;