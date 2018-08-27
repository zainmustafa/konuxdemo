import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addToPlayList } from "actions/netflix";

class Movie extends Component {
    static propTypes = {
        addToPlayList: PropTypes.func.isRequired,
        movie: PropTypes.object.isRequired
    };

    addToPlayList = () => {
        this.props.addToPlayList(this.props.movie);
    };

    render() {
        const {
            movie: { name, genre, yor, img }
        } = this.props;

        return (
            <div className="app__movie">
                <div>
                    {/* target="_blank" href={imdb} */}
                    <div className="movie__container">
                        <img src={img} alt={name} />
                        <div className="movie__bottom__background" />
                        <div className="movie__bottom__name"> {name} </div>
                        <div className="movie__bottom__genre"> {genre} </div>
                        <div className="movie__bottom__yor"> {yor} </div>
                        <div className="movie__bottom__icon">
                            <button
                                type="button"
                                className="btn btn-default"
                                onClick={this.addToPlayList}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Playlist"
                                data-delay="{&quot;show&quot;:&quot;0&quot;, &quot;hide&quot;:&quot;0&quot;}"
                            >
                                <img src="https://firebasestorage.googleapis.com/v0/b/konuxdemo.appspot.com/o/plus.png?alt=media&token=5867197e-e3e8-4cf9-9e64-1aba1d503708" alt="plus" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps() {

}

const mapDispatchToProps = {
    addToPlayList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);
