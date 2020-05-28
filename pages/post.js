// pages/post.js
import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import Cbar from '../components/Cbar.js'

const Content = withRouter(props => (
  <>
    {/* props.router.query で ?title={hoge}を取得できます*/}
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </>
  
))

const Page = props => (
  <Layout>
    <Content />
  </Layout>

)

export default Page