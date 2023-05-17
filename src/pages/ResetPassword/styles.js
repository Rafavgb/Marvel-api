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
flex-direction: row;
align-items: center;
padding: 20px 15px;
width: 306px;
height: 57px;
left: 954px;
border: 0.7px solid #293D71;
border-radius: 10px;
background: #FFFFFF;
margin-left: 36px;
margin-top: -35px;
color: #293D71;
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
}
`

export const Button = styled.div`
margin: 36px;
margin-top: 11px;
button{
background: #C3C3C3;
border-radius: 10px; 
align-items: center;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
gap: 10px;
width: 308px;
height: 57px;
left: 954px;
top: 465px;
color: #FBFBFB;
font-family: 'Epilogue';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 25px;
text-align: right;
letter-spacing: -0.065em;
flex: none;
order: 0;
flex-grow: 0;
margin-top: -20px;
cursor: pointer;
}
img{
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
`

export const ErrorLogin = styled.div`
color:#F21A05;
margin: 36px;
margin-top:7px;
`
export const Message = styled.div`
color:#777777;
width: 310px;
height: 80px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 127%;
letter-spacing: -0.065em;
margin: 36px;
margin-top: -20px;
`