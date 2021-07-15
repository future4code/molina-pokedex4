import styled from 'styled-components'

const FooterDiv = styled.div`
height: 250px;
color: white;
display: flex;
justify-content: space-around;
padding: 0 35px;
background-color: black;
margin-top: 60px;


h3{
    margin-bottom: 11px;
    color: #ffcb04;
}

a{
    text-decoration: none;
    color: red;
    
}

`

const Logo = styled.img`
margin-top: 75px;
height: 53px;
width: 149px;
margin-left: -9px;
`

const SobreDiv = styled.div`
height: 140px;
width: 310px ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;

`

const Pokebola = styled.img`
width: 93px;

`
const Icone = styled.span`
font-size: 40px;
color: white;
`

const RedeSocial = styled.div`
display: flex;
justify-content: space-between;

`

const SiteDiv = styled.div`
    margin: auto;

`

const StyledDiv = styled.div`
    margin: 70px;
`


export {
    FooterDiv,
    SobreDiv,
    Logo,
    Pokebola,
    Icone,
    RedeSocial,
    SiteDiv,
    StyledDiv

}