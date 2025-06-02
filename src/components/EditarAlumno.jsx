import React, { useState } from "react";
import {  Container,  Card,  Box,  TextField,  Grid,  Button,  FormControl,  InputLabel,
  Select,  MenuItem,  FormHelperText,  Typography,} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function EditarAlumno({ listaAlumnos, setListaAlumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscamos por su LU
  const alumnoBuscado = listaAlumnos.find((alumno) => alumno.lu === id);

  // Extraer los dí­gitos del LU para crear la parte numérica que se reutilizará al actualizar la carrera
  let valorContador = "";
  for (let i = 0; i < alumnoBuscado.lu.length; i++) {
    const char = alumnoBuscado.lu[i];
    if (char >= "0" && char <= "9") {
      valorContador += char;
    }
  }

  // Inicializamos los estados con los datos del alumno encontrado
  const [lu, setLu] = useState(alumnoBuscado.lu);
  const [nombre, setNombre] = useState(alumnoBuscado.nombre);
  const [apellido, setApellido] = useState(alumnoBuscado.apellido);
  const [curso, setCurso] = useState(alumnoBuscado.curso);
  const [email, setEmail] = useState(alumnoBuscado.email);
  const [domicilio, setDomicilio] = useState(alumnoBuscado.domicilio);
  const [telefono, setTelefono] = useState(alumnoBuscado.telefono);
  const [carrera, setCarrera] = useState(alumnoBuscado.carrera);

  // Estado para manejar los mensajes de error en las validaciones
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validErrors = {};
    if (!nombre.trim()) validErrors.nombre = "Completa este campo";
    if (!apellido.trim()) validErrors.apellido = "Completa este campo";
    if (!curso.trim()) validErrors.curso = "Completa este campo";
    if (!email.trim()) validErrors.email = "Completa este campo";
    else if (!email.includes("@"))
      validErrors.email = "Ingrese un correo válido, use @";
    if (!domicilio.trim()) validErrors.domicilio = "Completa este campo";
    if (!telefono.trim())
      validErrors.telefono = "Completa este campo con valores numéricos";
    if (!carrera.trim()) validErrors.carrera = "Completa este campo";

    if (Object.keys(validErrors).length > 0) {
      setErrores(validErrors);
      return;
    }


    const alumnoEditado = {
      lu,
      nombre,
      apellido,
      curso,
      carrera,
      email,
      domicilio,
      telefono,
    };


    const nuevoArray = listaAlumnos.map((alumno) =>
      alumno.lu === id ? alumnoEditado : alumno
    );
    setListaAlumnos(nuevoArray);

    navigate("/alumnos");
  };

  return (
    <Container maxWidth="sm" sx={{ my: 4 }}>
      <Card sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h4">Editar Alumno</Typography>
          </Box>

          <TextField
            label="LU"
            variant="outlined"
            fullWidth
            disabled
            value={lu}
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
                margin="normal"
                error={Boolean(errores.nombre)}
                helperText={errores.nombre}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Apellido"
                variant="outlined"
                fullWidth
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                margin="normal"
                error={Boolean(errores.apellido)}
                helperText={errores.apellido}
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
                const nuevaCarrera = e.target.value;
                setCarrera(nuevaCarrera);
                // Actualiza el LU: la nueva carrera con el valor numérico extraído
                setLu(nuevaCarrera + valorContador);
              }}
            >
              <MenuItem value="">
                <em>Seleccionar carrera</em>
              </MenuItem>
              <MenuItem value="INF">Ingeniería Informatica</MenuItem>
              <MenuItem value="APU">Analista Programador Universitario</MenuItem>
              <MenuItem value="MIN">Ingeniería en Minas</MenuItem>
            </Select>
            {errores.carrera && (
              <FormHelperText>{errores.carrera}</FormHelperText>
            )}
          </FormControl>

          <TextField
            label="Curso"
            variant="outlined"
            fullWidth
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            margin="normal"
            error={Boolean(errores.curso)}
            helperText={errores.curso}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            error={Boolean(errores.email)}
            helperText={errores.email}
          />

          <TextField
            label="Domicilio"
            variant="outlined"
            fullWidth
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
            margin="normal"
            error={Boolean(errores.domicilio)}
            helperText={errores.domicilio}
          />

          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            margin="normal"
            error={Boolean(errores.telefono)}
            helperText={errores.telefono}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Editar Alumno
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default EditarAlumno;


