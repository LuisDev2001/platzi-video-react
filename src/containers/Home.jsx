import React from "react";

import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import CarouselItem from "../components/CarouselItem";

import "../assets/styles/App.scss";

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {mylist.map((list) => (
              <CarouselItem key={list.id} {...list} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((trend) => (
            <CarouselItem key={trend.id} {...trend} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {originals.map((original) => (
            <CarouselItem key={original.id} {...original} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
