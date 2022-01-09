import React,{Component} from 'react';
import { variables } from './Variables.js';

export class User extends Component{

    constructor(props){
        super(props);

        this.state={
            users:[]
        }
    }

    refreshList(){
        fetch(variables.API_URL+'user')
        .then(response=>response.json())
        .then(data=>{
            this.setState({users:data});
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    render(){
        const{
            users
        }=this.state;
        return(
            <div>
                <table className="table table-striped">
                <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        mail
                    </th>
                </tr>
                </thead>
                <tbody>
                    {users.map(us=>
                        <tr key={us.Id}>
                            <td>{us.Id}</td>
                            <td>{us.Email}</td>
                        </tr>
                        )}
                </tbody>
                </table>
            </div>
        )
    }
}