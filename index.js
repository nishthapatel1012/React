import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import "./index.css"
import data from "./data"

ReactDOM.render(
  <>
    <center><h1 className="heading">Top  10 Netflix Web Series in 2023</h1></center>
    <Card 
        imgsrc={data[0].imgsrc}
        title={data[0].title}
        name={data[0].name}
        link={data[0].link}
    />
    <Card 
        imgsrc={data[1].imgsrc}
        title={data[1].title}
        name={data[1].name}
        link={data[1].link}
    />
    <Card 
        imgsrc={data[2].imgsrc}
        title={data[2].title}
        name={data[2].name}
        link={data[2].link}
    />
    <Card
        imgsrc={data[3].imgsrc}
        title={data[3].title}
        name={data[3].name}
        link={data[3].link}
    />
    <Card 
        imgsrc={data[4].imgsrc}
        title={data[4].title}
        name={data[4].name}
        link={data[4].link}
    />
    <Card 
        imgsrc={data[5].imgsrc}
        title={data[5].title}
        name={data[5].name}
        link={data[5].name}
    />
    <Card 
        imgsrc={data[6].imgsrc}
        title={data[6].title}
        name={data[6].name}
        link={data[6].link}
    />
    <Card 
        imgsrc={data[7].imgsrc}
        title={data[7].title}
        name={data[7].name}
        link={data[7].link}
    />
    <Card 
        imgsrc={data[8].imgsrc}
        title={data[8].title}
        name={data[8].name}
        link={data[8].link}
    />
    <Card 
        imgsrc={data[9].imgsrc}
        title={data[9].title}
        name={data[9].name}
        link={data[9].link}
    />
  </>,
  document.getElementById("root")
);
