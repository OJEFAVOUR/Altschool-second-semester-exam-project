import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Fetch = () => {
  const [data, setData] = useState();
  useEffect(() => {

    fetch("https://api.github.com/users/OJEFAVOUR/repos")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log("exam")
  console.log("DATA IS ----->>>>>", data);

  const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="head-text text-center underline text-2xl">Repositories</h2>{" "}
      <br></br>
      <div className="grid mt-10 pb-20 grid-cols-1 ml-12 sm:ml-20 sm:gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12  lg:grid-cols-3 gap-2  lg:ml-20 md:ml-10 ">
        {data ? (
          data.map((i) => {
            return (
              <div
                key={i.id}
                className="w-60 h-60 
                  hover:[box-shadow:0px_25px_80px_rgba(0,_0,_0,_0.15)]
                  mt-6 hover:cursor-pointer p-10 shadow-xl rounded-xl bg-slate-200 "
              >
                <p className="text-2xl text-left font-bold truncate">
                  {i.name}
                </p>
                <p className="text-left mt-4 mb-4">
                last update: {i.updated_at}
                </p>
                <button
                  className="card-btn rounded-sm p-2 text-white bg-blue-300"
                  onClick={() => {
                    navigate(`/repos/${i.name}`);
                  }}
                >
                  See More
                </button>
              </div>
            );
          })
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </div>
  );
};

export default Fetch;
