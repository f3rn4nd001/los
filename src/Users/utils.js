import { Row, Col } from 'antd';
import styled from 'styled-components';


const Title = styled.div`
  font-weight: 800;
  letter-spacing: 0.5px;
`;

const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.3px;
`;

export const columns = [
  {
    dataIndex: 'id',
    title: 'ID Usuario',
    sorter: false,
  },
  {
    dataIndex: 'name',
    title: 'Nombre',
  },
  {
    dataIndex: 'username',
    title: 'Username'
  },
  {
    dataIndex: 'email',
    title: 'Correo'
  }
];

export const expandedRowRender = (record, index, indent, expanded) => {
  const { address, company } = record;
  const { city, suite, street } = address;
  const { catchPhrase, bs, name } = company;


  return (
    <div className="px-md-5 py-md-2">
      <Row>
        <Col>
          <Title className="mb-2 mb-sm-4">Información del usuario</Title>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Subtitle>Dirección</Subtitle>
          {street} {suite} {city}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Subtitle>Compañia</Subtitle>
          {name} {bs} {catchPhrase}
        </Col>
      </Row>
    </div>
  );
}