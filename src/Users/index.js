import React, { useEffect, useState } from "react";
import { Row, Col, Table } from 'antd';

// Own components
import ContainerLayout from '../Layouts/ContainerLayout';
import PageHeaderStyled from '../Shared/Common/PageHeader';

// Utils
import { columns, expandedRowRender } from './utils';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseUsers = await response.json();
    setUsers(responseUsers);
  }

  return (
    <ContainerLayout backgroundColor="#ffffff" paddingX={2} paddingY={2} marginX={2} marginY={2}>
      <PageHeaderStyled title="Usuarios" className="ml-2 px-0 pt-0" />


      {/* {
        users.length > 0 && (
          users.map(item => {
            const { name, username, email } = item;
            console.log(item);
            return (
              <Row justify="space-between" gutter={[12, 12]}>
                <Col xs={8}>{name}</Col>
                <Col xs={8}>{username}</Col>
                <Col xs={8}>{email}</Col>
              </Row>
            )
          })
        )
      } */}

      <Row>
        <Col xs={24}>
          <Table
            rowKey={(record) => `${record.id}`}
            columns={columns}
            dataSource={users}
            size="small"
            expandable={{
              expandedRowRender,
              expandRowByClick: true,
            }}
            />
        </Col>
      </Row>
      
    </ContainerLayout>
  )
};

export default Users;