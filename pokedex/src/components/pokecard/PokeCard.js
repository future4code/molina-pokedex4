import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0 5px 12px 5px rgba(0, 0, 0, 0.4);
    background: #f2f2f2;
    overflow: hidden;
    cursor: pointer;
    padding: 10px 0;
`
const Top = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    width: 300px;
    height: 80px;
    background: #E7262D;
`

const Avatar = styled.div`
    position: absolute;
    margin: auto;
    top: 40px;
    right: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px #151515,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,;
    background: white;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Name = styled.div`
    position: absolute;
    margin: auto;
    top: -60px;
    right: 0;
    bottom: 0;
    left: 0;
    width: inherit;
    height: 40px;
    text-align: center;

    p {
        color: black;
        text-decoration: none;
        font-weight: 700;
        font-size: 18px;
        transition: 0.2s;
            
        :hover {
            color: #E7262D;
        }
    }
`

const Info = styled.div`
    position: absolute;
    margin: auto;
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    width: inherit;
    height: 40px;
    display: flex;
`
const Type = styled.div`
    margin: 0 auto;

    h5{
        text-transform: uppercase;
        color: #E7262D;
    }
    p {
        font-size: 14px;
    }
`

const Skill = styled.div`
    position: absolute;
    margin: auto;
    bottom: 10px;
    right: 0;
    left: 0;
    width: 220px;
    height: 100px;
    
    h5{
        margin-bottom: 5px;
        font-weight: 700;
        text-transform: uppercase;
        color: #E7262D;
        text-align: center;
    }
`

const SkillItem = styled.div`
    margin: 4px 0;
    color: black;
    display: flex;
    justify-content: space-around;

    h5{
        color: black;
        font-size: 12px;
    }

    span{
        font-weight: normal;
    }
`

const PokeCard = () => {
    return (
        <div>
            <Card>
                <Top></Top>
                <Avatar>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="Squirtle"/>
                </Avatar>
                <Name>
                    <p>Squirtle</p>
                    <h6>#90</h6>
                </Name>
                <Info>
                    <Type>
                        <h5>Tipo</h5>
                        <p>Água</p>
                    </Type>
                </Info>
                <Skill>
                    <h5>Skills</h5>
                    <SkillItem>
                        <h5>HP <span>60</span></h5>                        
                        <h5>Att <span>60</span></h5>                        
                        <h5>Def <span>60</span></h5>                        
                    </SkillItem>
                </Skill>
            </Card>
        </div>
    )
}

export default PokeCard
