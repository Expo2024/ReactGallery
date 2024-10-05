import { Button, Box,Typography, CircularProgress } from "@mui/material";
import {Upload} from "@mui/icons-material";
import '../../css/styles.css';

interface UploadImageProps {
    file?: File | null;
    sending?: boolean;
    onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSendFile?: () => void;
};

const UploadImage = ({ 
    file = null,
    sending = false,
    onSelectFile = () => {},
    onSendFile = () => {},
}: UploadImageProps) => {
    const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectFile(event);
    };

    const handleSendFile = () => {
        onSendFile();
    }

    return (
    <>
        <Box display="flex" justifyContent="center" marginBottom={1}>
            <input 
            id="upload-image" 
            type="file" 
            accept="image/*" 
            onChange={handleSelectFile} 
            style={{ display: "none" }} 
            />
            <label htmlFor="upload-image">
                <Button 
                
                variant="contained" 
                component="span" 
                sx={{
          backgroundColor: "#e1c066", // Color inicial
          '&:hover': {
            backgroundColor: "#ae944e", // Color al pasar el ratón
          }
        }}>
                    Seleccionar Imagen
                </Button>
            </label>
            <Button 
            disabled={!file} 
            variant="contained" 
            startIcon={<Upload/>} 
            onClick={handleSendFile}sx={{
          backgroundColor: "#e1c066", // Color inicial
          '&:hover': {
            backgroundColor: "#ae944e", // Color al pasar el ratón
          },
          ml : 1
        }}>Subir imagen {sending && <CircularProgress size={20} sx={{ml: 1}}/>}
        </Button>
        </Box>
        {file &&(
            <Typography component="p" variant="caption" textAlign="center" mt={1}>Imagen Seleccionada: {file?.name}</Typography>
        )}
    </>
    );

};

export default UploadImage