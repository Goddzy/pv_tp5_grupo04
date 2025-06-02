import React from "react";
import {  Container,  Card,  Box,  TextField,  Grid,  Button,  FormControl,
  InputLabel,  Select,  MenuItem,  Typography,  FormHelperText,} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function VerDetallesAlumno({ listaAlumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar el alumno cuyo LU coincide con el parámetro "id"
  const alumno = listaAlumnos.find((alumno) => alumno.lu === id);


  if (!alumno) {
    return (
      <Container maxWidth="sm" sx={{ my: 4 }}>
        <Card sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" sx={{ color: "#000" }} gutterBottom>
            No se encontró el alumno.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/alumnos")}>
            Volver a la lista
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Card sx={{ p: 4 }}>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h4" sx={{ color: "#000" }}>
            Detalles del Alumno
          </Typography>
        </Box>
        {/* Formulario en modo solo lectura */}
        <Box component="form" noValidate>
          <TextField
            label="LU"
            variant="outlined"
            fullWidth
            disabled
            value={alumno.lu}
            margin="normal"
            sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", opacity: 1 } }}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                disabled
                value={alumno.nombre}
                margin="normal"
                sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", opacity: 1 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Apellido"
                variant="outlined"
                fullWidth
                disabled
                value={alumno.apellido}
                margin="normal"
                sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", opacity: 1 } }}
              />
            </Grid>
          </Grid>

          <FormControl
            fullWidth
            margin="normal"
            disabled
            sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", opacity: 1 } }}
          >
            <InputLabel id="carrera-label" sx={{ color: "#000" }}>
              Carrera
            </InputLabel>
            <Select
              labelId="carrera-label"
              label="Carrera"
              value={alumno.carrera}
              sx={{
                color: "#000",
                "&.Mui-disabled": { opacity: 1 },
              }}
            >
              <MenuItem value="">
                <em>Seleccionar carrera</em>
              </MenuItem>
              <MenuItem value="INF">Ingeniería Informatica</MenuItem>
              <MenuItem value="APU">Analista Programador Universitario</MenuItem>
              <MenuItem value="MIN">Ingeniería en Minas</MenuItem>
            </Select>
            <FormHelperText sx={{ color: "#000" }} />
          </FormControl>

          <TextField
            label="Curso"
            variant="outlined"
            fullWidth
            disabled
            value={alumno.curso}
            margin="normal"
            sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", opacity: 1 } }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            disabled
            value={alumno.email}
            margin="normal"
            sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", opacity: 1 } }}
          />

          <TextField
            label="Domicilio"
            variant="outlined"
            fullWidth
            disabled
            value={alumno.domicilio}
            margin="normal"
            sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", opacity: 1 } }}
          />

          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            disabled
            value={alumno.telefono}
            margin="normal"
            sx={{ "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: "#000", opacity: 1 } }}
          />

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button variant="contained" onClick={() => navigate("/alumnos")}>
              Volver a la lista
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}

export default VerDetallesAlumno;
