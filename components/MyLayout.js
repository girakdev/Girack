import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '70%',
  border: '1px solid #DDD',
  borderRadius: "4px"
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}
