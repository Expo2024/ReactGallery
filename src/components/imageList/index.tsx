import {Container, Grid2} from "@mui/material";

interface Image {
    secure_url: string;
    public_id: string;
}
interface ImageListProps{
    images?: Image[];
}

const ImageList = ({images=[]}: ImageListProps) =>{
    return(
        <Container maxWidth="lg"  style={{
            display: "flex", 
            justifyContent: "center", 
            padding: "0 16px", 
            margin: "0 auto", 
            width: "100%"
        }}>
            <Grid2 container spacing={2}>
                {images?.map((image) => (
                <Grid2 key={image.public_id} size={{ xs: 12,sm:6, md:4 }}>
                    <img
                        src={image.secure_url}
                        alt={image.public_id}
                        style={{width:"90%", height:"90%", objectFit:"contain", display:"flex",justifyContent:"center", marginTop:"8px"}}
                    />
                </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default ImageList;