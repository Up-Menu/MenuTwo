import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'


const MyBtn = styled( Button )`
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.75;
    text-transform: uppercase;
    min-width: 64px;
    padding: 5px 15px;
    border-radius: 10px;
    -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(140, 124, 240, 0.5);
    color: #8C7CF0;
    font-weight: bold;
    text-transform: none;
    padding-left: 16px;
    padding-right: 16px;
    padding: 8px 20px;
    margin: 9px;
&:hover{
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: rgba(140, 124, 240, 0.1);
    border: 1px solid #8C7CF0
}

`
const MyButton = ( props: any ) => {
    return (
        <Fragment>
            <MyBtn id={ props.id } type="primary" htmlType="submit">
                { props.children }
            </MyBtn>
        </Fragment>
    )
}

export default MyButton