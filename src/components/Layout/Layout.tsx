import React, { Component, Suspense } from 'react';
import { createStructuredSelector } from 'reselect';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../routes';

import { ILayoutProps, IDispatchProps, IState } from './ILayout';

class Layout extends Component<ILayoutProps, IState> {
  routesList: any[];

  constructor(props: ILayoutProps) {
    super(props);

    this.state = {
      name: 'Tmr'
    };

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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => (
  (
    bindActionCreators({
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
