import React from 'react'
import classes from './TextAndForm.module.css'
import Text1 from './Text1/Text1'
import Text2 from './Text2/Text2'
import Form from './Form/Form'


const TextAndForm = (props) => {
    return (
        <div className={ classes.textAndForm }>
            <Text1/>
            <Text2/>
            <Form/>
        </div>
    )
}

export default TextAndForm