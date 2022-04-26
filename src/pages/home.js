import SearchMovie from "../components/search/search"
import RightSide from "../components/right-side";
import Container from "../main/container";
import Columns from "../main/column";
import Slider from "../components/slider";
import RandomBox from "../components/search/randomBox";


const Home = () => {

    return <Container>
        <Columns width="70%">
            <RightSide />
        </Columns>
        <Columns width="30%">

            <SearchMovie />

            <RandomBox title="Most Popular" />
            <RandomBox title="Comming Soon" />
        </Columns>

    </Container>
}

export default Home







