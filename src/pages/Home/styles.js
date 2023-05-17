import styled from "styled-components";


export const Container = styled.main`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
`
export const CardList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: end;
position: relative;

`
export const Card = styled.div`
height: 450px;
width: 185px;
margin: 8px;
border-radius: 15px;
overflow: hidden;
padding: 14px 10px;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
background: #EAECF0;

h2, p{
padding: 5px;
text-align: justify;
font-family: 'Epilogue';
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 12px;
letter-spacing: -0.03em;
color: #000000;
}
img{
    height: 200px;
    width: 100%;
    background:no-repeat center;
    background-size: cover;
    transition: all 1s;
    border-radius: 15px;
    padding: 14px 10px;
}
&:hover{
    img{
        height:100px;
    }
}
`