import React, { useState } from "react";
import classNames from "classnames";
import { SEO, Header, Footer, VideoWrapper, SlackMessage, FacebookMessage, CannotEatThankYouWithBread, SlackMessageInput } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faHeart, faComment, faThumbsUp, faEllipsisH, faPlus, faUser, faHashtag } from "@fortawesome/pro-solid-svg-icons";
import {
  youAvatar,
  alecMarinAvatar,
  andriiSirakAvatar,
  bogdanShamanovskyiAvatar,
  bohdanPelekhAvatar,
  dashaKorotkykhAvatar,
  galynaMakogoniukAvatar,
  georgeBarvinokAvatar,
  igorGerasimowAvatar,
  ihorBaranovskyiAvatar,
  ilyaKotlovAvatar,
  irynaShvetsAvatar,
  irynaSteshytsAvatar,
  jeffreyRickerAvatar,
  juliaTitovaAvatar,
  kostiantynKravtsovAvatar,
  kostyaLukyanenkoAvatar,
  orestHapaliakAvatar,
  paulLymanAvatar,
  sergeyBorysenkoAvatar,
  tarasPetryshakAvatar,
  vadymDrybasAvatar,
  vasylMagoraAvatar,
  vitaliyBoyarskyAvatar,
  volodymyrKondratenkoAvatar,
  volodymyrTysjakAvatar,
  yuriiOstapchukAvatar,
  bonuslyAvatar
} from "../assets/images/avatars/slack-squared";
import {
  juliaTitovaAvatar as juliaTitovaRoundedAvatar,
  dashaKorotkykhAvatar as dashaKorotkykhRoundedAvatar
} from "../assets/images/avatars/intro-rounded";
import "./index.scss";

const Index = () => {
  const [isModalActive, setModal] = useState(false);
  return (
    <>
      <SEO description="Hi" keywords={[]} />
      <article className="content">
        <div className="container grid-lg">
          <div className="columns">
            <div className="column">
              <div className="hero hero-sm hero-fh">
                <div className="hero-body">
                  <div className="text-center">
                    <Header />
                    <h1 className="main-title">
                      <span className="what-if">А что если бы</span>
                      <span className="thank-you">спасибо</span>
                      <span className="could-be-eaten-with-bread">можно было намазать на хлеб?</span>
                    </h1>
                    <div className="avatars-wrapper">
                      <div className="avatar-wrapper tooltip" data-tooltip="Julia Titova">
                        <object className="avatar-object" data={juliaTitovaRoundedAvatar} role="img" aria-label="Julia Titova"></object>
                      </div>
                      <div className="avatar-wrapper tooltip" data-tooltip="Dasha Korotkykh">
                        <object className="avatar-object" data={dashaKorotkykhRoundedAvatar} role="img" aria-label="Dasha Korotkykh"></object>
                      </div>
                    </div>
                    <div className="my-2"><strong>July 1<sup>st</sup></strong>, 2019</div>
                    <div className="hint" onClick={() => setModal(!isModalActive)}>
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="compact" />
        <div className={classNames("modal", {
          "active": isModalActive
        })} id="modal-id">
          <div className="modal-overlay" aria-label="Close" onClick={() => setModal(false)}></div>
          <div className="modal-container">
            <div className="modal-header">
              <div className="btn btn-clear float-right" aria-label="Close" onClick={() => setModal(false)}></div>
              <div className="modal-title h5">What does this even mean?</div>
            </div>
            <div className="modal-body">
              <div className="content">
                Russian saying <strong><CannotEatThankYouWithBread /></strong> means <strong>"You cannot eat "thank you" with bread"</strong> or <strong>"Can't put thanks in your pocket (or in the bank)"</strong>.
              </div>
            </div>
            <div className="modal-footer">
              So... <em>what if you could?</em>
            </div>
          </div>
        </div>
        <div className="container grid-lg">
          <div className="columns">
            <div className="column">
              <div className="hero hero-sm hero-fh">
                <div className="hero-body">
                  <h1 className="text-center">You're <strong>awesome and incredible</strong>!</h1>
                  <VideoWrapper title="You're breathtaking!">
                    <iframe src="//coub.com/embed/1vv2dd?muted=false&autostart=false&originalSize=true&startWithHD=true" allowFullScreen frameBorder="0" width="1280" height="720" allow="autoplay"></iframe>
                  </VideoWrapper>
                  <FacebookMessage background="grey">
                    <strong>— Hey</strong>, <span style={{ fontWeight: 600 }}>привіт</span>, привет <span className="waving-hand">👋</span>!<br />The reason to gather all of you here is to let you know that you're <strong>awesome and incredible</strong> and we just really want you to not only know it but <strong>truly feel it</strong> as well. Basically, that’s it <em>(yes, you can leave)</em>, but then wouldn’t it be nice to somehow keep telling it (and cheering each other up) beyond once-in-some-time gathering?
                  </FacebookMessage>
                </div>
              </div>
              <div className="hero hero-sm hero-fh">
                <div className="hero-body">
                  <h1 className="text-center">Welcome to <strong style={{ color: "#33CC66" }}>Bonusly</strong>!</h1>
                  <FacebookMessage background="grey">
                    — We gave it a thought and sought the aid of <a href="https://bonus.ly/"><strong>Bonusly</strong></a>, a platform designed and used to exchange gratitude with virtual currency, which at any point could be exchanged for perks of one’s choice. Bonusly offers to:
                    <div className="columns about-bonusly">
                      <div className="column col-4 col-sm-12 my-1">
                        <div className="panel">
                          <div className="panel-header">
                            <div className="panel-title">
                              <h6>
                                <strong>Promote your mis-s-s-s-sion!</strong>
                                <span className="text-gray"><small>#1</small></span>
                              </h6>
                            </div>
                          </div>
                          <div className="panel-body">
                            <span style={{
                              fontSize: "3em",
                              float: "right",
                              lineHeight: "1.25em"
                            }}>😤</span>
                            Make recognition more impactful by connecting it to your company’s core values and giving visibility to everyone’s contributions.
                          </div>
                        </div>
                      </div>
                      <div className="column col-4 col-sm-12 my-1">
                        <div className="panel">
                          <div className="panel-header">
                            <div className="panel-title">
                              <h6>
                                <strong>Build stronger t-t-t-t-teams!</strong>
                                <span className="text-gray"><small>#2</small></span>
                              </h6>
                            </div>
                          </div>
                          <div className="panel-body">
                            <span style={{
                              fontSize: "3em",
                              float: "right",
                              lineHeight: "1.25em"
                            }}>💩</span>
                            Build a scalable culture of recognition by empowering everyone to recognize their peers, direct reports, and managers.
                          </div>
                        </div>
                      </div>
                      <div className="column col-4 col-sm-12 my-1">
                        <div className="panel">
                          <div className="panel-header">
                            <div className="panel-title">
                              <h6>
                                <strong>Boost enga-a-a-a-agement!</strong>
                                <span className="text-gray"><small>#3</small></span>
                              </h6>
                            </div>
                          </div>
                          <div className="panel-body">
                            <span style={{
                              fontSize: "3em",
                              float: "right",
                              lineHeight: "1.25em"
                            }}>🚣‍</span>
                            Encourage frequent and timely recognition by integrating with the communication tools your employees use every day.                        
                          </div>
                        </div>
                      </div>
                    </div>
                    Their website says many companies are happy using it, so that’s a good thing. On the other hand, here at Ricker Lyman Robotic we already have a pretty cool, engaged and coordinated team, is there any <em>actual fun</em> in integrating something like that?
                  </FacebookMessage>
                </div>
              </div>
              <div className="container">
                <div className="columns">
                  <div className="column">
                    <div className="hero hero-lg">
                      <div className="hero-body text-center">
                        <h1>But wait, <strong>there's moar</strong>!</h1>
                        <div className="columns">
                          <div className="column col-3 col-md-6 col-sm-12 my-1">
                            <div className="panel">
                              <div className="panel-header">
                                <div className="panel-title">
                                  <h4>Goddess of luck</h4>
                                  <img src="" />
                                </div>
                              </div>
                              <div className="panel-body">
                                Opens box once a month and grants 3 random yous <strong>+10 mana</strong> points each
                              </div>
                            </div>
                          </div>
                          <div className="column col-3 col-md-6 col-sm-12 my-1">
                            <div className="panel">
                              <div className="panel-header">
                                <div className="panel-title">
                                  <h4>Clark Kent's lottery</h4>
                                  <img src="" />
                                </div>  
                              </div>
                              <div className="panel-body">
                                Weekly event of 1 hour bidding window, after which one random participant steals <strong>jackpot</strong>
                              </div>
                            </div>
                          </div>
                          <div className="column col-3 col-md-6 col-sm-12 my-1">
                            <div className="panel">
                              <div className="panel-header">
                                <div className="panel-title">
                                  <h4>Sweepstake bets</h4>
                                  <img src="" />
                                </div>  
                              </div>
                              <div className="panel-body">
                                Bet <strong>10 mana</strong> on literally anything — send the bid to @clark.kent and add a descriptive message
                              </div>
                            </div>
                          </div>
                          <div className="column col-3 col-md-6 col-sm-12 my-1">
                            <div className="panel">
                              <div className="panel-header">
                                <div className="panel-title">
                                  <h4>Happy Working Anniversary</h4>
                                  <img src="" />
                                </div>  
                              </div>
                              <div className="panel-body">
                                Goddess of retention sends <strong>+50 redeemable mana</strong> every working anniversary you hit
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>           
              <div className="hero hero-sm hero-fh">
                <div className="hero-body">
                  <h1 className="text-center">How does this thing <strong>work</strong>?</h1>
                  <FacebookMessage background="grey">
                    — Suppose that every month you would get paid not only with a salary, but also with a portion of <strong>mana</strong>. Normally, <strong>mana</strong> is used to cast spells. This specific one is used to spell <strong>🙏thanks</strong> and <strong>👍thumbs-up</strong>. Yep, that’s all you can do with it — <strong>send out</strong>. <br /><br />When you bind your <em>raw</em> mana with gratitude or inspiration or lolz and send in the direction of another person, they receive it as a <em>redeemable</em> mana. <br /><br />And here's what's going to happen:
                    <ol className="compact inverted">
                      <li>You'll express yourself 🎉</li>
                      <li>You'll encourage your peer 🤜🤛</li>
                      <li>That lucky guy or gal not only instantly feels better, but can also use this redeemable <strong>mana</strong> to get gear, loot, and power-ups of his choice! 🔫</li>
                    </ol>
                  </FacebookMessage>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <div className="container grid-lg">
          <div className="columns">
            <div className="column">
              <div className="hero hero-lg">
                <div className="hero-body">
                  <h1 className="text-center">How to <strong>send mana</strong>?</h1>
                  <h4>With <a href="https://bonus.ly/"><strong>Bonusly</strong></a></h4>
                  <div className="bonusly-mockup">
                    <h5 style={{ color: "white" }}>You have <strong>85 mana points</strong> to give away <FontAwesomeIcon icon={faQuestionCircle} style={{ opacity: 0.5 }} /></h5>
                    <div style={{ display: "flex" }}>
                      <div style={{ marginRight: "1em" }}>
                        <div className="bonusly-message-input">
                          <div className="bonusly-message-input__actions">
                            <button className="bonusly-button">
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <button className="bonusly-button">
                              <FontAwesomeIcon icon={faUser} />
                            </button>
                            <button className="bonusly-button">
                              <FontAwesomeIcon icon={faHashtag} />
                            </button>
                          </div>
                          <textarea placeholder="+5 @volodymyr.kushnir for helping me launch a marketing campaign so that we can generate new business #teamwork" />
                          <button className="bonusly-button bonusly-button--solid">Give</button>
                        </div>
                        <div className="bonusly-message">
                          <div className="bonusly-message__header">
                            <div>
                              <div className="points">+5</div>
                              <img className="recepient" src={vasylMagoraAvatar} alt="" />
                            </div>
                            <div className="text-gray">
                              <small>2d ago</small>
                              <FontAwesomeIcon icon={faEllipsisH} />
                            </div>
                          </div>
                          <div className="bonusly-message__body">
                            <strong>Iryna:</strong> <strong style={{
                              borderRadius: "100%",
                              border: "3px solid #33cc66",
                              padding: "0.125em",
                              color: "#33cc66"
                            }}>+5</strong> <strong style={{ color: "#33cc66" }}>@v.magora</strong> for a fascinating new beard style <span className="text-gray">#breaking-news-this-just-in #за-гарні-очі #lacoste</span>
                          </div>
                          <div className="bonusly-message__actions text-gray">
                            <ul>
                              <li><FontAwesomeIcon icon={faHeart} /> Add On</li>
                              <li><FontAwesomeIcon icon={faComment} /> Comment</li>
                              <li><FontAwesomeIcon icon={faThumbsUp} /> React</li>
                            </ul>
                          </div>
                          <div className="bonusly-message__comment">
                            <input placeholder="Add a comment" />
                          </div>
                        </div>
                      </div>
                      <div style={{ flex: "0 0 30%" }}>
                        <div className="bonusly-panel text-center">
                          <h5 className="text-center">You have <strong>50 mana points</strong> to redeem</h5>
                          <button class="bonusly-button bonusly-button--basic" style={{ width: "100%" }}>Pick a reward</button>
                        </div>
                        <div style={{ marginTop: "2em" }}>
                          <div><strong>Trending</strong></div>
                          <div>
                            #за-гарні-очі
                            <span className="float-right"><strong>2</strong></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <h4>On <a href="https://rickerlyman.slack.com/messages/CK7MBDXHU/"><strong>Slack</strong></a></h4>
                  <div style={{
                    padding: "1em",
                    border: "1px solid #eeeeee"
                  }}>
                    <h3><strong>#rlr-bonusly</strong></h3>
                    <p>You created this channel on July 1st. This is the very beginning of the <strong>#bonusly</strong> channel.</p>
                    <div className="today"><span>Today</span></div>
                    <SlackMessage
                      senderId="julia-titova"
                      senderName="Julia Titova"
                      senderAvatarUrl={juliaTitovaAvatar}
                      reactions={[
                        { emoji: "👏", count: 1 },
                        { emoji: "👏🏻", count: 3 },
                        { emoji: "👏🏿", count: 1 },
                        { emoji: "👏🏽", count: 2 },
                        { emoji: "👏🏼", count: 5 },
                        { emoji: "🎬", count: 1 }
                      ]}
                    >
                      <div>Use <strong><code>/give</code></strong> command and a familiar <strong><em><code>&lt;amount&gt; &lt;recepient&gt; &lt;reason&gt; &lt;hashtag&gt;</code></em></strong> syntax to <strong>🧙‍️compose a spell</strong> and Bonusly Slack integration app will take it from there.</div>
                    </SlackMessage>
                    <SlackMessage
                      senderId="bonusly"
                      senderName="Bonusly"
                      senderAvatarUrl={bonuslyAvatar}
                      reactions={[
                        { emoji: "🤭", count: 4 },
                        { emoji: "🎅", count: 2 },
                        { emoji: "🔥", count: 11 },
                        { emoji: "😛", count: 1 }
                      ]}

                      isBonusly
                      isBonuslyBonus
                    >
                      <div><strong>Iryna:</strong> <strong>+3</strong> <span className="bg-secondary">@v.magora</span> for a fascinating new beard style <a href="#"><strong>#breaking-news-this-just-in</strong></a> <a href="#"><strong>#за-гарні-очі</strong></a> <a href="#"><strong>#lacoste</strong></a></div>
                    </SlackMessage>
                    <SlackMessage
                      senderId="paul-lyman"
                      senderName="Paul Lyman"
                      senderAvatarUrl={paulLymanAvatar}
                      reactions={[
                        { emoji: "😊", count: 1 },
                        { emoji: "🤖", count: 5 },
                        { emoji: "🐦", count: 1 },
                        { emoji: "👀", count: 3 },
                      ]}
                      replies={[
                        { name: "Kostya Lukyanenko", avatarUrl: kostyaLukyanenkoAvatar },
                        { name: "George Barvinok", avatarUrl: georgeBarvinokAvatar },
                        { name: "Volodymyr Kondratenko", avatarUrl: volodymyrKondratenkoAvatar },
                      ]}
                    >
                      <div><strong>+10</strong> <span className="bg-secondary">@a.sirak</span> for sharing handy articles on <span className="text-primary"><strong>#rlr-general-ua</strong></span>. Sharing is caring! 😁 <span className="text-primary"><strong>#thanks</strong></span></div>
                    </SlackMessage>
                    <SlackMessage
                      senderId="bonusly"
                      senderName="Bonusly"
                      senderAvatarUrl={bonuslyAvatar}
                      reactions={[
                        { emoji: "🤭", count: 4 },
                        { emoji: "🎅", count: 2 },
                        { emoji: "🔥", count: 11 },
                        { emoji: "😛", count: 1 }
                      ]}
                      replies={[
                        { name: "Julia Titova", avatarUrl: juliaTitovaAvatar },
                        { name: "Andrii Sirak", avatarUrl: andriiSirakAvatar },
                        { name: "Bogdan Shamanovskyi", avatarUrl: bogdanShamanovskyiAvatar },
                        { name: "Kostiantyn Kravtsov", avatarUrl: kostiantynKravtsovAvatar },
                        { name: "Alec Marin", avatarUrl: alecMarinAvatar }
                      ]}
                      isBonusly
                    >
                      <div><strong>Jeffrey commented on <a href="#"><strong>Vasyl's bonus</strong></a>:</strong> <strong>+5</strong> indeed, that is reasonable, give credit where credit is due</div>
                    </SlackMessage>
                    <SlackMessage
                      senderId="bohdan-pelekh"
                      senderName="Bohdan Pelekh"
                      senderAvatarUrl={bohdanPelekhAvatar}

                      replies={[
                        { name: "Vasyl Magora", avatarUrl: vasylMagoraAvatar },
                        { name: "Ilya Kotlov", avatarUrl: ilyaKotlovAvatar },
                        { name: "Orest Hapaliak", avatarUrl: orestHapaliakAvatar },
                        { name: "Vadym Drybas", avatarUrl: vadymDrybasAvatar },
                        { name: "Yurii Ostapchuk", avatarUrl: yuriiOstapchukAvatar },
                        { name: "Bohdan Pelekh", avatarUrl: bohdanPelekhAvatar }
                      ]}
                    >
                      <div><strong>+45</strong> and a cookie to <span className="bg-secondary">@y.ostapchuk</span>, 'cause that guy you recommended last week is getting hireeeeeed! <span className="text-primary"><strong>#referral #happyhr</strong></span></div>
                    </SlackMessage>
                    <SlackMessageInput>
                      <strong>/give +5 @that_awesome_fella</strong> for <strong>tending extra time to our unit tests</strong> when we needed them the most. Here goes hashtag <strong>#staying-up-late</strong>.
                    </SlackMessageInput>
                  </div>
                </div>  
              </div>
            </div>
          </div>  
        </div>
        <div className="container grid-lg">
          <div className="columns">
            <div className="column">
              <div className="hero hero-sm hero-fh">
                <div className="hero-body text-center">
                  <h1>What kind of <a href="https://bonus.ly/company/reward_categories/custom"><strong>stuff</strong></a> can one get?<br />⚾🥑⏳🙏🧯🧻🗿🔦💣</h1>
                </div>
              </div>
              <div className="hero hero-sm hero-fh">
                <div className="hero-body text-center">
                  <h1 style={{
                    fontWeight: 800,
                    margin: 0
                  }}>Have fun! 🎉</h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Index;
