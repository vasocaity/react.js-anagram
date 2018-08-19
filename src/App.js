import React, { Component } from 'react';
import './App.css';
import FormAnagram from './components/form';
import ContainerContent from './components/contrainer';
import WordList from './components/word-list';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newWord: []
    };
    this.addWord = this.addWord.bind(this);
  }
  addWord(newWord) {
    this.setState({
      newWord: this.state.newWord.concat([newWord])
    });
  }
  render() {
    let { newWord } = this.state;

    return (
      <Container>
        <Row className="mt-4">
          <Col>
            <ListGroup>
              <ListGroupItem>
                <span>
                  โจทย์: Anagram (ขโมยโจทย์พี่อูใน Code Challenge มา) <br />
                  input: array ของตัวอักษร, คำศัพท์<br />
                  output: boolean ที่บอกว่า คำศัพท์ที่เป็น input เกิดจากการเรียงของตัวอักษรใน array โดยไม่หยิบตัวซ้ำกันหรือไม่<br />
                  เช่น<br />
                  ([a, b, c, d, e], “bad”) => true<br />
                  ([a, b, c, d, e], “bat”) => false<br />
                  ([a, b, c, d, e, f, g], “cabbage”) => false<br />
                  ([a, b, c, d, e, f, g, a, b], “cabbage”) => true <br />
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 12 }}>
            <WordList item={newWord}></WordList>
            <FormAnagram onAddWord={this.addWord} strings={newWord}></FormAnagram>
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
