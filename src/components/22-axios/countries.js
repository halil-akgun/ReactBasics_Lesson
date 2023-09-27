import React from 'react'
import { Container, Table } from 'react-bootstrap'

const Countries = () => {
    return (
        <Container className='my-5'>
            <h1>Axios — Countries API</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bayrak</th>
                        <th>Ülke</th>
                        <th>Başkent</th>
                        <th>Nüfus</th>
                        <th>Para Birimi</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </Container>
    )
}

export default Countries