import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { actionCreators } from '../store/EventsStore';
import placeHolderImage from '../assets/img/bitcoin_icon.png';

import Moment from 'react-moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


class RestCallDemo extends Component<any, any> {

    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
        //const dayIndex = parseInt(this.props.match.params.dayIndex) || 0;
        const dayIndex = 1;
        this.props.requestEvents(dayIndex);
    }

    render() {
        const { t } = this.props;
        return (
            <>
                <div className="row">
                    <div className="col">
                        <h2>{t("titleRestCall")}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        API: https://api.coingecko.com/api/v3/events <br />
                        <br />
                        {renderCards(this.props)}
                    </div>
                </div>
            </>
        );
    }
}

function renderCards(props: any) {
    const { t } = props;
    return (
        <div className="card-columns">
            {props.events.map((n: any, key: any) =>
                <div key={key}>
                    <div className="card">
                        {n.screenshot.startsWith("http") &&
                            
                            <img src={n.screenshot} className="card-img-top" alt="Event Icon" ></img>
                            
                        }
                        {!n.screenshot.startsWith("http") &&
                            
                            <img src={placeHolderImage} className="card-img-top" alt="Event Icon" ></img>
                            
                        }
                        <div className="card-body">
                            <h5 className="card-title">{n.title}</h5>
                            <div className="card-text">
                                <div className="row">
                                    <div className="col">
                                        {n.url}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <a className="btn btn-outline-primary" target="_blank"
                                            href={n.website} role="button">{t("MoreWordBig")}...</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm center-block">
                                        <small className="text-muted">
                                            <FontAwesomeIcon icon={faCalendarAlt} /> <Moment format="DD.MM.YYYY" date={n.start_date} />
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            )}
        </div>
    );
}

export default connect(
    (state: any) => state.events,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(withTranslation()(RestCallDemo));
