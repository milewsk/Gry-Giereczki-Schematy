import Button from "../../UI/Button/Button";
import { Component } from "react";
import React, { Fragment} from "react";
import classes from './EditProfile.module.css'

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.nickRef = React.createRef()
        this.nameRef = React.createRef()
        this.lastnameRef = React.createRef()
        this.descriptionRef = React.createRef()

    }
    state = { 
        //TU POWINNY BYC DANE Z BAZKI
        inputNick: "nick",
        inputName: "name",
        inputLastname: "lastname",
        inputDescription: "description",
    }

    nick = this.state.inputNick
    name = this.state.inputName
    lastname = this.state.inputLastname
    description = this.state.inputDescription

    inputUpdate = e => {
        this.nick = this.nickRef.current.value
        this.name = this.nameRef.current.value
        this.lastname = this.lastnameRef.current.value
        this.description =this.descriptionRef.current.value 
        this.setState({
            nick: this.nickRef.current.value,
            name: this.nameRef.current.value,
            lastname: this.lastnameRef.current.value,
            description: this.descriptionRef.current.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
    
        const enteredNick = this.nickRef.current.value;
        const enteredName = this.nameRef.current.value;
        const enteredLastname = this.lastnameRef.current.value;
        const enteredDescription = this.descriptionRef.current.value;

        //TU POSTA TRZEBA ZROBIC
    }

    // fetch("https://localhost:44342/api/", {
    //   method: "GET",
    //   body: JSON.stringify({
    //     Nick: enteredUsername,
    //   }),
    // })
    //   .then((response) => {
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
    render() {
        return (
            <Fragment>
                <section className="row">
                    <form onSubmit={this.submitHandler}> 
                        <div  className={`${classes.control} col-12 mx-auto col-md-8 col-lg-5 col-xl-4 my-2`}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.nick}
                                    id="nick"
                                    placeholder={this.state.inputNick}
                                    onChange={this.inputUpdate}
                                    ref={this.nickRef}
                                />
                                <label htmlFor="nick">Nick</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.name}
                                    id="name"
                                    placeholder={this.state.inputName}
                                    onChange={this.inputUpdate}
                                    ref={this.nameRef}
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.lastname}
                                    id="lastname"
                                    placeholder={this.state.inputLastname}
                                    onChange={this.inputUpdate}
                                    ref={this.lastnameRef}
                                />
                                <label htmlFor="lastname">Lastname</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.description}
                                    id="description"
                                    placeholder={this.state.inputDescription}
                                    onChange={this.inputUpdate}
                                    ref={this.descriptionRef}
                                />
                                <label htmlFor="description">Description</label>
                            </div>
                            <div className="text-center">
                                <Button type="submit">
                                Zapisz
                                </Button>
                            </div>
                        </div>
                    </form>
                </section>
            </Fragment>
        );
    }
}

export default EditProfile;
