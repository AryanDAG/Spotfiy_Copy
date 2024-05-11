import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useState, useEffect } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";

//{
/* <Card 
             title="Peaceful Piano"
             description="Relax and indulge with beautiful piano pieces"
             imgUrl="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />
          <Card 
             title="Deep Focus"
             description="Keep calm and focus with this music"
             imgUrl="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />
          <Card 
             title="Instrumental Study"
             description="Focus with soft study music in the background."
             imgUrl="https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />
          <Card 
             title="Focus Flow"
             description="Up tempo instrumental hip hop beats"
             imgUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />
          <Card 
             title="Beats to think to"
             description="Focus with deep techno and tech house"
             imgUrl="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             /> */
//}

const MyMusic = () => {
  const [songData, setSongData] = useState([]);

  const getData = async () => {
    const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
    setSongData(response.data);
  };
    useEffect(() => {
    getData();
  }, []);
  return (
    <LoggedInContainer curActiveScreen={"myMusic"}>
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">My Songs</div>
      <div className="space-y-3 overflow-auto">
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={() => {}} />;
        })}
      </div>
    </LoggedInContainer>
  );
};

export default MyMusic;
