import styled from 'styled-components'

const TwitchButton = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid purple;
border-radius: 0.5rem;
color: var(--bloodRed);
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
background: var(--crimsonRed);
color: var(--lightGrey);
}
`

const YouTubeButton= styled.button`
text-transform: capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--crimsonRed);
border-radius: 0.5rem;
color: var(--bloodRed);
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
background: var(--crimsonRed);
color: var(--lightGrey);
}
`
const NavButtonBars = styled.button`
padding: 0.5rem 1rem;
border-radius: 0.5rem;
border: 0.05rem solid var(--royalPurple);
background: rgba(217,217,217,.6);
`

export {TwitchButton, YouTubeButton, NavButtonBars}