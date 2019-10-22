import React  from 'react';
import Page from '../../components/layout/layout.component';
import Innovation from '../../components/innovation/innovation.component';
import Inspire from '../../components/inspirethenext/inspire.component';
import Digital from '../../components/digitalworker/digitalworker.component';

class Home extends React.Component{

render(){
    return(
        <Page>
        <Innovation/>
        <Inspire />
        <Digital/>
        </Page>


    )
}

}

export default Home;