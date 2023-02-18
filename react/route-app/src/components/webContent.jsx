import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';

class WebContent extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>Web - {this.props.params.chapter}</h1>
                <div>内容</div>
                <Link to="/">返回主页</Link>
            </React.Fragment>
        );
    }
}
 
export default (props) => (
    <WebContent
        {...props}
        params={useParams()}
    />
);