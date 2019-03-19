import arraySort from 'array-sort';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../consts';

import './index.scss';

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

    public renderVideoItem = (item: IYouTubeItem) => {
        const iFrame = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`;

        return (
            <div className="section-video__item" key={item.id.videoId}>
                <div className="section-video__item-title">{item.snippet.title}</div>
                <div className="section-video__item-video" dangerouslySetInnerHTML={{ __html: iFrame }} />
            </div>
        );
    }

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
