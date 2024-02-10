import React, { useEffect, useReducer } from "react";

import {
  getAll,
  getAllByTag,
  getAllTags,
  search,
} from "../../services/spicyService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
//import Search from '../../components/Search/Search';
import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import Tags from "../../components/Tags/Tags";
import NotFound from "../../components/NotFound/NotFound";
import ControlledCarousel from "../../components/Slider/slider";
import classes from "./home.module.css";

const initialState = { spycies: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "SPICIES_LOADED":
      return { ...state, spycies: action.payload };
    case "TAGS_LOADED":
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { spycies, tags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    getAllTags().then((tags) =>
      dispatch({ type: "TAGS_LOADED", payload: tags })
    );

    const loadedspices = tag
      ? getAllByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();
    loadedspices.then((spycies) =>
      dispatch({ type: "SPICIES_LOADED", payload: spycies })
    );
  }, [searchTerm, tag]);

  return (
    <>
      <div className={classes.container}>
        <ControlledCarousel />
      </div>
      <div className={classes.search}>
        <Search />
      </div>

      <Tags tags={tags} />
      {spycies.length === 0 && <NotFound />}
      <Thumbnails spycies={spycies} />
    </>
  );
}
