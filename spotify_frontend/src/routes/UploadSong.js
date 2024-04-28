import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";

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


const UploadSong = () => {
  const [name,setName] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [playlistUrl,setPlaylistUrl] = useState("")
  const [uploadedSongFileName, setUploadedSongFileName] = useState();
  const navigate = useNavigate();

  const submitSong = async ()=> {
    const data = {name, thumbnail, track:playlistUrl};
    const response = await makeAuthenticatedPOSTRequest("/song/create", data
); 
      if (response.err) {
        alert("Could not create song")
        return;
      }
      alert("success");
      navigate("/home");
  };

  return (
    <div className="h-full w-full flex">
      {/* {This first div will be the left panel} */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          {/* {This div is for logo} */}
          <div className="logoDiv p-6">
            <img src={spotify_logo} alt="spotify logo" width={125} />
          </div>
          <div className="py-5">
            <IconText
              iconName={"material-symbols:home"}
              displayText={"Home"}
              active
            />
            <IconText
              iconName={"material-symbols:search-rounded"}
              displayText={"Search"}
            />
            <IconText iconName={"icomoon-free:books"} 
            displayText={"Library"} 
            />
            <IconText iconName={"ic:sharp-library-music"} 
            displayText={"My Music"} 
            />
          </div>
          <div className="pt-5">
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Create Playlist"}
            />
            <IconText
              iconName={"mdi:cards-heart"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="carbon:earth-europe-africa" />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>
      {/* {This second div will be the right part(main content)} */}
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-2/3 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-1/3 flex justify-around h-full items-center">
              <TextWithHover displayText={"Upload Song"} />
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                AG
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
        <div className="text-2xl font-semibold mb-5 text-white mt-8">Upload Your Music</div>
        </div>
        <div className="w-2/3 flex space-x-3">
              <div className="w-1/2">

                <TextInput 
                label="Name" 
                labelClassName={"text-white"}
                placeholder="Name"
                value={name}
                setValue={setName}
                />
              </div>
              <div className="w-1/2">
               <TextInput 
               label="Thumbnail" 
               labelClassName={"text-white"}
               placeholder="Thumbnail"
               value={thumbnail}
               setValue={setThumbnail}
               />
              </div>
        </div>
              <div className="py-5">
              {
                uploadedSongFileName? (
                <div className="bg-white rounded-full p-3 w-1/3">
                    {uploadedSongFileName.substring(0,35)}...
                </div>
                ) : ( 
                <CloudinaryUpload 
                setUrl={setPlaylistUrl} 
                setName={setUploadedSongFileName}
                />
              )}
              </div>
              <div
                        className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
                        onClick={submitSong}
                    >
                        Submit Song
                    </div>
                </div>
            </div>
    );
};

export default UploadSong;