import React from "react";

function Features() {

    const features = [
    {
      img: "/features/calculator.gif",
      text: "Water Calculators",
      para: "Analyse your water usage on the go."
    },
    {
      img: "/features/recycling.gif",
      text: "Recycling",
      para: "Rich knowledge about Water and its recycling methods."
    },
    {
      img: "/features/water-saving.gif",
      text: "Water Saving",
      para: "Methods to save and reuse water."
    },
    {
        img: "/features/global-connection.gif",
        text: "Rich Community",
        para: "Get latest knowledge and facts from vibrant community."
    }
    ]

  return (
    <div className="h-dvh p-5 w-full">
      <h1 className="mx-auto text-4xl w-fit my-3">FEATURES</h1>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
            features.map((feature, index) => (
                <Card key={index} img={feature.img} text={feature.text} para={feature.para} />
            ))
        }
      </div>
    </div>
  );
}


function Card({img, text, para}) {
    return (
      <div className="p-4 border-2 rounded-lg mx-auto my-10 w-64 text-center shadow-lg" style={{height: "23rem"}}>
        <img src={img} alt="Card" />
        <h1 className="font-semibold text-2xl">{text} </h1>
        <p className="font-thin text-justify p-1"> {para}</p>
      </div>
    )
  }

export default Features;
