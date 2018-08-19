import React, { Component } from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';

class FormAnagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newString: ""
        };
        this.checkAnagram = this.checkAnagram.bind(this);
        this.addString = this.addString.bind(this);
    }

    checkAnagram() {
        // const searchString = document.getElementById('exampleWord').value;
        let { strings } = this.props;
        console.log(strings);
    }
    addString() {
        console.log(this.state.newString);
        let { onAddWord } = this.props;
        onAddWord(this.state.newString)
        this.setState({
            newString: ""
        });
    }
    render() {

        return (
            <Form>
                <FormGroup inline>
                    <Label for="exampleSelect">Add string</Label>
                    <input type="text" className="form-control" onChange={(e) => this.setState({ newString: e.target.value })} />
                    <Button onClick={this.addString}>Add</Button>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleWord" className="mr-sm-2">Word</Label><br />
                    <input className="form-control" type="text" id="exampleWord" />
                </FormGroup>
                <Button color="primary" className="mt-4" onClick={this.checkAnagram}>Submit</Button>
            </Form>
        );
    }
}
export default FormAnagram;