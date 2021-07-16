import styled from 'styled-components'

const FooterDiv = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 120px;
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

const SobreDiv = styled.div`
    max-width: 100%;
    width: 280px ;
    text-align: center;
`

const Logo = styled.img`
    max-width: 100%;
    width: 150px;
`

const SiteDiv = styled.div`
`

const Pokebola = styled.img`
    width: 93px;

`
const Icone = styled.span`
    font-size: 40px;
    color: white;
`


const StyledDiv = styled.div`
`

const RedeSocial = styled.div`
    display: flex;
    justify-content: space-between;
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