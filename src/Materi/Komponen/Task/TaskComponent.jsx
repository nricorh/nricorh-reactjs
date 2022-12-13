import React from "react";

class NameComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>Nama : {this.props.nama}</h1>
            </div>
        )
    }
}

const GenderComponent = ({gender}) => {

    return (
        <div>
            <h1>Jenis Kelamin :{gender}</h1>
        </div>
    )
}

class YearComponent extends React.Component {
    state = {
        year : 2022
    }
    render() {
        return(
            <div>
                <h1>Tahun : {this.state.year}</h1>
            </div>
        )
    }
}

export {NameComponent, GenderComponent, YearComponent};