import React from "react";

function Pdf() {
    return (
        <div style={{position:'sticky', width:'100%', height:'650px'}}>
            <object
            data={require('../../docs/CV.pdf')}
            type='application/pdf'
            width='100%'
            height='100%'
            aria-label="pdf"
            />
        </div>
    )
}

export default Pdf;