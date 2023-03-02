const RemoveButton = (props) => {
    const {onClick} = props

    return(
    <button type="button" onClick={onClick}>
        Remove
    </button>
    )
}

export default RemoveButton;