import React from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { Modal, Button, Icon } from "semantic-ui-react";
import FormatoMantenimiento from "./FormatoMantenimiento/FormatoMantenimiento";
import FormatoEvento from "./FormatoEvento/FormatoEvento";
import "./FormatoPdf.scss";
/* global jsPDF */

export default function FormatoPdf(props) {
    const { abrir, cerrarModal, tipo, data } = props;

    const generarPdf = () => {
        const input = document.getElementById('pdf-modal__contenido');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('imagen / png');
                const pdf = new jsPDF();
                pdf.fromHTML(imgData, 'PNG', 0, 0);
                pdf.output('dataurlnewwindow',"download.pdf");
            });
        ;
    }

    function printPDF() {
        var doc = new jsPDF('p', 'pt', "a4");
        var elementHTML = document.getElementById('pdf-modal__contenido');
        doc.setFontSize(2)
        
        doc.html(elementHTML, {
            html2canvas: {
                scale: 0.7
             },
            callback: function (doc) {
              doc.output('dataurlnewwindow',"download.pdf");
              doc.setFontSize(5);
            },
            x: 0,
            y: 0,
         });
    }



    return (
        <div className="pdf-modal">
            <Modal
                size="big"
                open={abrir}
                onClose={cerrarModal}
            >
                <Modal.Header>REPORTE DE SOLICITUD</Modal.Header>
                <Modal.Content scrolling>
                    <div id="pdf-modal__contenido">
                        {
                            tipo === "evento" ? 
                                <FormatoEvento data={data} />
                                : <FormatoMantenimiento data={data} />
                        }
                    </div>
                    <div className="pdf-modal__boton">
                        <Button className="boton-guindo" onClick={() => printPDF()}>
                            <Icon name='file pdf' size="large" /> Generar PDF
                        </Button>
                    </div>
                    
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={cerrarModal}>
                        cerrar
          </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}



