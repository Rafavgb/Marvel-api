import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color:#00113D;
position: absolute;
width: 100%;
height: 100%;
img{
position: absolute;
left: 12.01%;
right: 43.23%;
top: 23.5%;
}
`
export const ContainerLogo = styled.div`
img{
    margin-bottom: 300px;
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
`

export const Text = styled.div`
margin: 34px;
margin-top: 16px;
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
margin-top: 20px;
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
background: #081B4E;
border-radius: 10px; 
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px 107px;
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
cursor: pointer;
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
span{
color:#F21A05;
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 11px;
margin-left:290px;
letter-spacing: -0.065em;
}
`