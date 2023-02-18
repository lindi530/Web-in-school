import React, { Component } from 'react';

class Box extends Component {
    state = { 
        arrays: [
            {PID: 2, condition: "primary", Heading: "Cell"},
            {PID: 3, condition: "secondary", Heading: "Cell"},
            {PID: 4, condition: "success", Heading: "Cell"},
            {PID: 5, condition: "danger", Heading: "Cell"},
            {PID: 6, condition: "warning", Heading: "Cell"},
            {PID: 7, condition: "info", Heading: "Cell"},
            {PID: 8, condition: "light", Heading: "Cell"},
            {PID: 9, condition: "dark", Heading: "Cell"},
        ]
    };

    array = [];

    render() { 
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th><button className='btn btn-success' onClick={() => this.handleAdd()}>添加</button></th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.arrays.map(solution => (
                        <tr key={solution.PID} className={"table-" + solution.condition}>
                            <td>{solution.condition}</td>
                            <td>{solution.Heading}</td>
                            <td>{solution.Heading}</td>
                            <td><button className='btn btn-danger' onClick={() => this.handleDelete(solution)}>删除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    handleAdd() {
        if(this.array.length === 0) return;

        let solutions = [...this.state.arrays];
        solutions.push(this.array[this.array.length - 1]);
        this.array.pop();
        this.setState({
            arrays: solutions
        });
    }

    handleDelete = (s) => {
        let solutions = this.state.arrays;
        for (let i = 0; i < solutions.length; i++) {
            if(solutions[i] === s) {
                solutions.splice(i, 1)
                this.array.push(s);
                break;
            }
        }
        
        this.setState({
            arrays: solutions
        });
    }
}
 
export default Box;