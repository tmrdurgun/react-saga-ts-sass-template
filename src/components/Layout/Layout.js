import React, { Component, Suspense } from 'react';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../routes';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.routesList = routes;
  }

  render() {
    return (
      <Container fluid id="react-no-print" style={{ padding: 0 }}>
            <div className="body-wrapper">
              <div className="content">
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                        {this.routesList.map((route, idx) => (route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={(props) => (
                              <route.component {...props} {...this.props} />
                            )}
                          />
                        ) : (null)))}
                        <Redirect from="/" to="/todo" />
                      </Switch>
                </Suspense>
              </div>
            </div>
          </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({ });

const mapDispatchToProps = (dispatch) => (
  (
    bindActionCreators({
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
