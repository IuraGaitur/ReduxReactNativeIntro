import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Container, View, Text } from 'native-base';
import MainScreenToolbar from "./../../components/MainScreenToolbar";
import BottomNavigationBar from "./../../components/BottomNavigationBar";


class MainScreen extends Component {

    render() {
        return (
            <Container>
<<<<<<< HEAD
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        {/* {this.props.email} */}
                    </Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
=======
                <MainScreenToolbar />
                <BottomNavigationBar
                    nflPage={<View>
                                <Text>1 page</Text>
                             </View>}
                    mblPage={<View>
                                <Text>2 page</Text>
                            </View>}
                    myNewsPage={<View>
                                <Text>3 page</Text>
                            </View>}
                    pollsPage={<View>
                                <Text>4 page</Text>
                            </View>}
                    />
>>>>>>> af534b77e15f030ec86e5a60336caf8021b9de7e
            </Container>);
    }
}

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        // email: state.authentication.user.email
=======

>>>>>>> af534b77e15f030ec86e5a60336caf8021b9de7e
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);