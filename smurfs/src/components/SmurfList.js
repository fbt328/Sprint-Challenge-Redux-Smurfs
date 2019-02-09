import React from 'react'
import { Component} from 'react'
import { connect } from 'react-redux';
import Smurf from './Smurf'
import { getSmurfs } from '../actions'

class SmurfList extends Component {
    

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.smurfs.map(smurf => 
                 <Smurf
                    smurf={smurf}
                    key={smurf.id} />
                    )
                }
                
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList)