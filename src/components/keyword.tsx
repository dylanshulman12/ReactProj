import { Input } from 'semantic-ui-react'
import { getCallData,setKeyword } from '../logic src/logic';
import { useState } from 'react';

const KeywordInput = () => {
const [d, setd] = useState(getCallData().keyword);

const handleChange = (event, data) => {
    setKeyword(data.value);
    setd(getCallData().keyword);
}


return (
    <div>
        <Input 
    placeholder='Enter Keyword...'
    onChange={handleChange}
    >
        <input data-testid='my-input-1' />
        </Input>
    
        <h1>{d}</h1>

    </div>
    )
}
export default KeywordInput;
