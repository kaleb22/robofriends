import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSearchField } from '../actions'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        onSearchChange: (event) => dispatch( setSearchField(event.target.value) )
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( res => res.json() )
            .then( users => this.setState( { robots: users}) )
    }

    render() {
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);