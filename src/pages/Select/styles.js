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
margin-top:70px;
padding: 0;
}
p{
color: #081B4E;  
margin-bottom: 10px;
margin: 36px;
font-style: normal;
font-weight: 700;
font-size: 36px;
}
b{
    color: red;
}
`

export const Button = styled.div`
margin: 36px;
button{
background: #081B4E;
border-radius: 10px; 
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 8px;
width: 88px;
height: 48px;
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
float: right;
margin-top: 5px;
cursor: pointer;
}
img{
}
`

export const Form = styled.div`
position: absolute;
width: 405px;
height: 319px;
left: 893px;
top: 171px;
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
margin-top: -20px;
margin-bottom: -20px;
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
export const Selectbox = styled.div`
select{
margin: 36px;
display: flex;
align-items: center;
padding: 10px 14px;
width: 331px;
height: 44px;
background: #FFFFFF;
border: 1px solid #D0D5DD;
box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
position: fixed;
margin-top: -20px;
}
`