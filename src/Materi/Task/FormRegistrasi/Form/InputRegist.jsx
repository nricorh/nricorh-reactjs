import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";

const InputRegist = ({label, type, name, onChange}) => {
    return (
        <div>
            <Form.Label htmlFor="disabledTextInput">{label}</Form.Label>
            <Form.Control type={type} name={name} onChange={e => onChange(e.target.value)} />
            
        </div>
    )
}

export default InputRegist;