import React from 'react';

export default class Conditional extends React.Component {
    state = {
        isLoading : true
    }

    render () {
        // CONDITIONAL 1
        // const isLogin = false;
        // if(isLogin) {
        //     return (
        //         <div>
        //             <h1>Anda sudah login</h1>
        //         </div>
        //     )
        // }else {
        //     return (
        //         <div>
        //             <h1>Silahkan login terlebih dahulu</h1>
        //         </div>
        //     )
        // }

        //CONDITIONAL 2
        // const isLogin = true;
        // let message = '';
        // if (isLogin) {
        //     message = 'Anda sudah login'
        // }else {
        //     message = 'Silahkan login terlebih dahulu'
        // }

        // return (
        //     <div>
        //         <h1>{message}</h1>
        //     </div>
        // )

        //SORT CIRCUIIT EVALUATION
        // const isLogin = false;

        // return (
        //     <div>
        //         {isLogin ? <h1>Anda sudah login</h1> : <h1>Silahkan login terlebih dahulu</h1>}
        //     </div>
        // )

        setTimeout(() => {
            this.setState({
                isLoading : false
            })
        }, 3000)
        return (
            <div>
                {this.state.isLoading
                    ? <h1>Loading...</h1>
                    : <h1>Selamat Datang</h1>
                }
            </div>
        )
    }
}