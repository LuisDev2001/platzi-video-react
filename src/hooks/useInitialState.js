//HOOKS CUSTOMS

import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(async () => {
    const response = await fetch(API);
    const data = await response.json();
    setVideos(data);
  }, []);

  return videos;
};

export default useInitialState;
