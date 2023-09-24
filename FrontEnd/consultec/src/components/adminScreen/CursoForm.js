import React, { useState } from 'react'
import { db } from '../../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

function CursoForm({ onSubmit }) {
  const [nombre, setNombre] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guarda los datos en Firebase
      await addDoc(collection(db, 'curso'), {
        nombre: nombre,
      });

      // Llama a la función onSubmit para ejecutarla en ButtonAdd
      if (onSubmit) {
        onSubmit(e);
      }

      // Limpia el formulario o realiza otras acciones según tus necesidades
      setNombre('');

    } catch (error) {
      console.error("Error al guardar el curso:", error);
    }
  };

  const onCancel = (e) => {
    // Llama a la función onSubmit para ejecutarla en ButtonAdd
    if (onSubmit) {
      onSubmit(e);
    }
    // Limpia el formulario o realiza otras acciones según tus necesidades
    setNombre('');
  };

  return (
    <div >
      <h3>Formulario de Curso</h3>
      <form>
        <label>
          Nombre del Curso:
          <input type="text" value={nombre} onChange={handleNombreChange} />
        </label>
        <button type="button" onClick={handleSubmit} className="bg-green-400">
          Guardar
        </button>
        <button type="button" onClick={onCancel} className="bg-red-400">
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default CursoForm;