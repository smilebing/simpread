console.log( "===== simpread option welcome page load =====" )

import '../vender/carousel/carousel.css';
import 'carousel';

import Button  from 'button';

import * as ss from 'stylesheet';

const welcbgcls   = "welcome",
      welcbgclsjq = `.${welcbgcls}`,
      welcbg      = `<div class="${ welcbgcls }"></div>`;
let   curidx, max = [ 0, 0 ];

const style = {

    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'relative',

        minWidth: '400px',
        minHeight: '400px',

        width: '650px',
        height: '630px',

        backgroundColor: '#fff',

        borderRadius: '3px',
        boxShadow: 'rgba(0, 0, 0, .247059) 0px 14px 45px',

        userSelect: 'none',
    },

    section: {
        textAlign: 'center',
    },

    h2: {
        marginBottom: 0,

        color: 'inherit',

        fontSize: '24px',
        fontWeight: 'bold',

        lineHeight: '32px',
        textAlign: 'center',
    },

    desc: {
        padding: '5px',

        color: 'rgba(51, 51, 51, 0.7)',

        fontSize: '15px',
        fontWeight: 400,

        lineHeight: '32px',
        textAlign: 'center',
    },

    gif : {
        paddingTop: '58px',
        width: '550px',
    },

    strong: {
        fontWeight: 'normal',
        color: '#3f51b5',
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',

        marginBottom: '24px',
    },

    close: {
        position: 'absolute',

        top: 0,
        right: 0,
    },

}

class Welcome extends React.Component {

    state = {
        style: { display: "none" },
        state: "next_icon",
    }

    prevClick() {
        $( '.carousel.carousel-slider' ).carousel( "prev" );
    }

    nextClick() {
        if ( curidx != max ) {
            $( '.carousel.carousel-slider' ).carousel( "next" );
        } else {
            exit();
        }
    }

    closeClick() {
        exit();
    }

    carousel() {
        $( ".carousel-item" ).map( ( _, item ) => {
            const $item = $(item),
                  version = $item.attr( "id" );
            version != "end" && version != "start" && version != this.props.version && $item.remove();
        });
    }

    componentDidMount() {
        !this.props.first && this.carousel();
        max = $( ".carousel-item" ).length - 1;
        $( '.carousel.carousel-slider' ).carousel({
            fullWidth: true,
            onCycleTo: idx => {
                curidx = idx;
                if ( curidx == max ) {
                    this.setState({
                        style: { display: "block" },
                        state: "right_icon",
                    });
                } else if ( curidx == 0 ) {
                    this.setState({
                        style: { display: "none" },
                        state: "next_icon",
                    });
                } else {
                    this.state.style.display != "block" && this.setState({ style: { display: "block" } });
                    this.state.state != "next_icon"     && this.setState({ state: "next_icon" });
                }
            }
        });
    }

    componentWillUnmount() {
        $( welcbgclsjq ).remove();
    }

    render() {
        return (
            <welcome style={ style.root }>
                <div className="carousel carousel-slider" data-indicators="true">
                    <div className="carousel-item" id="start">
                        <section style={ style.section }>
                            <img src={ ss.IconPath( "welcome" )}/>
                            <h2 style={{ ...style.h2, ...{ 'margin-bottom': 0 } }}>{ this.props.first ? "欢迎使用 简悦": "简悦 已升至最新版" }</h2>
                            <div style={ style.desc }>
                                让你瞬间进入沉浸式阅读的 Chrome 扩展，类似 Safari 的阅读模式。<br/>
                                去掉干扰元素，提升阅读体验，<strong style={ style.strong }>「简」</strong>单阅读，愉<strong style={ style.strong }>「悦」</strong>心情。<br/>
                                为了达到 <strong style={ style.strong }>「完美」</strong> 的阅读模式，简悦适配了 <strong style={ style.strong }><a target="_blank" href="https://github.com/Kenshin/simpread/wiki/%E9%80%82%E9%85%8D%E7%AB%99%E7%82%B9%E5%88%97%E8%A1%A8">230+</a></strong> 个网站。
                            </div>
                        </section>
                    </div>
                    <div className="carousel-item">
                        <section style={ style.section }>
                            <img src={ ss.IconPath( "welcome-read" )}/>
                            <h2 style={ style.h2 }>阅读模式</h2>
                            <div style={ style.desc }>
                                简悦 <strong>独有功能</strong>，自动提取适配页面的标题、描述、正文、媒体等资源。<br/>
                                更多阅读场景，包括：<a target="_blank" href="https://github.com/Kenshin/simpread/wiki/%E4%B8%B4%E6%97%B6%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F">临时阅读</a> · <a target="_blank" href="https://github.com/Kenshin/simpread/wiki/TXT-%E9%98%85%E8%AF%BB%E5%99%A8">TXT 阅读器</a> · <a target="_blank" href="https://github.com/Kenshin/simpread/wiki/%E4%B8%BB%E5%8A%A8%E9%80%82%E9%85%8D%E9%98%85%E8%AF%BB%E6%A8%A1%E5%BC%8F">主动适配模式</a>。<br/>
                                支持 <a target="_blank" href="https://github.com/Kenshin/simpread/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">自定义 CSS</a> 以及 <a target="_blank" href="https://github.com/Kenshin/simpread/wiki/%E8%AE%BA%E5%9D%9B%E7%B1%BB%E9%A1%B5%E9%9D%A2%E5%8F%8A%E5%88%86%E9%A1%B5">论坛类页面 / 分页</a>。<br/>
                            </div>
                        </section>
                    </div>
                    <div className="carousel-item">
                        <section style={ style.section }>
                            <img src={ ss.IconPath( "welcome-focus" )}/>
                            <h2 style={ style.h2 }>聚焦模式</h2>
                            <div style={ style.desc }>
                                高亮鼠标所在的文章段落，不改变当前页面的结构，适合未适配的网站。<br/>
                                除此以外，包含 <strong>阅读模式的全部功能</strong>。
                            </div>
                        </section>
                    </div>
                    <div className="carousel-item" id="1.1.0">
                        <section style={ style.section }>
                            <img src={ ss.IconPath( "welcome-setting" )}/>
                            <h2 style={ style.h2 }>站点编辑器 · 站点适配源 · 站点管理器</h2>
                            <div style={ style.desc }>
                                页面上任意元素均可隐藏，更支持编程，详细请看 <a href="https://github.com/Kenshin/simpread/wiki/%E7%AB%99%E7%82%B9%E7%BC%96%E8%BE%91%E5%99%A8" target="_blank">站点编辑器</a><br/>
                                更灵活、社区化的多种 <a href="https://github.com/Kenshin/simpread/wiki/%E7%AB%99%E7%82%B9%E9%80%82%E9%85%8D%E6%BA%90" target="_blank">站点适配源</a>。<br/>
                                内置了 <a href="https://github.com/Kenshin/simpread/wiki/%E7%AB%99%E7%82%B9%E7%AE%A1%E7%90%86%E5%99%A8" target="_blank">站点管理器</a>，方便管理全部的适配站点。
                            </div>
                        </section>
                    </div>

                    <div className="carousel-item" id="1.0.3">
                        <section style={ style.section }>
                            <img src="http://ojec5ddd5.bkt.clouddn.com/welcome-service.png"/>
                            <h2 style={ style.h2 }>连接你的生产力工具</h2>
                            <div style={ style.desc }>
                                支持下载 <strong>PDF · PNG · <a target="_blank" href="https://github.com/Kenshin/simpread/wiki/%E5%8F%91%E9%80%81%E5%88%B0-Kindle">Epub</a></strong> 到本地 以及 发送到 <strong><a target="_blank" href="https://github.com/Kenshin/simpread/wiki/%E5%8F%91%E9%80%81%E5%88%B0-Kindle">Kindle</a></strong>。<br/>
                                支持输出到 <strong>Dropbox · 印象笔记 · Evernote · Onenote · Google 云端硬盘。</strong><br/>
                                发送页面链接到 <strong>Pocket · Instapaper · Linnk</strong> ，详细 <a target="_blank" href="https://github.com/Kenshin/simpread/wiki/%E6%8E%88%E6%9D%83%E6%9C%8D%E5%8A%A1">请看这里</a> 。
                            </div>
                        </section>
                    </div>

                    <div className="carousel-item" id="end">
                        <section style={ style.section }>
                            <img src={ ss.IconPath( "welcome-others" )}/>
                            <h2 style={ style.h2 }>更多功能 等你发现！</h2>
                        </section>
                    </div>
                </div>
                <footer style={ style.footer }>
                    <Button style={ this.state.style }
                        shape="circle" width="40px"
                        color="#fff" backgroundColor="#C8E6C9"
                        icon={ ss.IconPath( "prev_icon" ) }
                        waves="md-waves-effect md-waves-button"
                        onClick={ ()=>this.prevClick() } />
                    <Button
                        shape="circle" width="40px"
                        color="#fff" backgroundColor="#4CAF50"
                        icon={ ss.IconPath( this.state.state ) }
                        waves="md-waves-effect md-waves-button"
                        onClick={ ()=>this.nextClick() } />
                </footer>
                <div style={ style.close }>
                    <Button
                        shape="circle" width="36px"
                        color="#fff" backgroundColor="transparent" hoverColor="transparent"
                        icon={ ss.IconPath( "close_icon" ) }
                        onClick={ ()=>this.closeClick() } />
                </div>
            </welcome>
        )
    }
}

/**
 * Exit()
 */
function exit() {
    $( welcbgclsjq ).velocity({ opacity: 0 }, { complete: ()=>{
        ReactDOM.unmountComponentAtNode( $(welcbgclsjq)[0] );
    }});
}

/**
 * Welcome Render
 * 
 * @param {string} root name
 * @param {boolean} true: first load
 * @param {string} version
 */
export function Render( root, first, version ) {
    const $root = $( root );
    if ( $root.find( "." + welcbgcls ).length == 0 ) {
        $root.append( welcbg );
    }
    ReactDOM.render( <Welcome first={ first } version={ version } />, $( welcbgclsjq )[0] );
}