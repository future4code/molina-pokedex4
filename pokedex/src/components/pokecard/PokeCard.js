import React from 'react'
import { Card, Top, Avatar, Name, Info, Type, Skill, SkillItem } from './styled'

const PokeCard = ({img, alt, name, numero, tipo, hp, att, def}) => {
    return (
        <div>
            <Card>
                <Top></Top>
                <Avatar>
                    <img src={img} alt={alt}/>
                </Avatar>
                <Name>
                    <p>{name}</p>
                    <h6>#{numero}</h6>
                </Name>
                <Info>
                    <Type>
                        <h5>Tipo</h5>
                        <p>{tipo}</p>
                    </Type>
                </Info>
                <Skill>
                    <h5>Skills</h5>
                    <SkillItem>
                        <h5>HP <span>{hp}</span></h5>                        
                        <h5>Att <span>{att}</span></h5>                        
                        <h5>Def <span>{def}</span></h5>                        
                    </SkillItem>
                </Skill>
            </Card>
        </div>
    )
}

export default PokeCard
