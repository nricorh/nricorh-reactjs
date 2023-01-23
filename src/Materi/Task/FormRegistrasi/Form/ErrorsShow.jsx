const ShowErrors = ({errors}) => {
    return (
        <ul style={{color:'red', marginLeft:'-30px'}}>
            {
                errors.map((errors, i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}

export default ShowErrors;