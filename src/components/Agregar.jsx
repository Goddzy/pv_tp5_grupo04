import React, { useState } from "react";
import {  Container,  Card,  Box,  TextField,  Grid,  Button,  FormControl,  InputLabel,
  Select,  MenuItem,  FormHelperText,} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Agregar({ listaAlumnos, setListaAlumnos, setContador, contador }) {

  const [lu, setLu] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [carrera, setCarrera] = useState("");
  const [errores, setErrores] = useState({});


  const navigate = useNavigate();

  const crearAlumno = (e) => {
    e.preventDefault();

    // Objeto para almacenar mensajes de error
    const validErrors = {};

    if (!nombre.trim()) validErrors.nombre = "Completa este campo";
    if (!apellido.trim()) validErrors.apellido = "Completa este campo";
    if (!curso.trim()) validErrors.curso = "Completa este campo";
    if (!email.trim()) {
      validErrors.email = "Completa este campo";
    } else if (!email.includes("@")) {
      validErrors.email = "Ingrese un @ para correo válido"; 
    }
    if (!domicilio.trim()) validErrors.domicilio = "Completa este campo";
    if (!telefono.trim()) validErrors.telefono = "Completa este campo con valores numericos";
    if (!carrera.trim()) validErrors.carrera = "Completa este campo";

    // Si existen errores, se actualiza el estado y se evita la continuación
    if (Object.keys(validErrors).length > 0) {
      setErrores(validErrors);
      return;
    }

    // Se crea el LU teniendo en cuenta el contador
    const nuevoLu = lu + String(contador);

    const nuevoAlumno = {
      lu: nuevoLu,
      nombre,
      apellido,
      curso,
      carrera,
      email,
      domicilio,
      telefono,
      eliminado: false //variable agregada para hacer el "soft delete"
    };

    setListaAlumnos([...listaAlumnos, nuevoAlumno]);
    setContador(contador + 1);

    // Limpiar estados y errores
    setLu("");
    setNombre("");
    setApellido("");
    setCurso("");
    setEmail("");
    setDomicilio("");
    setTelefono("");
    setCarrera("");
    setErrores({});

    navigate("/alumnos");
  };

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Card sx={{ p: 4 }}>
        <Box component="form" onSubmit={crearAlumno} noValidate>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <h2>Agregar Alumno</h2>
          </Box>
       
          <TextField
            label="LU"
            variant="outlined"
            fullWidth
            disabled
            value={`${lu}${contador}`}
            margin="normal"
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                error={Boolean(errores.nombre)}
                helperText={errores.nombre}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Apellido"
                variant="outlined"
                fullWidth
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                error={Boolean(errores.apellido)}
                helperText={errores.apellido}
                margin="normal"
              />
            </Grid>
          </Grid>

          <FormControl fullWidth margin="normal" error={Boolean(errores.carrera)}>
            <InputLabel id="carrera-label">Carrera</InputLabel>
            <Select
              labelId="carrera-label"
              label="Carrera"
              value={carrera}
              onChange={(e) => {
                setCarrera(e.target.value);
                // Se asigna el valor seleccionado a LU 
                setLu(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>Seleccionar carrera</em>
              </MenuItem>
              <MenuItem value="INF">Ingeniería Informática</MenuItem>
              <MenuItem value="APU">
                Analista Programador Universitario
              </MenuItem>
              <MenuItem value="MIN">Ingeniería en Minas</MenuItem>
            </Select>
            {errores.carrera && <FormHelperText>{errores.carrera}</FormHelperText>}
          </FormControl>

          <TextField
            label="Curso"
            variant="outlined"
            fullWidth
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            error={Boolean(errores.curso)}
            helperText={errores.curso}
            margin="normal"
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errores.email)}
            helperText={errores.email}
            margin="normal"
          />

          <TextField
            label="Domicilio"
            variant="outlined"
            fullWidth
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
            error={Boolean(errores.domicilio)}
            helperText={errores.domicilio}
            margin="normal"
          />

          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            error={Boolean(errores.telefono)}
            helperText={errores.telefono}
            margin="normal"
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Agregar Alumno
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default Agregar;

