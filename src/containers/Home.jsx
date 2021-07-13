import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";

import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

//Custom hooks

import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initalState";

const Home = () => {
  //Hooks or logics
  const initialState = useInitialState(API);

  return (
    <>
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map((list) => (
              <CarouselItem key={list.id} {...list} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((trend) => (
            <CarouselItem key={trend.id} {...trend} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {initialState.originals.map((original) => (
            <CarouselItem key={original.id} {...original} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
