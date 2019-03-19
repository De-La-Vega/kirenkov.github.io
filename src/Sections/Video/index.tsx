import arraySort from 'array-sort';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
import YouTube, { Options } from 'react-youtube';

import { ROUTES } from '../../consts';

import './index.scss';

/**
 * YT Player options.
 */
const opts: Options = {
    height: '480',
    playerVars: {
        origin: 'http://kirenkov.me/'
    },
    width: '854',
};

/**
 * YT response type.
 */
enum EYouTubeKind {
    VIDEO = 'youtube#video',
    CHANNEL = 'youtube#searchResult',
    PLAYLIST = 'youtube#playlist'
}

/**
 * YT Video item.
 */
interface IYouTubeItem {
    snippet: {
        title: string;
        description: string;
        publishedAt: string;
    };
    id: {
        videoId: string;
        kind: EYouTubeKind;
    }
}

/**
 * Component state.
 */
interface IState {
    items: IYouTubeItem[];
}

export class Video extends React.Component<{}, IState> {
    public state: IState = {
        items: [],
    };

    public componentDidMount (): void {
        const request: AxiosRequestConfig = {
            method: 'GET',
            timeout: 10000,
            url: 'https://www.googleapis.com/youtube/v3/search?order=date&type=video&part=snippet&channelId=UCn-P_F0tfY21cfnkyv2lsRQ&maxResults=50&key=AIzaSyBJmVGwdrr3O55SsuctnaKgGmqtkpkPupM',
        };

        axios
            .request(request)
            .then((response: AxiosResponse) => {
                const items: IYouTubeItem[] = response.data.items;
                const itemsSorted: IYouTubeItem[] = arraySort(items, 'snippet.publishedAt', { reverse: true });

                this.setState({ items: itemsSorted });
            })
            .catch((error: AxiosError) => {
                // tslint:disable-next-line:no-console
                console.log('error', error);
            });
    }

    public renderVideoItem = (item: IYouTubeItem) => (
        <div className="section-video__item" key={item.id.videoId}>
            <div className="section-video__item-title">{item.snippet.title}</div>
            <div className="section-video__item-video">
                <YouTube
                    videoId={item.id.videoId}
                    opts={opts}
                />
            </div>
        </div>
    )

    public render (): JSX.Element {
        const { items = [] } = this.state;

        return (
            <div className="g-outer section-video">
                <div className="g-inner container">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 col-md-offset-2">
                            <div className="section-video__back">
                                <Link className="section-video__back-link base-link" to={ROUTES.MAIN_PAGE.PATH}>&lt; Назад</Link>
                            </div>
                            <div className="row section-video__title">
                                <div className="col-xs-12 col-sm-9 section-video__title-name">
                                    Просто: разработка
                                </div>
                                {/* <div className="col-xs-12 col-sm-3 section-video__title-subscribe">
                                    <div
                                        className="g-ytsubscribe"
                                        data-channelid="UCn-P_F0tfY21cfnkyv2lsRQ"
                                        data-layout="default"
                                        data-count="default"
                                    />
                                </div> */}
                            </div>
                            {items.length > 0 ? items.map(this.renderVideoItem) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
