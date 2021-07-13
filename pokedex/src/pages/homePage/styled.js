import styled from 'styled-components'

const Botão = styled.button`

	box-shadow:inset 0px 1px 0px 0px #f29c93;
	background-color:#ce0100;
	border-radius:6px;
	border:1px solid #d83526;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:12px;
	font-weight:bold;
	padding:8px 15px;
	text-decoration:none;
	text-shadow:0px 1px 0px #b23e35;
	
:hover {
    background-color:#e7262c;
}
:active {
	position:relative;
	top:1px;
}  
`

const BotãoDiv = styled.div`
display: flex;
justify-content: flex-end;
padding: 0 111px;

`
export {
    Botão,
	BotãoDiv
}