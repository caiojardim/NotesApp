import styled from 'styled-components'

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;

    header {
        display: flex;
        justify-content: space-between;

        h1 {
            font-size: 3rem;
        }

        button {
            border: none;
            border-radius: 50%;
            width: 4rem;
            height: 4rem;

            margin: auto 0;
            font-size: 3rem;
            background-color: #fff;

        }
    }
`
   
