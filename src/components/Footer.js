const Footer = ({ items }) => {
  return (
    <footer>
      <h5>{items.length} checklist item{items.length !== 1 ? 's' : ''}</h5>
    </footer>
  )
}

export default Footer