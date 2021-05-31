function ErrorMessage(props) {

  const clColor = props.clColor;
  const clNameFull = `bg-${ clColor }-300 mb-2 p-3`;
  return(
    <div className={ clNameFull }>
        { props.message }
    </div>
  )
}

export default ErrorMessage