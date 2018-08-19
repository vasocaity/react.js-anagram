import React, { Component } from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';

class FormAnagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newString: "",
            isAnagram: ""
        };
        this.checkAnagram = this.checkAnagram.bind(this);
        this.addString = this.addString.bind(this);
    }

    checkAnagram() {
        const searchString = document.getElementById('exampleWord').value.split('');
        let { strings } = this.props;
        let countIndexOf = true;
        for (let i = 0; i < searchString.length; i++) {
            if (strings.findIndex(w => w === searchString[i]) < 0) {
                this.setState({
                    isAnagram: "false"
                });
                countIndexOf = false;
               // console.log(strings.findIndex(w => w === searchString[i]));
            } else {
                //get indexOf element and remove 
                const index = strings.indexOf(searchString[i]);
                strings.splice(index, 1);
            }
        }
        if (countIndexOf) {
            this.setState({
                isAnagram: "ture"
            });
        }
    }
    addString() {
        let { onAddWord } = this.props;
        onAddWord(this.state.newString)
        this.setState({
            newString: ""
        });
    }
    render() {
        let { newString } = this.state;
        return (
            <div>
                <Form>
                    <FormGroup inline>
                        <Label for="exampleSelect">ตัวอักษรในอาร์เรย์</Label>
                        <input type="text" value={newString} className="form-control" onChange={(e) => this.setState({ newString: e.target.value })}
                            maxLength="1" />
                        <Button onClick={this.addString} className="mt-2">เพิ่มตัวอักษรในอาร์เรย์</Button>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleWord" className="mr-sm-2">คำศัพท์</Label><br />
                        <input className="form-control" type="text" id="exampleWord" />
                    </FormGroup>
                    <Button color="primary" className="mt-2" onClick={this.checkAnagram}>ตรวจสอบ</Button>
                    <Button color="info" className="mt-2 ml-2" onClick={window.reload}>เริ่มใหม่</Button>

                </Form>
                <div className="mt-5"><h3>คำตอบ = {this.state.isAnagram}</h3></div>
            </div>

        );
    }
}
export default FormAnagram;