// pages/index.js
import Layout from '../components/MyLayout.js';
import Cbar from '../components/Cbar.js';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const cardStyle = {
  marginTop: "3%"
}

export default function Blog() {
  return (
    <>
      <Layout>
      <h1>Girack α</h1>
        <Cbar />
        <TextField style={{ width: "100%" }} id="standard-full-width" label="メッセージ" variant="filled" />
      </Layout>
    </>
  )
}