import React, { Component } from 'react'
// https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
class App extends Component {
    constructor(){
        super()
        this.state = {
            firstname : '',
            lastname : '',
            name : ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            name:`${this.state.firstname} ${this.state.lastname}`
        })
        // console.log(this.state)
        this.state.firstname = ''
        this.state.lastname = ''
    }
    render() {
        const {name} = this.state
        return ( 
            <div className = "p-5" >
                <div className = "container" >
                    <div className = "row" >
                        <div className = "col-md-4" >
                            <div className = "card" >

                                <div className = "card-header" >
                                    Learn React 
                                </div> 
                                <div className = "card-body" >
                                    <form onSubmit={this.submitHandler}>
                                        <div className= "mb-4">
                                            <label htmlFor= "firstname" className = "form-label">First Name</label>
                                            <input type="text" value={this.state.firstname} onChange={this.changeHandler} name="firstname" id = "firstname" className="form-control"></input>
                                        </div>
                                        <div className= "mb-4">
                                            <label htmlFor= "lastname" className = "form-label">Last Name</label>
                                            <input type="text" value={this.state.lastname} onChange={this.changeHandler} name="lastname" id = "lastname" className="form-control"></input>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Lihat</button>
                                    </form> 
                                </div> 
                                <div className="card-footer">
                                    My Name is <b>{name ? name : '. . .'}</b> 
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
        )
    }
}
export default App