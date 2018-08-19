import React, {Component} from 'react';

class WordList extends Component {
    render () {
        let {item} = this.props;
        return(
            <div className="mt-2">
                ตัวอัษรที่ต้องการทำ anagram
                <ul>
                    {
                      item.map((word) => <li key={word.toString()}>{word}</li>)
                    }
                    
                </ul>
            </div>
        );
    }
}

export default WordList;