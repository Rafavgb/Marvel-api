import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color:#00113D;
position: absolute;
width: 100vw;
height: 100vh;
box-sizing: border-box;
img{
position: absolute;
left: 12.01%;
right: 43.23%;
top: 23.5%;
}
`
export const ContainerLogo = styled.div`
img{
position: absolute;
width: 169px;
height: 50px;
left: 106px;
top: 49px;
}

`
export const FormContainer = styled.div`
display: flex;
h2{
color:#777777;
width: 310px;
height: 40px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 127%;
letter-spacing: -0.065em;
margin: 30px;
margin-bottom: 0;
}
p{
color: #081B4E;  
margin: 36px;
font-style: normal;
font-weight: 700;
font-size: 36px;
}
b{
    color: red;
}
`
export const Form = styled.div`
position: absolute;
width: 380px;
height: 47vh;
left: 918px;
top: 167px;
background: #FFFFFF;
border-radius: 28px;
margin: 50px;
`

export const Message = styled.div`
color:#777777;
width: 310px;
height: 40px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 127%;
letter-spacing: -0.065em;
margin: 36px;
margin-bottom: 12%;
margin-top: -20px;
`