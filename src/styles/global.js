import { createGlobalStyle, css } from "styled-components";

const darkMode = css`
  color:whitesmoke;
  #scrollDown::before{
    background:whitesmoke;
  }
  #Card_Content{
    background: #302f4e!important;
  }
  #Arrow{
    border-right-color:#302f4e;
  }
  #PgrMain{
    background:whitesmoke;
  }
  #External_Icons{
    color:whitesmoke;
  }
`

const lightMode = css`
  color: black;
  #scrollDown::before{
    background:black;
  }
  #Card_Content{
    background: 	#e4e5f1!important;
  }
  #Arrow{
    border-right-color:#f5f2f2;
  }
  #PgrMain{
    background:grey;
  }
  #External_Icons{
    color:black;
  }
  
`
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,360;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration:none;
    
    
  }
  *::-webkit-scrollbar{
    width: 5px;
}

*::-webkit-scrollbar-thumb{
    background-color: #ffd15c;
    border-radius: 10px;
    height: 10px;
}

*::-webkit-scrollbar-track{
    margin-top: 7px;
    margin-bottom: 7px;
}
  body {
    -webkit-font-smoothing: antialiased !important;
    
    ${props => props.darkMode ? darkMode : lightMode}
  }
  body, html, #root {
    height: 100vh;
    width: 100vw;
    scroll-behavior: smooth;
    // transition: background-color 0.5s ease-out
    
    background-color:${props => props.darkMode ? '#353353' : '#fafafa' };
    
  }

  

  h1{
    font-size: 36px;
  }

  h2{
    font-size: 20px;
  }

`
