import { Layout, Menu, Row, Col } from "antd";
import React, { useState } from "react";
import { BarsOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const { Header, Footer, Sider, Content } = Layout;


const HeaderStyled = styled(Header)`
  background: #FFF;
  paddig: 0 2em;
`;


const MainLayout = (props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(true);


  const toggleMenuSide = () => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
        breakpoint
        style={{
          overflow: "auto",
          background: "#FFF"
        }}
      >
        <div className="px-3 py-1">
          <Link to="/">
            <img src="https://dummyimage.com/300x80/fff.png&text=+LOGO" alt="Logo React" className="img-fluid" />
          </Link>
        </div>
        <Menu mode="inline" theme="light">
          <Menu.Item>
            <Link to='/users'>
              Usuarios
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/todos'>
              Todos
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <HeaderStyled>
          <Row type="flex" justify="space-between">
            {
              collapsed ? (
                <BarsOutlined
                  className="trigger"
                  onClick={toggleMenuSide}
                  style={{ fontSize: '1.3rem' }}
                />
              ) : (

                <MenuFoldOutlined
                className="trigger"
                onClick={toggleMenuSide}
                style={{ fontSize: '1.3rem' }}
              />
              )
            }
          </Row>
        </HeaderStyled>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;