import styled from 'styled-components'

const FooterDiv = styled.div`
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 110px;
    background-color: black;
    margin-top: 60px;

    h3{
        margin-bottom: 15px;
        color: #ffcb04;
    }

    a{
        text-decoration: none;
        color: red;
        
    }

`

const Logo = styled.img`
    max-width: 100%;
    width: 150px;

`

const SobreDiv = styled.div`
    max-width: 100%;
    width: 310px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

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