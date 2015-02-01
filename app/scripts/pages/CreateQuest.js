var React = require('react');
var mui = require('material-ui');

module.exports = React.createClass({
    getInitialState() {
        return {
            id: '',
            name: '',
            description: '',
            experience: 10,

            latitude: 45.5,
            longitude: -73.56,

            objectives: [],

            creator: '',

            isPublic: false,

            createdOn: '',
            finishedOn: ''
        };
    },
    render() {
        return (
            <form>
                <h4>Create a quest</h4>
                <div>
                    <mui.TextField floatingLabelText='Quest Name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
                </div>
                <div>
                    <mui.TextField floatingLabelText='Quest Description' value={this.state.description} onChange={this.handleChange.bind(this, 'description')}/>
                </div>
                <div>
                    <mui.TextField floatingLabelText='Latitude' value={this.state.latitude} onChange={this.handleChange.bind(this, 'latitude')}/>
                </div>
                <div>
                    <mui.TextField floatingLabelText='longitude' value={this.state.longitude} onChange={this.handleChange.bind(this, 'longitude')}/>
                </div>
            </form>
        );
    },
    handleChange(propName, e) {
        var state = {};
        state[propName] = e.target.value;

        this.setState(state);
    }
});
