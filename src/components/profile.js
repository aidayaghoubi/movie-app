import styledComponents from "styled-components";
import profile from '../assets/Group 9.png'
import { useDispatch } from "react-redux";
import Store from "../store/store";

const PrfoileStyled = styledComponents.div`

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
      color:#fff;

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

`;

const Profile = () => {

    const state = Store.getState()
    console.log(state)

  return (
    <PrfoileStyled>
      <img src={profile} />
      <div>
        <p className="title">Aida Psterson</p>
        <p className="nnumber">0912456545</p>
      </div>
    </PrfoileStyled>
  );
};

export default Profile;
