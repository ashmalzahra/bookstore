const Books = (props) => {
    const {title, author} = props

    return(
            <li>
                "{title}" by {author}
                <button type="button">Remove</button>
            </li>
    )
}

export default Books