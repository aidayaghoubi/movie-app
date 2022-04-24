import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import logo from '../assets/Group 8.png'
import profile from '../assets/Group 9.png'

const Transition = css`

transition: 0.3s;
`
const SlowTrans = css`
transition: 0.5s;
`
const OpenBtn = styled.div`
position: absolute;
${SlowTrans};

    & .open{
        position: absolute;
        left: 17px;
        top: 6px;
        cursor:pointer;
        ${SlowTrans};
    }
    & .notOpen{
        transform:rotate(180deg);
        position: absolute;
        left: 239px;
        z-index: 99999;
        top: 6px;
        cursor:pointer;
        ${SlowTrans};

    }

`


const HeaderStyled = styled.div`
margin: 0;
padding: 0;
position: fixed;
top:0;
z-index: 999;
background-color: #fff;
width: auto;
height: 100vh;
${Transition};

& .logo{
    margin: 35px 19px;
    margin-top: 18px;
   & img{
       height:55px;
   }
}
& .profile{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #41d492;
    margin: 20px 17px;
    border-radius: 18px;

    & img{
        height: 64px;
    }

    & div{
&         color:#fff;

        & .title{
            font-size: 19px;
            padding: 0;
            margin: 0;
            margin-top: 24px;
        }
        & .nnumber{
            font-size: 15px;
            color: white;
            margin-top: 6px;
        }
    }
}

& .close{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 91%;
    margin-top: 21px;
    cursor:pointer;
}

    & ul{
        padding: 0;
        margin: 0 19px;
        height: 61vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        list-style: none;
      

        & li{
            width: 100%;
            margin-bottom: 24px;
            
            & a{
                text-decoration: none;
                font-size: 22px;
                margin-right: 20px;
                color: #646765;
                padding: 16px 0px;
                margin-left: 12px;
                border-radius: 18px;
                width: 94%;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: start;
                -webkit-justify-content: flex-start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                ${Transition};

                &:hover{
                    background-color: #C3F7DC;
                    color:#000;

                    & span svg path{
                        fill:#41D492;
                    }
                    & span svg ellipse{
                        fill:#41D492;
                    }
                    
                }
            }
                
                & span{
                    margin: 0 14px;
                    ${Transition};
                }
                & span svg path {
                    ${Transition};
                }
                & span svg ellipse{
                    ${Transition};
                }
            }
        
        }
    }
& .active{
    background-color: #C3F7DC;
    color:#000;

    & span svg path{
        fill:#41D492;
    }
    & span svg ellipse{
        fill:#41D492;
    }

}
`

const Header = () => {

    const [active, setActive] = useState('home');
    const [close, SetClose] = useState(true);

    const onLinkClickHandler = (props) => {
        setActive(props)
        SetClose(true)
    }

    const onCloseHandler = () => {
        SetClose(!close);
    }

    // const container = document.querySelector("#root > div:last-child");
    const container = document.querySelector("#root > div:nth-child(3)");
    const body = document.getElementsByTagName("body");

    useEffect(()=>{
        setTimeout(()=>{
            if(!close){
                container.style.transform="translate(230px , 0)";
                document.body.style.overflowX="hidden";
                
            }else{
                container.style.transform="translate(0px , 0)";
                document.body.style.overflowX="auto";
            }
        } , 50)
   
    }, [close])



    return <>
        {/* {
            close && <OpenBtn className="open" onClick={onCloseHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26.988" height="17.429" viewBox="0 0 26.988 17.429">
                    <g id="fi-br-align-center" transform="translate(0 -3)">
                        <path id="Path_10" data-name="Path 10" d="M1.687,6.374H25.3A1.687,1.687,0,0,0,25.3,3H1.687a1.687,1.687,0,1,0,0,3.374Z" transform="translate(0 0)" fill="#646765" />
                        <path id="Path_13" data-name="Path 13" d="M25.3,13H1.687a1.687,1.687,0,1,0,0,3.374H25.3A1.687,1.687,0,0,0,25.3,13Z" transform="translate(0 -2.972)" fill="#646765" />
                        <path id="Path_738" data-name="Path 738" d="M25.3,13H1.687a1.687,1.687,0,1,0,0,3.374H25.3A1.687,1.687,0,0,0,25.3,13Z" transform="translate(0 4.056)" fill="#646765" />
                    </g>
                </svg>
            </OpenBtn>
        } */}

        <OpenBtn onClick={onCloseHandler}>
            <div className={close ? "open" : "notOpen"}>
                {close ? <svg xmlns="http://www.w3.org/2000/svg" width="26.988" height="17.429" viewBox="0 0 26.988 17.429">
                    <g id="fi-br-align-center" transform="translate(0 -3)">
                        <path id="Path_10" data-name="Path 10" d="M1.687,6.374H25.3A1.687,1.687,0,0,0,25.3,3H1.687a1.687,1.687,0,1,0,0,3.374Z" transform="translate(0 0)" fill="#646765" />
                        <path id="Path_13" data-name="Path 13" d="M25.3,13H1.687a1.687,1.687,0,1,0,0,3.374H25.3A1.687,1.687,0,0,0,25.3,13Z" transform="translate(0 -2.972)" fill="#646765" />
                        <path id="Path_738" data-name="Path 738" d="M25.3,13H1.687a1.687,1.687,0,1,0,0,3.374H25.3A1.687,1.687,0,0,0,25.3,13Z" transform="translate(0 4.056)" fill="#646765" />
                    </g>
                </svg> : <svg onClick={onCloseHandler} xmlns="http://www.w3.org/2000/svg" width="16.596" height="16.596" viewBox="0 0 16.596 16.596">
                    <g id="fi-br-cross" transform="translate(0 -20.157)">
                        <path id="Path_102" data-name="Path 102" d="M9.765,8.3l6.528-6.527A1.038,1.038,0,0,0,14.825.3h0L8.3,6.832,1.771.3A1.038,1.038,0,0,0,.3,1.771L6.832,8.3.3,14.825a1.038,1.038,0,0,0,1.467,1.467L8.3,9.765l6.527,6.528a1.038,1.038,0,1,0,1.467-1.467Z" transform="translate(0 20.157)" fill="#646765" />
                    </g>
                </svg>}
            </div>
        </OpenBtn>

        <HeaderStyled className="closee"
            style={{ transform: close ? "translate(-250%,0)" : "translate(0px ,0px)" }}>
            <div className="close">
                {/* <svg onClick={onCloseHandler} xmlns="http://www.w3.org/2000/svg" width="16.596" height="16.596" viewBox="0 0 16.596 16.596">
                    <g id="fi-br-cross" transform="translate(0 -20.157)">
                        <path id="Path_102" data-name="Path 102" d="M9.765,8.3l6.528-6.527A1.038,1.038,0,0,0,14.825.3h0L8.3,6.832,1.771.3A1.038,1.038,0,0,0,.3,1.771L6.832,8.3.3,14.825a1.038,1.038,0,0,0,1.467,1.467L8.3,9.765l6.527,6.528a1.038,1.038,0,1,0,1.467-1.467Z" transform="translate(0 20.157)" fill="#646765" />
                    </g>
                </svg> */}
            </div>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="profile">
                <img src={profile} />
                <div>
                    <p className="title">Aida Psterson</p>
                    <p className="nnumber">0912456545</p>
                </div>
            </div>
            <ul>
                <li>
                    <Link
                        onClick={() => onLinkClickHandler("home")}
                        className={active === "home" ? "active" : ""}
                        to={'/home'}>
                        <span>
                            <svg id="fi-sr-home" xmlns="http://www.w3.org/2000/svg" width="19.368" height="19.356" viewBox="0 0 19.368 19.356">
                                <path id="Path_555" data-name="Path 555" d="M194.421,319.841A2.421,2.421,0,0,0,192,322.262V327.1h4.842v-4.842A2.421,2.421,0,0,0,194.421,319.841Z" transform="translate(-184.737 -307.748)" fill="#c4d3cc" />
                                <g id="Group_5" data-name="Group 5" transform="translate(0 0)">
                                    <path id="Path_556" data-name="Path 556" d="M13.719,14.674v4.842h3.228a2.421,2.421,0,0,0,2.421-2.421V9.734a1.614,1.614,0,0,0-.454-1.123L12.056,1.2a3.228,3.228,0,0,0-4.562-.18q-.093.086-.18.18L.469,8.608A1.614,1.614,0,0,0,0,9.746v7.349a2.421,2.421,0,0,0,2.421,2.421H5.649V14.674a4.035,4.035,0,1,1,8.07,0Z" transform="translate(0 -0.16)" fill="#c4d3cc" />
                                    <path id="Path_557" data-name="Path 557" d="M194.421,319.841A2.421,2.421,0,0,0,192,322.262V327.1h4.842v-4.842A2.421,2.421,0,0,0,194.421,319.841Z" transform="translate(-184.737 -307.748)" fill="#c4d3cc" />
                                </g>
                            </svg>
                        </span>
                        Home</Link>
                </li>
                <li>
                    <Link
                        onClick={() => onLinkClickHandler("favorite")}
                        className={active === "favorite" ? "active" : ""}
                        to={'/favorite'}>
                        <span>
                            <svg id="fi-sr-following" xmlns="http://www.w3.org/2000/svg" width="19.748" height="19.852" viewBox="0 0 19.748 19.852">
                                <ellipse id="Ellipse_77" data-name="Ellipse 77" cx="5.097" cy="5.097" rx="5.097" ry="5.097" transform="translate(2.146 0)" fill="#c4d3cc" />
                                <path id="Path_537" data-name="Path 537" d="M7.4,298.69a7.414,7.414,0,0,0-7.4,7.4.823.823,0,0,0,.823.823H13.987a.823.823,0,0,0,.823-.823A7.414,7.414,0,0,0,7.4,298.69Z" transform="translate(0 -287.065)" fill="#c4d3cc" />
                                <path id="Path_538" data-name="Path 538" d="M346.223,168.024a1.734,1.734,0,0,0-1.646,1.81,1.653,1.653,0,1,0-3.291,0c0,1.423,1.856,3.091,2.781,3.833a.816.816,0,0,0,1.02,0c.925-.74,2.781-2.41,2.781-3.833A1.733,1.733,0,0,0,346.223,168.024Z" transform="translate(-328.123 -161.439)" fill="#c4d3cc" />
                            </svg>
                        </span>
                        Favorite</Link>
                </li>
                <li>
                    <Link
                        onClick={() => onLinkClickHandler("last-checked")}
                        className={active === "last-checked" ? "active" : ""}
                        to={'/last-checked'}>
                        <span>
                            <svg id="fi-sr-eye" xmlns="http://www.w3.org/2000/svg" width="19.754" height="15.378" viewBox="0 0 19.754 15.378">
                                <ellipse id="Ellipse_76" data-name="Ellipse 76" cx="3.291" cy="3.291" rx="3.291" ry="3.291" transform="translate(6.586 4.398)" fill="#c4d3cc" />
                                <path id="Path_518" data-name="Path 518" d="M19.147,8.22A10.9,10.9,0,0,0,9.873,2.655,10.9,10.9,0,0,0,.6,8.22a4.038,4.038,0,0,0,0,4.247,10.9,10.9,0,0,0,9.274,5.565,10.9,10.9,0,0,0,9.274-5.565A4.038,4.038,0,0,0,19.147,8.22Zm-9.274,7.06a4.937,4.937,0,1,1,4.937-4.937A4.937,4.937,0,0,1,9.873,15.281Z" transform="translate(0.004 -2.655)" fill="#c4d3cc" />
                            </svg>
                        </span>
                        Last Checked</Link>
                </li>
                <li>
                    <Link
                        onClick={() => onLinkClickHandler("watch-list")}
                        className={active === "watch-list" ? "active" : ""}
                        to={'/watch-list'}>
                        <span>
                            <svg id="fi-sr-checkbox" xmlns="http://www.w3.org/2000/svg" width="19.75" height="19.75" viewBox="0 0 19.75 19.75">
                                <path id="Path_461" data-name="Path 461" d="M15.636,0H4.115A4.12,4.12,0,0,0,0,4.115V15.636a4.12,4.12,0,0,0,4.115,4.115H15.636a4.12,4.12,0,0,0,4.115-4.115V4.115A4.12,4.12,0,0,0,15.636,0Zm.823,6.649L8.843,14.264a1.646,1.646,0,0,1-2.328,0h0L3.292,11.041A.825.825,0,0,1,4.458,9.875L7.68,13.1,15.3,5.482a.823.823,0,0,1,1.162,1.166Z" fill="#c4d3cc" />
                            </svg>
                        </span>
                        Watch List</Link>
                </li>
            </ul>

        </HeaderStyled>
    </>
}

export default Header