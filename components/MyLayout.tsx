import Header from './Header'

const layoutStyle = {
  margin: 0,
  padding: 10,
  marginLeft: 'auto',
  marginRight: 'auto',
  border: '1px solid #DDD',
  borderRadius: "4px"
}

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}

export default Layout;
