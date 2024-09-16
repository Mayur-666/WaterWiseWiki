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
      <div className="flex mx-auto items-center justify-center">
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
      <div className="p-4 border-2 rounded-lg mx-5 my-10 w-64 text-center shadow-lg">
        <img src={img} alt="Card" />
        <h1 className="font-semibold text-2xl">{text} </h1>
        <p className="font-thin text-justify p-1"> {para}</p>
      </div>
    )
  }

export default Features;
