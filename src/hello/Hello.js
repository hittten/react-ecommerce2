function Hello(props) {
  return (
    <div>
      {props.name ? `Hello, ${props.name}!` : 'Hey, stranger'}
    </div>
  )
}

export default Hello
