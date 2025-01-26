import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
 import Python from "../../public/python.webp";
import mongoDb from "../../public/mongodb.jpg";
import react from "../../public/reactjs.png";
import ExpressJS from "../../public/express.png";
import Nodejs from "../../public/node.png";
import cpp from "../../public/cpp.png";
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {  
      id: 4,
      logo: mongoDb,
      name: "MongoDb",
    },
    {
      id: 5,
      logo: react,
      name: "ReactJS",
    },
    {
      id: 6,
      logo: ExpressJS,
      name: "ExpressJS",
    },
    {
      id: 7,
      logo: Nodejs,
      name: "NodeJS",
    },
    {
      id:8,
      logo:Python,
      name:"Python",
    },
    {
      id:9,
      logo:cpp,
      name:"C++",
    }
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 2 years of experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
