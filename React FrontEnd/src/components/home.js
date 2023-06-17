import React, { useEffect } from "react";
import {Container,Button} from "reactstrap";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Zubair"
    },[])
    return(
        <div>
        <div class="p-5 bg-light text-center">          
          <h1 className="display-3">hello zubair</h1>
            <p>this is developed by myself</p>
            <Container>
                <Button color="primary" outline>Start Using</Button>
            </Container>
        </div>
        </div>
    )
}

export default Home;