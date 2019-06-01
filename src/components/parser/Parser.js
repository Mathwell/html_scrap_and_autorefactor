import { parse } from 'node-html-parser';
import React, {PureComponent} from 'react'
 
class Parser extends PureComponent{
  

render() {
    var root = parse('<ul id="list"><li>Hello World</li></ul>');
    return (
        <div>
            {root}
        </div>
    ) 
   }
}

export default Parser 