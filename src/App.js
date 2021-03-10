import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { VideoList, VideoDetail, Header } from "./components";
import "./App.css";
import youtube from "./api/youtube";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCUz7gXLDQl3J9kGnJ3tPRf2OTUjS7vtVk",
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() => {
    handleSubmit("JavaScript React");
  }, []);

  const onVideoSelect = (video) => setSelectedVideo(video);

  return (
    <Grid container spacing={10} justify="center">
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Header onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
