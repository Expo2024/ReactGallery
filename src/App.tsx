import {useState, useEffect} from "react";
import {ThemeProvider, createTheme} from "@mui/material";


import UploadImage from "./components/UploadImage";
import ImageList from "./components/imageList";

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const [images, setImages] = useState([]);

  const theme = createTheme({});

  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0]);
  };

  const handleSendFile = async () => {
    setSending(true);
    const formData = new FormData();
    formData.append("file", file!),
    await fetch("https://expotec.pythonanywhere.com/upload",{
      method: "POST",
      body: formData
    });
    setSending(false);
    setFile(null);
    getImages();
  };

  const getImages = async () => {
    const response = await fetch("http://127.0.0.1:5000/images");
    const data = await response.json();
    setImages(data.images);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <UploadImage  
        file={file} 
        sending={sending} 
        onSelectFile={handleSelectFile} 
        onSendFile={handleSendFile}
        />
        <ImageList images={images}/>
    </ThemeProvider>
  );
};

export default App;
