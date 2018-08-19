import React, { Component } from 'react';
import './App.css';
import FormAnagram from './components/form';
import ContainerContent from './components/contrainer';
import WordList from './components/word-list';
import { Container, Row, Col } from 'reactstrap';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newWord: []
    };
    this.addWord = this.addWord.bind(this);
  }
  addWord(newWord)
  {
    this.setState({
      newWord: this.state.newWord.concat([newWord])
    });
  }
  render() {
     let {newWord} = this.state;

    return (
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 3 }}>
              <FormAnagram onAddWord={this.addWord} strings={newWord}></FormAnagram>
              <WordList item={newWord}></WordList>
            </Col>
            <Col sm={{ size: 6, order: 2, offset: 3 }}>
              <ContainerContent></ContainerContent>
            </Col>
          </Row>
        </Container>

    );
  }
}

export default App;
