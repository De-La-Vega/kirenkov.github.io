import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from './consts';

import { Main } from './Main';
import { YouTubeVideo } from './YouTubeVideo';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path={ROUTES.MAIN_PAGE.PATH} component={Main} exact />
            <Route path={ROUTES.VIDEO.PATH} component={YouTubeVideo} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app'),
);
