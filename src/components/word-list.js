import React, {Component} from 'react';

class WordList extends Component {
    render () {
        let {item} = this.props;
        return(
            <div className="mt-2">
               array ของตัวอักษร
                <ul>
                    {
                      item.map((word,i) => <li key={i}>{word}</li>)
                    }
                    
                </ul>
            </div>
        );
    }
}

export default WordList;