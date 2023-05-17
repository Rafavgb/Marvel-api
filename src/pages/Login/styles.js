import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color:#00113D;
position: absolute;
width: 100vw;
height: 100vh;
box-sizing:border-box;
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

export const Input = styled.div`
input{
box-sizing: border-box;
display: flex;
align-items: center;
padding: 20px 15px;
width: 306px;
height: 57px;
left: 954px;
border: 0.7px solid #293D71;
border-radius: 10px;
background: #FFFFFF;
margin-left: 36px;
margin-top: 20px;
color: #293D71;
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
}
`

export const Form = styled.div`
position: absolute;
width: 380px;
height: 433px;
left: 918px;
top: 167px;
background: #FFFFFF;
border-radius: 28px;
margin: 50px;
span{
color:#F21A05;
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 11px;
margin-left: 250px;
letter-spacing: -0.065em;
}
`

export const ErrorLogin = styled.div`
color:#F21A05;
margin: 36px;
margin-top: 2px;
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
margin-top: -30px;
margin-bottom: -30px;
`