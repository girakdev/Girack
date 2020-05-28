// pages/index.js
import Layout from '../components/MyLayout.js';
import chatWin from '../components/chatW.js';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const cardStyle = {
  marginTop: "3%"
}

/*
const PostLink = props => (
  pids.map((pid) => (
    <Card style={cardStyle}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {pid}
        </Typography>
        <Typography variant="h5" component="h2">
          2020 / {Math.floor(Math.random() * 11) + 1} / {Math.floor(Math.random() * 3) + 1}
        </Typography>
        <Typography color="textSecondary">
          カテゴリ: 記事
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/post?title=${pid}`}><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  ))
)
*/

export default function Blog() {
  return (
    <>
      <Layout>
      <h1>Girack α</h1>
        <chatWin></chatWin>
        <TextField style={{ width: "100%" }} id="standard-full-width" label="メッセージ" variant="filled" />
      </Layout>
    </>
  )
}