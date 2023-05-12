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
justify-content: center;
`


export const Card = styled.div`
background-color: white;
height: 450px;
width: 185px;
margin: 10px;
border-radius: 5px;
overflow: hidden;
box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);

h2, p{
padding: 5px;
text-align: justify;
}
img{
    height: 200px;
    width: 100%;
    background:no-repeat center;
    background-size: cover;
    transition: all 1s;
    background: #EAECF0;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    padding: 14px 10px;
}
&:hover{
    img{
        height:100px;
    }
}
`