import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import InputRegist from "./InputRegist";

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color:'red', marginLeft:'-30px'}}>
            {
                errors.map((errors, i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}

class Registrasi extends React.Component {
    state = {
        nama: "",
        email: "",
        password: "",
        errors:[]
    }

    handleSubmit = event => {
        event.preventDefault();
        const {nama,email,password} = this.state;

        let message = [];

        if(nama.length === 0){
            message = [...message, 'Nama Tidak Boleh Kosong'];
        }

        if(email.length === 0){
            message = [...message, 'Email Tidak Boleh Kosong'];
        }

        if(password.length === 0){
            message = [...message, 'Passord Tidak Boleh Kosong'];
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email Tidak Valid']
        }

        if(password.length < 8){
            message = [...message, "Password Terlalu Pendek"]
        }

        if(message.length > 0){
            this.setState({
                errors: message
            });
        }else {
            alert(`
                Registrasi Berhasil
                Nama: ${this.state.nama}
                Email: ${this.state.email}
                Password: ${this.state.password}
            `);
            this.setState({
                errors: []
            })
        }
    }

    render(){
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }

        return(
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Registrasi</h4>
                <form onSubmit={this.handleSubmit}>
                    <InputRegist type="text" name="nama" label="Nama" onChange={value => this.setState({nama: value})} />
                    <InputRegist type="email" name="email" label="Email" onChange={value => this.setState({email: value})} />
                    <InputRegist type="password" name="password" label="Password" onChange={value => this.setState({password: value})} />
                    <br/>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        )
    }
}

export default Registrasi;