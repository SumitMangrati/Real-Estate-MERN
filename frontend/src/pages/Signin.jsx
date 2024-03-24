
import React from "react";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { signInStart , signInFail , signInSuccess } from "../redux/user/userSlice";



function Signin() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        //setLoading(true);
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin' ,{
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = await res.json();
        if(data.success === false){
            // setError(data.message);
            // setLoading(false);
            dispatch(signInFail(data.message));
            return;
        }
        // setLoading(false);
        // setError(null);
        dispatch(signInSuccess(data));
         navigate('/');
    }
    catch(err){
        dispatch(signInFail(err.message));
        // setLoading(false);
        // setError('Something went wrong');
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className=" bg-slate-700 text-white p-3 rounded-lg
        uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "loading..." : "sign in"}{" "}
        </button>
      </form>
      <div className="flex gap-1 mt-5">
        <p>don't have an account?</p>
        <Link to="/sign-up" className=" text-blue-700">
          Sign up
        </Link>
      </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}

export default Signin;
