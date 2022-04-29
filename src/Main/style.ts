import styled from 'styled-components'

export const Container = styled.div`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    border-radius: .25rem;
    background-color: #eee;

    .markdown {
        padding: .25rem;
        font-size: 1rem;
        background-color: #f9f9f9;
    }
    textarea { 
        resize: none;
        width: 100%;
        padding: .25rem;
        font-size: 1rem;
        border: 1px solid black;
        border-radius: .25rem;

        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
        display: flex;
    }
`