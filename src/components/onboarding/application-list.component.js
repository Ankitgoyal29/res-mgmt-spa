import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ApplicationList() {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ]);

    return (
        <Container>
            <Row>
                <Col md={{ span: 9, offset: 3 }}>
                    <Row className="grid mt-5">
                        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                            <AgGridReact
                                rowData={rowData}>
                                <AgGridColumn field="make"></AgGridColumn>
                                <AgGridColumn field="model"></AgGridColumn>
                                <AgGridColumn field="price"></AgGridColumn>
                            </AgGridReact>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ApplicationList;