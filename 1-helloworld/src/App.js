import React, { Component } from 'react'
// https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
class App extends Component {

    render() {
        return ( 
            <div className = "p-5" >
                <div className = "container" >
                    <div className = "row" >
                        <div className = "col-md-6" >
                            <div className = "card" >
                                <div className = "card-header" >
                                    Learn React 
                                </div> 
                                <div className = "card-body" >
                                    <form>
                                        <div className= "mb-4">
                                            <label htmlFor= "firstname" className = "form-label">First Name</label>
                                            <input type="text" name="firstname" id = "firstname" className="form-control"></input>
                                        </div>
                                        <div className= "mb-4">
                                            <label htmlFor= "laastname" className = "form-label">Last Name</label>
                                            <input type="text" name="lasttname" id = "lasttname" className="form-control"></input>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Lihat</button>
                                    </form> 
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