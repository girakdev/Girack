// pages/index.js
import Layout from '../components/MyLayout.js';
import Cbar from '../components/Cbar.js';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container } from '@material-ui/core';
import Chat from'../components/chat';

const cardStyle = {
  marginTop: "3%"
}

export default function Blog() {
  return (
    <>
      <Layout>
      <h1>Girack α</h1>
        <Cbar />
        <Container fluid>
        <Chat activeUser={"user"} />
        </Container>
      </Layout>
    </>
  )
}