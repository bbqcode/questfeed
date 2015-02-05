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

            isPublic: true,

            createdOn: '',
            finishedOn: ''
        };
    },
    render() {
        return (
            <form action="/quests/create" method="post" onSubmit={this.handleSubmit}>
                <h4>Create a quest</h4>
                <div className="row">
                    <div className="large-12 columns">
                        <label>Quest Name
                            <input type="text" placeholder="Quest Name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="large-12 columns">
                        <label>Quest Description
                            <textarea placeholder="Quest Description" value={this.state.description} onChange={this.handleChange.bind(this, 'description')}/>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="small-6 columns">
                        <label>Latitude
                            <input type="text" placeholder="Latitude" value={this.state.latitude} onChange={this.handleChange.bind(this, 'latitude')}/>
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <label>Longitude
                            <input type="text" placeholder="Longitude" value={this.state.longitude} onChange={this.handleChange.bind(this, 'longitude')}/>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="large-12 columns">
                        <input id="cq-isPublic" type="checkbox" checked={this.state.isPublic} onChange={this.handleChange.bind(this, 'isPublic')}/><label htmlFor="cq-isPublic">Is public</label>
                    </div>
                </div>

                <div className="row">
                    <div className="large-12 columns">
                        <ul className="button-group right">
                            <li><button className="button small secondary">Clear</button></li>
                            <li><button className="button small success" type="submit">Save</button></li>
                        </ul>
                    </div>
                </div>
            </form>
        );
    },
    handleChange(propName, e) {
        var state = {};
        var newVal = null;

        if (e.target.type === 'checkbox') {
            newVal = e.target.checked;
        } else {
            newVal = e.target.value;
        }
        state[propName] = newVal;

        this.setState(state);
    },
    handleSubmit: function () {

    }
});
