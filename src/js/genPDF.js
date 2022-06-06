const pdf = require("html-pdf");
const fs = require("fs");
const { format } = require("path");

const ubicacion = require.resolve(
  "/home/xavier/Documentos/Programacion/Node/ejercicio2/src/views/index.html"
);
let contenidoHtml = fs.readFileSync(ubicacion, "utf8");
const valorPasadoPorNode = "Soy un valor pasado desde JavaScript";
contenidoHtml = contenidoHtml.replace("{{valor}}", valorPasadoPorNode);

const options = {
  format: "A4",
  header: {
    height: "60px",
  },
  footer: {
    height: "22mm",
  },
  //path: "/home/xavier/Documentos/Programacion/Node/ejercicio2/src/pdfs/pacientes.pdf",
};

pdf
  .create(contenidoHtml, options)
  .toFile(
    "/home/xavier/Documentos/Programacion/Node/ejercicio2/src/pdf/pacientes.pdf",
    (error) => {
      if (error) {
        console.log("Error creando PDF: " + error);
      } else {
        console.log("PDF creado correctamente");
      }
    }
  );
