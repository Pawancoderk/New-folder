import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

const data =   useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);

  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center bg-gray-500 text-3xl p-4 text-white font-bold">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt=""className= "w-[100px] flex m-auto rounded-md" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async()=>{
const response = await fetch("https://api.github.com/users/hiteshchoudhary")
return  response.json()
}
