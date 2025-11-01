// src/index.js

import inquirer from 'inquirer';

// si usas "type": "module" en package.json

// Si te da error por "import", usa la versión con require:
// const inquirer = require("inquirer");

let tareas = []; // Arreglo en memoria

async function agregarTarea() {
  const respuesta = await inquirer.prompt([
    {
      type: "input",
      name: "tarea",
      message: "Escribe una nueva tarea:",
    },
  ]);

  tareas.push(respuesta.tarea);
  console.log("\nTarea agregada con éxito.\n");

  mostrarTareas();
}

function mostrarTareas() {
  console.log("Lista de tareas:");
  tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea}`);
  });
  console.log("---------------------------\n");
}

async function main() {
  console.log("Bienvenido a TODO-CLI - SENA3\n");
  await agregarTarea();
}

main();

